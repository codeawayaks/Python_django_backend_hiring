import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  return (
    <section className={[styles.sidebar, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.expensiveProductInfo}>
          <div className={styles.mostExpensiveProduct}>
            Most Expensive Product in Category
          </div>
          <div className={styles.expensiveProductDetails}>
            <div className={styles.expensiveProductName}>
              <h3 className={styles.premiumWirelessHeadphones}>
                Premium Wireless Headphones
              </h3>
              <div className={styles.electronics}>Electronics</div>
            </div>
            <b className={styles.expensiveProductPrice}>$349.99</b>
          </div>
        </div>
        <div className={styles.stockUpdate}>
          <button className={styles.button}>
            <div className={styles.updateStock}>Update Stock</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
