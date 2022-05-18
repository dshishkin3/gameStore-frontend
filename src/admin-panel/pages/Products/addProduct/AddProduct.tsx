import React, { FC } from "react";

import AddIcon from "@mui/icons-material/Add";

import styles from "./AddProduct.module.scss";
import { Link } from "react-router-dom";

const AddProduct: FC = () => {
  return (
    <Link to="product/create" className={styles.container}>
      <AddIcon color="success" />
      <p>Добавить продукт</p>
    </Link>
  );
};

export default AddProduct;
