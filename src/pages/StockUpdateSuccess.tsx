import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./StockUpdateSuccess.module.css";

const StockUpdateSuccess: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.stockupdatesuccess}>
      <section className={styles.main}>
        <header className={styles.header}>
          <div className={styles.brandLogoWrapper}>
            <div className={styles.brandNameWrapper}>
              <img
                className={styles.brandLogoContainer}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <a className={styles.stockmasterPro}>StockMaster Pro</a>
            </div>
          </div>
          <div className={styles.userInfoWrapper}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
            <div className={styles.userNameWrapper}>
              <a className={styles.johnSmith}>John Smith</a>
            </div>
            <div className={styles.userActions}>
              <img
                className={styles.userActionsContainer}
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
            </div>
          </div>
        </header>
        <div className={styles.navigation}>
          <div className={styles.productsCreateContainer}>
            <span>{`Products > `}</span>
            <span className={styles.createProduct}>Create Product</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.successMessageWrapper}>
          <div className={styles.successMessageContent}>
            <h1 className={styles.stockUpdatedSuccessfully}>
              Stock Updated Successfully
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

export default StockUpdateSuccess;
