import { FunctionComponent, useCallback } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Header1 from "./Header1";
import { useNavigate } from "react-router-dom";
import CheckBox from "./CheckBox";
import styles from "./CreateProduct.module.css";

export type CreateProductType = {
  className?: string;
};

const CreateProduct: FunctionComponent<CreateProductType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/productaddsuccess");
  }, [navigate]);

  return (
    <div className={[styles.createproduct, className].join(" ")}>
      <Header1 />
      <div className={styles.button}>
        <div className={styles.add}>Add</div>
      </div>
      <main className={styles.navigation}>
        <div className={styles.navigationItems}>
          <div className={styles.navigationLinks}>
            <div className={styles.navigationActive}>
              <div className={styles.productsCreateContainer}>
                <span>{`Products > `}</span>
                <span className={styles.createProduct}>Create Product</span>
              </div>
            </div>
            <div className={styles.navigationActions}>
              <Button
                className={styles.button1}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#2563eb",
                  fontSize: "14",
                  background: "#fff",
                  border: "#2563eb solid 1px",
                  borderRadius: "6px",
                  "&:hover": { background: "#fff" },
                  width: 153.1,
                  height: 36,
                }}
              >
                Cancel
              </Button>
              <Button
                className={styles.button2}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#2563eb",
                  borderRadius: "6px",
                  "&:hover": { background: "#2563eb" },
                  width: 153.1,
                  height: 36,
                }}
                onClick={onButtonClick}
              >
                Add
              </Button>
            </div>
          </div>
          <form className={styles.productDetails}>
            <div className={styles.productInfo}>
              <div className={styles.productBasicInfo}>
                <div className={styles.productBasicInfoChild} />
                <div className={styles.productNameField}>
                  <div className={styles.productInfo1}>Product Info</div>
                </div>
                <div className={styles.productNameInput}>
                  <div className={styles.productName}>Product Name</div>
                  <TextField
                    className={styles.div}
                    placeholder="Enter product name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e5e7eb" },
                      "& .MuiInputBase-root": {
                        height: "42px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#adaebc" },
                      width: "580px",
                    }}
                  />
                </div>
                <div className={styles.productDescriptionInput}>
                  <div className={styles.productName}>Description</div>
                  <textarea className={styles.div1} rows={10} cols={29} />
                </div>
                <div className={styles.productMedia}>
                  <div className={styles.productName}>Media</div>
                  <div className={styles.div2}>
                    <div className={styles.mediaIcon}>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                    <div className={styles.paragraph}>
                      Browse and chose the files you want to upload from your
                      computer
                    </div>
                    <div className={styles.mediaCallToAction}>
                      <div className={styles.cta}>
                        <img
                          className={styles.icon1}
                          loading="lazy"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productPricing}>
                <div className={styles.productPricingChild} />
                <div className={styles.pricing}>Pricing</div>
                <div className={styles.pricingDetails}>
                  <div className={styles.priceFields}>
                    <div className={styles.originalPriceField}>
                      <div className={styles.productName}>Original Price</div>
                    </div>
                    <div className={styles.discountOptional}>
                      <span className={styles.discount}>{`Discount `}</span>
                      <span className={styles.optional}>Optional</span>
                    </div>
                    <div className={styles.discountedPrice}>
                      Discounted Price
                    </div>
                  </div>
                  <div className={styles.discountedPrice1}>
                    <div className={styles.priceInputs}>
                      <TextField
                        className={styles.input}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#e5e7eb" },
                          "& .MuiInputBase-root": {
                            height: "42px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                          },
                          width: "182px",
                        }}
                      />
                      <TextField
                        className={styles.input}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#e5e7eb" },
                          "& .MuiInputBase-root": {
                            height: "42px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                          },
                          width: "182px",
                        }}
                      />
                      <TextField
                        className={styles.input}
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#e5e7eb" },
                          "& .MuiInputBase-root": {
                            height: "42px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                          },
                          width: "182px",
                        }}
                      />
                    </div>
                    <div className={styles.saleToggle}>
                      <img
                        className={styles.switchIcon}
                        alt=""
                        src="/switch.svg"
                      />
                      <div className={styles.saleLabel}>
                        <div className={styles.onSale}>On Sale</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productCategorization}>
              <div className={styles.categorizationFields}>
                <div className={styles.categoryInput}>
                  <div className={styles.productPricingChild} />
                  <a className={styles.category}>Category</a>
                  <div className={styles.categorySearch}>
                    <FormControl
                      className={styles.input3}
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
                        width: "100%",
                        height: "42px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "42px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "42px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "42px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "42px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#adaebc",
                          fontSize: 16,
                          fontWeight: "Regular",
                          fontFamily: "Inter",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "16px",
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
                            width="16px"
                            height="16px"
                            src="/frame-2.svg"
                            style={{ marginRight: "16px" }}
                          />
                        )}
                      >
                        <MenuItem>Search category</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <div className={styles.categoryCreation}>
                      <div className={styles.newCategoryCheckbox}>
                        <div className={styles.chip}>
                          <div className={styles.paragraph1}>Body Care</div>
                        </div>
                        <div className={styles.chip1}>
                          <div className={styles.paragraph2}>Essentials</div>
                        </div>
                        <div className={styles.chip2}>
                          <div className={styles.paragraph3}>Electronics</div>
                        </div>
                        <div className={styles.chip3}>
                          <div className={styles.paragraph4}>Hair care</div>
                        </div>
                        <div className={styles.chip4}>
                          <div className={styles.paragraph5}>Home decor</div>
                        </div>
                      </div>
                      <div className={styles.addCategory}>
                        <img
                          className={styles.tablerIconPlus}
                          loading="lazy"
                          alt=""
                          src="/tablericonplus.svg"
                        />
                        <div className={styles.createCategory}>
                          <div className={styles.createNewCategory}>
                            Create New Category
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inventoryManagement}>
                  <div className={styles.inventoryManagementChild} />
                  <div className={styles.manageStock}>
                    <div className={styles.manageStock1}>Manage Stock</div>
                  </div>
                  <div className={styles.productNameInput}>
                    <div className={styles.stockKeepingUnit}>
                      Stock Keeping Unit
                    </div>
                    <TextField
                      className={styles.div}
                      placeholder="SKU001234"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#e5e7eb" },
                        "& .MuiInputBase-root": {
                          height: "42px",
                          borderRadius: "8px",
                        },
                        "& .MuiInputBase-input": { color: "#adaebc" },
                        width: "580px",
                      }}
                    />
                  </div>
                  <div className={styles.productNameInput}>
                    <div className={styles.stockItemParent}>
                      <div className={styles.stockItem}>Stock item</div>
                      <div className={styles.minimumStock}>Minimum Stock</div>
                    </div>
                    <div className={styles.frameParent}>
                      <div className={styles.buttonParent}>
                        <img
                          className={styles.buttonIcon}
                          loading="lazy"
                          alt=""
                          src="/button-1.svg"
                        />
                        <TextField
                          className={styles.input4}
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#e5e7eb" },
                            "& .MuiInputBase-root": {
                              height: "42px",
                              backgroundColor: "#fff",
                              borderRadius: "8px",
                            },
                            width: "220px",
                          }}
                        />
                        <img
                          className={styles.buttonIcon}
                          alt=""
                          src="/button.svg"
                        />
                      </div>
                      <FormControl
                        className={styles.input5}
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
                          width: "40.689655172413794%",
                          height: "42px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "42px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "42px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "42px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "42px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "16px",
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
                              width="16px"
                              height="16px"
                              src="/frame-3.svg"
                              style={{ marginRight: "16px" }}
                            />
                          )}
                        >
                          <MenuItem>1</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className={styles.categoryInput}>
                  <div className={styles.productPricingChild} />
                  <div className={styles.advanced}>Advanced</div>
                  <div className={styles.categorySearch}>
                    <div className={styles.productNameInput}>
                      <div className={styles.productName}>Buyers Group</div>
                      <FormControl
                        className={styles.input6}
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
                          width: "100%",
                          height: "42px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "42px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "42px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "42px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "42px",
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
                            marginLeft: "16px",
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
                              width="16px"
                              height="16px"
                              src="/frame-4.svg"
                              style={{ marginRight: "16px" }}
                            />
                          )}
                        >
                          <MenuItem>All users</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <CheckBox />
                    <CheckBox checkBoxTop="unset" />
                  </div>
                </div>
              </div>
              <Button
                className={styles.homeButton}
                disableElevation
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "64",
                  borderRadius: "0px 0px 0px 0px",
                  width: 418,
                  height: 95,
                }}
              >
                Home
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateProduct;
