import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./ProductDisplay.module.css";

export type ProductDisplayType = {
  className?: string;
};

const ProductDisplay: FunctionComponent<ProductDisplayType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.productDisplay, className].join(" ")}>
      <div className={styles.featuredProduct}>
        <div className={styles.featuredProductHeader}>
          <div className={styles.div}>
            <div className={styles.price}>Featured Product</div>
          </div>
        </div>
        <div className={styles.featuredProductDetails}>
          <div className={styles.featuredProductInfo}>
            <div className={styles.featuredProductDescription}>
              <div className={styles.featuredProductAttributes}>
                <div className={styles.featuredProductStock}>
                  <div className={styles.div1}>
                    <img
                      className={styles.featuredProductInStockIcon}
                      alt=""
                      src="/frame-6.svg"
                    />
                  </div>
                  <div className={styles.premiumWirelessHeadphonesParent}>
                    <div className={styles.premiumWirelessHeadphones}>
                      Premium Wireless Headphones
                    </div>
                    <div className={styles.electronics29999}>
                      Electronics • $299.99
                    </div>
                  </div>
                </div>
                <div className={styles.featuredProductStockStatus}>
                  <div className={styles.span}>
                    <div className={styles.wirelessHeadphones}>
                      In Stock: 45
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productTable}>
              <div className={styles.thead}>
                <div className={styles.id}>ID</div>
                <div className={styles.headerName}>
                  <div className={styles.productName}>Product Name</div>
                </div>
                <div className={styles.headerActions}>
                  <div className={styles.headerCategory}>
                    <div className={styles.category}>Category</div>
                  </div>
                  <div className={styles.headerPrice}>
                    <div className={styles.price}>Price</div>
                    <div className={styles.headerPriceIcon}>
                      <img
                        className={styles.headerPriceSort}
                        alt=""
                        src="/frame-7.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.price}>Stock</div>
                  <div className={styles.price}>Actions</div>
                </div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tbody}>
                  <div className={styles.tr}>
                    <div className={styles.productIdCells}>
                      <div className={styles.productIdValues}>#1001</div>
                    </div>
                    <div className={styles.productNameCells}>
                      <div className={styles.wirelessHeadphones}>
                        Wireless Headphones
                      </div>
                    </div>
                    <div className={styles.productCategoryCells}>
                      <div className={styles.productCategoryValues}>
                        <div className={styles.electronics}>Electronics</div>
                      </div>
                      <div className={styles.productPriceCells}>
                        <div className={styles.wirelessHeadphones}>$299.99</div>
                      </div>
                      <div className={styles.span1}>
                        <div className={styles.wirelessHeadphones}>45</div>
                      </div>
                      <div className={styles.productActionCells}>
                        <img
                          className={styles.productActionButtons}
                          alt=""
                          src="/frame-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tr1}>
                    <div className={styles.productIdCells}>
                      <div className={styles.div2}>#1002</div>
                    </div>
                    <div className={styles.smartWatchWrapper}>
                      <div className={styles.smartWatch}>Smart Watch</div>
                    </div>
                    <div className={styles.productCategoryCells}>
                      <div className={styles.electronicsWrapper}>
                        <div className={styles.electronics}>Electronics</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.wirelessHeadphones}>$199.99</div>
                      </div>
                      <div className={styles.span2}>
                        <div className={styles.wirelessHeadphones}>12</div>
                      </div>
                      <div className={styles.productActionCells}>
                        <img
                          className={styles.productActionButtons}
                          alt=""
                          src="/frame-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tr2}>
                    <div className={styles.productIdCells}>
                      <div className={styles.wirelessHeadphones}>#1003</div>
                    </div>
                    <div className={styles.smartWatchWrapper}>
                      <div className={styles.bluetoothSpeaker}>
                        Bluetooth Speaker
                      </div>
                    </div>
                    <div className={styles.productCategoryCells}>
                      <div className={styles.electronicsContainer}>
                        <div className={styles.electronics}>Electronics</div>
                      </div>
                      <div className={styles.productPriceCells}>
                        <div className={styles.div6}>$89.99</div>
                      </div>
                      <div className={styles.span3}>
                        <div className={styles.wirelessHeadphones}>3</div>
                      </div>
                      <div className={styles.productActionCells}>
                        <img
                          className={styles.productActionButtons}
                          alt=""
                          src="/frame-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableFooter}>
                <div className={styles.showing1To}>
                  Showing 1 to 3 of 50 entries
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.div9}>
            <button className={styles.button}>
              <div className={styles.previous}>Previous</div>
            </button>
            <button className={styles.button1}>
              <div className={styles.div10}>1</div>
            </button>
            <div className={styles.button2}>
              <div className={styles.wirelessHeadphones}>2</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.div12}>3</div>
            </div>
            <button className={styles.button}>
              <div className={styles.next}>Next</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
