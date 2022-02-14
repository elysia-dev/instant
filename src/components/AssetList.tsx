import { useHistory, useParams } from 'react-router-dom';
import AssetItem from 'src/components/AssetItem';
import { IAssetBond } from 'src/contexts/SubgraphContext';

const AssetList: React.FC<{
  assetBondTokens: IAssetBond[];
}> = ({ assetBondTokens }) => {
  const history = useHistory();
  const { lng } = useParams<{ lng: string }>();

  return (
    <div className="portfolio__elyfi__container">
      {assetBondTokens.map((abToken, index) => {
        return (
          <AssetItem
            key={index}
            abToken={abToken}
            onClick={() => {
              window.open(`https://www.elyfi.world/en/portfolio/${abToken.id}`, '_blank');
            }}
          />
        );
      })}
    </div>
  );
};

export default AssetList;
