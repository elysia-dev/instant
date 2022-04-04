import AssetItem from 'src/components/AssetItem';
import { IAssetBond } from 'src/core/types/reserveSubgraph';

const AssetList: React.FC<{
  assetBondTokens: IAssetBond[];
}> = ({ assetBondTokens }) => {

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
