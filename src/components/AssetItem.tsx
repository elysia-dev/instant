import { FunctionComponent, useEffect, useState } from 'react';
import { toCompactForBignumber, toPercent } from 'src/utiles/formatters';

import Slate from 'src/clients/Slate';
import ReserveData from 'src/core/data/reserves';
import { useTranslation } from 'react-i18next';
import { IAssetBond } from 'src/core/types/reserveSubgraph';
import Skeleton from 'react-loading-skeleton';

const AssetItem: FunctionComponent<{
  abToken: IAssetBond;
  onClick: () => void;
  style?: React.CSSProperties;
}> = ({ abToken, onClick, style }) => {
  const { t } = useTranslation();

  const [image, setImage] = useState('');
  const tokenInfo = ReserveData.find(
    (reserve) => reserve.address === abToken?.reserve.id,
  );

  const fetchImage = async () => {
    if (
      abToken.id ===
      '115792089237316195422007842550160057480242544124026915590235438085798243682305'
    ) {
      return setImage(
        'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
      );
    }
    try {
      const response = await Slate.fetctABTokenIpfs(abToken.ipfsHash || '');
      setImage(response.data.images[0]?.link);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [abToken]);

  return (
    <div className="portfolio__elyfi__items " style={style} onClick={onClick}>
      <div className="portfolio__elyfi__image">
        {image ? (
          <img src={image} alt={`csp_image_${abToken.id}`} />
        ) : (
          <Skeleton width={"100%"} height={"100%"} />
        )}
      </div>
      <div className="portfolio__elyfi__data">
        <div>
          <p>{t('portfolio.elyfi.loan_interest_rate')}</p>
          <h2>{toPercent(abToken.interestRate || '0')}</h2>
        </div>
        <div>
          <p>{t('portfolio.elyfi.borrowed')}</p>
          <h2>
            {'$ ' +
              toCompactForBignumber(
                abToken.principal || '0',
                tokenInfo?.decimals,
              )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
