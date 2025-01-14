import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerInner}>
        <div className={styles.logoPlaceholderParent}>
          <img
            className={styles.logoPlaceholderIcon}
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
        <div className={styles.userNameDetailsWrapper}>
          <div className={styles.userNameDetails}>
            <a className={styles.johnSmith}>John Smith</a>
            <img
              className={styles.actionPlaceholderIcon}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
