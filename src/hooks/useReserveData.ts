import { useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  bscReserveDataFetcher,
  ethReserveDataFetcher,
} from 'src/clients/ReserveSubgraph';

import {
  bscReserveMiddleware,
  ethReserveMiddleware,
} from 'src/middleware/reservesMiddleware';
import {
  IAssetBond,
  initialReserveSubgraph,
  IReserveSubgraph,
} from 'src/core/types/reserveSubgraph';

const useReserveData = (): {
  reserveState: IReserveSubgraph;
  getAssetBonds: () => IAssetBond[];
  loading: boolean;
} => {
  const [reserveState, setReserveState] = useState<IReserveSubgraph>(
    initialReserveSubgraph,
  );
  const [loading, setLoading] = useState(true);
  const { data: bscReserveData, isValidating: bscLoading } = useSWR(
    'bscReserveData',
    bscReserveDataFetcher,
    {
      use: [bscReserveMiddleware],
    },
  );

  const { data: ethReserveData, isValidating: ethLoading } = useSWR(
    'ethReserveData',
    ethReserveDataFetcher,
    {
      use: [ethReserveMiddleware],
    },
  );

  const fetchSubgraph = async () => {
    if (!ethReserveData || !bscReserveData) return;
    setReserveState({
      reserves: [...bscReserveData, ...ethReserveData],
    });
    setLoading(ethLoading || bscLoading);
  };

  const getAssetBonds = (): IAssetBond[] => {
    return reserveState.reserves.reduce((arr, reserve) => {
      return [...arr, ...reserve.assetBondTokens];
    }, [] as IAssetBond[]);
  };

  useEffect(() => {
    fetchSubgraph();
  }, [bscReserveData, ethReserveData]);

  return { reserveState, getAssetBonds, loading };
};

export default useReserveData;
