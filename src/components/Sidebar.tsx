import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/stockupdate");
  }, [navigate]);

  return (
    <section className={[styles.sidebar, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.expensiveProduct}>
          <div className={styles.mostExpensiveProduct}>
            Most Expensive Product in Category
          </div>
          <div className={styles.expensiveProductDetails}>
            <div className={styles.expensiveProductInfo}>
              <h3 className={styles.premiumWirelessHeadphones}>
                Premium Wireless Headphones
              </h3>
              <div className={styles.electronics}>Electronics</div>
            </div>
            <b className={styles.expensiveProductPrice}>$349.99</b>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.updateStock}>Update Stock</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
