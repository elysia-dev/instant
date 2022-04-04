import moment from 'moment';
import { IReserveSubgraphData } from 'src/core/types/reserveSubgraph';
import { request } from 'graphql-request';

const minimumTimestamp = moment().subtract(35, 'days').unix();

const query = `
{
  reserves {
    id
    lTokenInterestIndex
    lastUpdateTimestamp
    borrowAPY
    depositAPY
    totalBorrow
    totalDeposit
    lTokenUserBalanceCount
    dTokenUserBalanceCount
    deposit {
      id
    }
    incentivePool {
      id
    }
    borrow {
      id
      amount
      timestamp
      tokenId
    }
    repay {
      id
      userDTokenBalance
      feeOnCollateralServiceProvider
      timestamp
      tokenId
    }
    reserveHistory(
      orderBy: timestamp
      where: { timestamp_gt: ${minimumTimestamp} }
    ) {
      id
      timestamp
      borrowAPY
      depositAPY
      totalBorrow
      totalDeposit
    }
    lToken {
      id
    }
  },
  assetBondTokens(
    orderBy: loanStartTimestamp
    orderDirection: desc
    where: { state_gt: 2 }
  ) {
    id
    state
    signer {
      id
    }
    borrower {
      id
    }
    collateralServiceProvider {
      id
    }
    reserve {
      id
    }
    principal
    debtCeiling
    couponRate
    interestRate
    delinquencyRate
    loanStartTimestamp
    collateralizeTimestamp
    maturityTimestamp
    liquidationTimestamp
    ipfsHash
    signerOpinionHash
  }
}
`

export const bscReserveDataFetcher = (): Promise<IReserveSubgraphData[]> =>
  request("https://api.thegraph.com/subgraphs/name/donguks/elyfi-bsc", query);

export const ethReserveDataFetcher = (): Promise<IReserveSubgraphData[]> =>
  request("https://api.studio.thegraph.com/query/862/elyfi/v0.0.4", query);
