import { FunctionComponent, useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ProductAddSuccess.module.css";
import Header from "../components/Header";

const ProductAddSuccess: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.stockupdatesuccess}>
      <Header />
      <section className={styles.main}>
        <div className={styles.navigation}>
          <div className={styles.productsCreateContainer}>
            <span>{`Products > `}</span>
            <span className={styles.createProduct}>Create Product</span>
          </div>
        </div>
      </section>
      <section>
        <div
          className={styles.successMessageContent}
          style={{ textAlign: "center" }}
        >
          <h1 className={styles.stockUpdatedSuccessfully}>
            Product Added Successfully
          </h1>
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
              marginRight: "20px",
            }}
            onClick={onButtonContainerClick}
          >
            Home
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductAddSuccess;
