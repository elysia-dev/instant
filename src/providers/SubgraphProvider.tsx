import { useEffect, useState } from "react";
import { ReserveSubgraph } from "src/clients/ReserveSubgraph";
import Loading from "src/components/Loading";
import SubgraphContext, { IAssetBond, initialReserveSubgraph, IReserveSubgraph } from "src/contexts/SubgraphContext";

const SubgraphProvider: React.FC = (props) => {
  const [state, setState] = useState<IReserveSubgraph>(initialReserveSubgraph)
  const [loading, setLoading] = useState(true)

  const fetchSubgraph = async () => {
    const mainnetData = await ReserveSubgraph.getEthReserveData()
    const bscData = await ReserveSubgraph.getBscReserveData()

    // FIXME
    // Our subgraph reserve has no child like asset bond tokens at v0.4.0
    setState({
      data: {
        reserves: [
          ...mainnetData.data.data.reserves.map((reserve) => {
            return {
              ...reserve,
              assetBondTokens: mainnetData.data.data.assetBondTokens.filter((ab) => ab.reserve.id === reserve.id)
            }
          }),
          ...bscData.data.data.reserves.map((reserve) => {
            return {
              ...reserve,
              assetBondTokens: bscData.data.data.assetBondTokens.filter((ab) => ab.reserve.id === reserve.id)
            }
          }),
        ],
      }
    })
  }

  const getAssetBonds = (): IAssetBond[] => {
    return state.data.reserves.reduce((arr, reserve) => {
      return [...arr, ...reserve.assetBondTokens]
    }, [] as IAssetBond[])
  }
  

  useEffect(() => {
    setLoading(true)
    fetchSubgraph().then(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return <Loading />

  return (
    <SubgraphContext.Provider
      value={{
        ...state,
        getAssetBonds
      }}
    >
      {props.children}
    </SubgraphContext.Provider>
  );
}

export default SubgraphProvider;