import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Content from "../components/Content";
import ProductDisplay from "../components/ProductDisplay";
import Sidebar from "../components/Sidebar";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <section className={styles.div}>
        <Header />
        <Content />
        <ProductDisplay />
      </section>
      <Sidebar />
    </div>
  );
};

export default Root;
