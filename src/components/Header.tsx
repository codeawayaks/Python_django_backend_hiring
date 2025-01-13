import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.logoWrapper}>
          <div className={styles.div1}>
            <div className={styles.frame}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <a className={styles.stockmasterPro}>StockMaster Pro</a>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>
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
              <div className={styles.userActionPlaceholder}>
                <img
                  className={styles.userActionsContainer}
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
