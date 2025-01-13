import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import BaseCheckboxContentStates from "./BaseCheckboxContentStates";
import styles from "./CheckBox.module.css";

export type CheckBoxType = {
  className?: string;

  /** Style props */
  checkBoxTop?: CSSProperties["top"];
};

const CheckBox: FunctionComponent<CheckBoxType> = ({
  className = "",
  checkBoxTop,
}) => {
  const checkBoxStyle: CSSProperties = useMemo(() => {
    return {
      top: checkBoxTop,
    };
  }, [checkBoxTop]);

  return (
    <div
      className={[styles.checkbox, className].join(" ")}
      style={checkBoxStyle}
    >
      <input className={styles.basecheckboxstates} type="checkbox" />
      <BaseCheckboxContentStates
        property1="Default"
        checkboxText="Show in online store"
      />
    </div>
  );
};

export default CheckBox;
