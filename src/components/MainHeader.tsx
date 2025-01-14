import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./MainHeader.module.css";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.frame}>
            <img
              className={styles.brandLogoIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <a className={styles.stockmasterPro}>StockMaster Pro</a>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
            <a className={styles.johnSmith}>John Smith</a>
            <div className={styles.userActions}>
              <img
                className={styles.userSettingsIcon}
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
