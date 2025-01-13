import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <a className={styles.stockmasterPro}>StockMaster Pro</a>
        </div>
      </div>
      <div className={styles.imgParent}>
        <img
          className={styles.imgIcon}
          loading="lazy"
          alt=""
          src="/img@2x.png"
        />
        <div className={styles.johnSmithWrapper}>
          <a className={styles.johnSmith}>John Smith</a>
        </div>
        <div className={styles.userActionsContainerWrapper}>
          <img
            className={styles.userActionsContainer}
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
