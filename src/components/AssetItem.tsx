import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { toCompactForBignumber, toPercent } from 'src/pages/utiles/formatters';
import { parseTokenId } from 'src/utiles/parseTokenId';
import GoogleMapReact from 'google-map-react';

import Slate from 'src/clients/Slate';
import ReserveData from 'src/core/data/reserves';
import { useTranslation } from 'react-i18next';
import { IAssetBond } from 'src/contexts/SubgraphContext';

const defaultLat = 37.5172;
const defaultLng = 127.0473;

const AssetItem: FunctionComponent<{
  abToken: IAssetBond;
  onClick: () => void;
  style?: React.CSSProperties;
}> = ({ abToken, onClick, style }) => {
  const { t } = useTranslation();
  const parsedTokenId = useMemo(() => {
    return parseTokenId(abToken.id);
  }, [abToken]);

  const lat = parsedTokenId.collateralLatitude / 100000;
  const lng = parsedTokenId.collateralLongitude / 100000;
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

  const Marker: React.FunctionComponent<{ lat: number; lng: number }> = () => {
    return <div className="pin"></div>;
  };

  const isLat = (num: number): boolean =>
    Number.isFinite(num) && Math.abs(num) <= 90;

  const isLng = (num: number): boolean =>
    Number.isFinite(num) && Math.abs(num) <= 180;

  useEffect(() => {
    fetchImage();
  }, [abToken]);

  return (
    <div className="portfolio__elyfi__items " style={style} onClick={onClick}>
      <div className="portfolio__elyfi__image">
        {image ? (
          <img src={image} alt={`csp_image_${abToken.id}`} />
        ) : (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
            }}
            defaultCenter={{
              lat: isLat(lat) ? lat : defaultLat,
              lng: isLng(lng) ? lng : defaultLng,
            }}
            defaultZoom={15}>
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
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
