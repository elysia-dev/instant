import { FunctionComponent, useCallback, useContext, useEffect, useMemo, useState } from "react";

import ElysiaAsset3 from "src/assets/image/portfolio/elysia-asset-3.png";
import ElysiaAsset4 from "src/assets/image/portfolio/elysia-asset-4.png";
import ElysiaAsset5 from "src/assets/image/portfolio/elysia-asset-5.png";
import ElysiaAsset6 from "src/assets/image/portfolio/elysia-asset-6.png";
import ElysiaAsset7 from "src/assets/image/portfolio/elysia-asset-7.png";
import ElysiaAssetRed1 from "src/assets/image/portfolio/elysia-asset-red-1.png";
import ElysiaAssetBlue1 from "src/assets/image/portfolio/elysia-asset-blue-1.png";
import { useTranslation } from "react-i18next";
import SubgraphContext, { IAssetBond, IReserveSubgraphData } from "src/contexts/SubgraphContext";
import { parseTokenId } from "src/pages/utiles/parseTokenId";
import CollateralCategory from "src/enums/CollateralCategory";
import AssetList from 'src/components/AssetList';
import useMediaQueryType from "src/hooks/useMediaQueryType";
import MediaQuery from "src/enums/MediaQuery";
import Slider from "src/modules/mobile/slider/Slider";


const Portfolio: FunctionComponent<{ ref: React.RefObject<HTMLDivElement> }> = ({
  ref
}) => {
  const { getAssetBonds } = useContext(SubgraphContext);
  const [isMoreAsset, setMoreAsset] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [loanSwitch, setLoanSwitch] = useState(false)
  const loanData = getAssetBonds();
  const { t } = useTranslation();
  const { value: mediaQuery } = useMediaQueryType();
  const assetBondToken = loanData.filter((product) => {
    const parsedId = parseTokenId(product.id);
    return CollateralCategory.Others !== parsedId.collateralCategory;
  });
  const elysiaArray = [
    [ElysiaAssetBlue1, "Elysia Asset Blue #1", "426075"],
    [ElysiaAssetRed1, "Elysia Asset Red #1", "181704"],
    [ElysiaAsset7, "Elysia Asset #7", "823045"],
    [ElysiaAsset6, "Elysia Asset #6", "1182180"],
    [ElysiaAsset5, "Elysia Asset #5", "1040950"],
    [ElysiaAsset4, "Elysia Asset #4", "814810"],
    [ElysiaAsset3, "Elysia Asset #3", "1041150"]
  ]
  const assetBondTokenLength = useMemo(() => {
    return assetBondToken.length
  }, [assetBondToken, loanData])

  const SwithcingState = () => {
    setMoreAsset(!isMoreAsset);
  }
  const viewMoreHandler = useCallback(() => {
    if (pageNumber >= assetBondTokenLength / 6) {
      return setPageNumber(1)
    }
    setPageNumber((prev) => prev + 1);
  }, [pageNumber]);
  return (
    <section
      className="portfolio contents-container"
      id="portfolioref"
      // ref={Portfolio}
    >
        <div className="portfolio__container">
          <h1
            id="portfolio"
            className="portfolio__text--bold section__text--bold scroll-animation scroll-animation--up"
            style={{ paddingTop: 70 }}
          >
            {t("portfolio.title")}
          </h1>
          <div className="portfolio__button__wrapper">
            <div className={`portfolio__button ${!loanSwitch ? "" : "disable"}`}
              onClick={() => {
                setLoanSwitch(false)
              }}
            >
              <h2>
                ELYSIA
              </h2>
            </div>
            <div className={`portfolio__button ${loanSwitch ? "" : "disable"}`}
              onClick={() => {
                setLoanSwitch(true)
              }}
            >
              <h2>
                ELYFI
              </h2>
            </div>
          </div>
          <div className="portfolio__content">
            <p className="scroll-animation scroll-animation--up">
              {t("portfolio.total")} <strong>{loanSwitch ? assetBondTokenLength : elysiaArray.length}</strong>
            </p>
            {
              loanSwitch ? 
                (
                  <div className="portfolio__elyfi"> 
                  {
                    <AssetList
                      assetBondTokens={
                        [...((assetBondToken as IAssetBond[]) || [])]
                          .slice(0, pageNumber * 6)
                          .sort((a, b) => {
                            return b.loanStartTimestamp! - a.loanStartTimestamp! >=
                              0
                              ? 1
                              : -1;
                          }) || []
                      }
                    />
                  }
                  </div>
                ) : (
                <div className="portfolio__wrapper">
                  {elysiaArray.map(([AssetImage, AssetName, AssetFunded], index) => {
                    return (
                      <div
                        className="portfolio__asset__container"
                        style={{
                          display: `${
                            index >= 6 && !isMoreAsset ? "none" : "block"
                          }`
                        }}
                        data-sa-margin={index * 15}
                      >
                        <div className="portfolio__asset-funded">
                          {t("portfolio.funded")}
                        </div>
                        <img
                          src={AssetImage}
                          className="portfolio__asset-picture"
                          alt="Elysia Asset"
                        />
                        <div>
                          <h2 className="portfolio__asset-name">{AssetName}</h2>
                          <p className="portfolio__asset-info funded">
                            {t("portfolio.total")}{" "}
                            <span className="portfolio__asset-value">
                              $
                              {AssetFunded.toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            }
          </div>
        </div>
        <h2 className="portfolio__see-more" onClick={loanSwitch ? viewMoreHandler : SwithcingState}>
          {(loanSwitch ? (pageNumber < assetBondTokenLength / 6) : !isMoreAsset) ? t("portfolio.seemore") : t("portfolio.close")}
        </h2>
      </section>
  )
}

export default Portfolio