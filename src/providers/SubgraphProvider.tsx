import { useEffect, useState } from "react";
import { ReserveSubgraph } from "src/clients/ReserveSubgraph";
import Loading from "src/components/Loading";
import SubgraphContext, { IAssetBond, initialReserveSubgraph, IReserveSubgraph } from "src/contexts/SubgraphContext";

const SubgraphProvider: React.FC = (props) => {
  const [state, setState] = useState<IReserveSubgraph>(initialReserveSubgraph)
  const [loading, setLoading] = useState(true)

  const fetchSubgraph = async () => {
    const reserves = await Promise.all(
      [ReserveSubgraph.getEthReserveData, ReserveSubgraph.getBscReserveData].map(async (fetcth) => {
      const res = await fetcth();
      return res.data.data.reserves.map((reserve) => {
        return {
          ...reserve,
          assetBondTokens: res.data.data.assetBondTokens.filter((ab) => ab.reserve.id === reserve.id)
        }
      })
    }))

    setState({
      data: {
        reserves: reserves.flat(),
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