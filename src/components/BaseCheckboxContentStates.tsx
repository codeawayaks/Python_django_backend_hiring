import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./BaseCheckboxContentStates.module.css";

export type BaseCheckboxContentStatesType = {
  className?: string;
  checkboxText?: string;

  /** Variant props */
  property1?: string;
};

const BaseCheckboxContentStates: FunctionComponent<
  BaseCheckboxContentStatesType
> = ({ className = "", property1 = "Default", checkboxText }) => {
  return (
    <div
      className={[styles.basecheckboxcontentstates, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.checkboxText}>{checkboxText}</div>
    </div>
  );
};

export default BaseCheckboxContentStates;
