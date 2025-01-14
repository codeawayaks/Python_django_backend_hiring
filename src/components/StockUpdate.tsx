import { FunctionComponent, useCallback } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";
import styles from "./StockUpdate.module.css";

export type StockUpdateType = {
  className?: string;
};

const StockUpdate: FunctionComponent<StockUpdateType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/stockupdatesuccess");
  }, [navigate]);

  return (
    <form className={[styles.stockupdate, className].join(" ")}>
      <MainHeader />
      <div className={styles.productsCreateContainer}>
        <span className={styles.products}>{`Products > `}</span>
        <span className={styles.createProduct}>Create Product</span>
      </div>
      <div className={styles.separator} />
      <TextField
        className={styles.div}
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
      <FormControl
        className={styles.div1}
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
          width: "16.38888888888889%",
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
        <InputLabel color="success" />
        <Select
          color="success"
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
          <MenuItem>1</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <div className={styles.stockItem}>Stock item</div>
      <div className={styles.minimumStock}>Minimum Stock</div>
      <img className={styles.buttonIcon} alt="" src="/button.svg" />
      <img className={styles.buttonIcon1} alt="" src="/button-1.svg" />
      <TextField
        className={styles.div2}
        placeholder="SKU001234"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#e5e7eb" },
          "& .MuiInputBase-root": { height: "42px", borderRadius: "8px" },
          "& .MuiInputBase-input": { color: "#adaebc" },
          width: "580px",
        }}
      />
      <div className={styles.stockKeepingUnit}>Stock Keeping Unit</div>
      <div className={styles.manageStock}>Manage Stock</div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <h1 className={styles.home}>Home</h1>
      </div>
      <Button
        className={styles.button1}
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
        Update
      </Button>
    </form>
  );
};

export default StockUpdate;
