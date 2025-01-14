import { FunctionComponent, useCallback } from "react";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import styles from "./Div.module.css";

export type DivType = {
  className?: string;
};

const Div: FunctionComponent<DivType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/createproduct");
  }, [navigate]);

  return (
    <section className={[styles.div, className].join(" ")}>
      <Header />
      <header className={styles.pageContent}>
        <div className={styles.contentWrapperParent}>
          <div className={styles.contentWrapper}>
            <form className={styles.actionsAndFilters}>
              <div className={styles.actions}>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.createProductButtonIcon}>
                    <img
                      className={styles.createProductButtonIcon1}
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                  <div className={styles.createProduct}>Create Product</div>
                </button>
                <FormControl
                  className={styles.select}
                  variant="standard"
                  sx={{
                    borderColor: "#e5e7eb",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    width: "95.23809523809524%",
                    height: "40px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "12px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/frame-3.svg"
                        style={{ marginRight: "8px" }}
                      />
                    )}
                  >
                    <MenuItem>All Categories</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <FormControl
                className={styles.select1}
                variant="standard"
                sx={{
                  borderColor: "#e5e7eb",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  width: "45.3416149068323%",
                  height: "40px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "12px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="24px"
                      height="24px"
                      src="/frame-4.svg"
                      style={{ marginRight: "8px" }}
                    />
                  )}
                >
                  <MenuItem>Price Range</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </form>
          </div>
          <TextField
            className={styles.input}
            placeholder="Search products..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="16px" height="16px" src="/frame-5.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e5e7eb" },
              "& .MuiInputBase-root": {
                height: "42px",
                backgroundColor: "#fff",
                paddingLeft: "12px",
                borderRadius: "8px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "12px",
                color: "#adaebc",
              },
              width: "320px",
            }}
          />
        </div>
      </header>
      <div className={styles.pageContent}>
        <div className={styles.contentAndSidebar}>
          <div className={styles.contentColumn}>
            <div className={styles.div1}>
              <div className={styles.featuredProduct}>Featured Product</div>
            </div>
          </div>
          <div className={styles.productDetails}>
            <div className={styles.productDetailsContainer}>
              <div className={styles.productDetailsContent}>
                <div className={styles.productImageWrapper}>
                  <div className={styles.productImage}>
                    <div className={styles.div2}>
                      <img
                        className={styles.featuredProductInStockIcon}
                        alt=""
                        src="/frame-6.svg"
                      />
                    </div>
                    <div className={styles.productNameAndCategory}>
                      <div className={styles.premiumWirelessHeadphones}>
                        Premium Wireless Headphones
                      </div>
                      <div className={styles.electronics29999}>
                        Electronics • $299.99
                      </div>
                    </div>
                  </div>
                  <div className={styles.stockStatusWrapper}>
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
                      <div className={styles.featuredProduct}>Price</div>
                      <div className={styles.headerPlaceholder}>
                        <img
                          className={styles.headerPriceSort}
                          alt=""
                          src="/frame-7.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.featuredProduct}>Stock</div>
                    <div className={styles.featuredProduct}>Actions</div>
                  </div>
                </div>
                <div className={styles.tableBody}>
                  <div className={styles.tbody}>
                    <div className={styles.tr}>
                      <div className={styles.itemDetails}>
                        <div className={styles.productIdValues}>#1001</div>
                      </div>
                      <div className={styles.itemName}>
                        <div className={styles.wirelessHeadphones}>
                          Wireless Headphones
                        </div>
                      </div>
                      <div className={styles.itemCategory}>
                        <div className={styles.itemCategoryValues}>
                          <div className={styles.electronics}>Electronics</div>
                        </div>
                        <div className={styles.itemStock}>
                          <div className={styles.wirelessHeadphones}>
                            $299.99
                          </div>
                        </div>
                        <div className={styles.span1}>
                          <div className={styles.wirelessHeadphones}>45</div>
                        </div>
                        <div className={styles.itemPrice}>
                          <img
                            className={styles.productActionButtons}
                            alt=""
                            src="/frame-8.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.tr1}>
                      <div className={styles.itemDetails}>
                        <div className={styles.div3}>#1002</div>
                      </div>
                      <div className={styles.smartWatchWrapper}>
                        <div className={styles.smartWatch}>Smart Watch</div>
                      </div>
                      <div className={styles.itemCategory}>
                        <div className={styles.electronicsWrapper}>
                          <div className={styles.electronics}>Electronics</div>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.wirelessHeadphones}>
                            $199.99
                          </div>
                        </div>
                        <div className={styles.span2}>
                          <div className={styles.wirelessHeadphones}>12</div>
                        </div>
                        <div className={styles.itemPrice}>
                          <img
                            className={styles.productActionButtons}
                            alt=""
                            src="/frame-8.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.tr2}>
                      <div className={styles.itemDetails}>
                        <div className={styles.wirelessHeadphones}>#1003</div>
                      </div>
                      <div className={styles.smartWatchWrapper}>
                        <div className={styles.bluetoothSpeaker}>
                          Bluetooth Speaker
                        </div>
                      </div>
                      <div className={styles.itemCategory}>
                        <div className={styles.electronicsContainer}>
                          <div className={styles.electronics}>Electronics</div>
                        </div>
                        <div className={styles.itemStock}>
                          <div className={styles.div7}>$89.99</div>
                        </div>
                        <div className={styles.span3}>
                          <div className={styles.wirelessHeadphones}>3</div>
                        </div>
                        <div className={styles.itemPrice}>
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
                <div className={styles.paginationInfo}>
                  <div className={styles.showing1To}>
                    Showing 1 to 3 of 50 entries
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div9}>
            <div className={styles.div10}>
              <button className={styles.button1}>
                <div className={styles.previous}>Previous</div>
              </button>
              <button className={styles.button2}>
                <div className={styles.div11}>1</div>
              </button>
              <div className={styles.button3}>
                <div className={styles.wirelessHeadphones}>2</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.div13}>3</div>
              </div>
              <button className={styles.button1}>
                <div className={styles.next}>Next</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Div;
