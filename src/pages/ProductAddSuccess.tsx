import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ProductAddSuccess.module.css";

const ProductAddSuccess: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.productaddsuccess}>
      <section className={styles.app}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.brandContainer}>
              <img
                className={styles.brandLogoIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <a className={styles.stockmasterPro}>StockMaster Pro</a>
            </div>
          </div>
          <div className={styles.userPanel}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
            <div className={styles.userInfo}>
              <a className={styles.johnSmith}>John Smith</a>
            </div>
            <div className={styles.userActions}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
            </div>
          </div>
        </header>
        <div className={styles.pageTitle}>
          <div className={styles.productsCreateContainer}>
            <span>{`Products > `}</span>
            <span className={styles.createProduct}>Create Product</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.successMessage}>
          <div className={styles.messagePanel}>
            <h1 className={styles.productAddedSuccessfully}>
              Product Added Successfully
            </h1>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <h1 className={styles.home}>Home</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAddSuccess;
