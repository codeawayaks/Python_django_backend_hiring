import { FunctionComponent } from "react";
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
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <header className={[styles.content, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.productListing}>
          <form className={styles.filterInputsParent}>
            <div className={styles.filterInputs}>
              <button className={styles.button}>
                <div className={styles.createProductButtonIconWrapper}>
                  <img
                    className={styles.createProductButtonIcon}
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
            "& .MuiInputBase-input": { paddingLeft: "12px", color: "#adaebc" },
            width: "320px",
          }}
        />
      </div>
    </header>
  );
};

export default Content;
