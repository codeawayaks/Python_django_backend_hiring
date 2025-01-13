import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Div from "../components/Div";
import Sidebar from "../components/Sidebar";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <Div />
      <Sidebar />
    </div>
  );
};

export default Root;
