import React, { FC } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Catalog.module.scss";

const Catalog: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        <MenuIcon fontSize="small" />
        <p>Каталог товаров...</p>
      </div>
    </div>
  );
};

export default Catalog;
