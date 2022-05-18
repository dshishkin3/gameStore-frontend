import React, { FC } from "react";

import { IProduct } from "../../../../utils/interfaces";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  return (
    <Link to={`product/${product._id}`} className={styles.container}>
      <img src={product.urlImages[0]} alt="" />
      <p className={styles.title}>{product.title}</p>
      <div className={styles.priceBlock}>
        <p className={styles.price}>{product.price} ₽</p>
        {product.oldPrice && (
          <p className={styles.oldPrice}>{product.oldPrice} ₽</p>
        )}
      </div>
      <p className={styles.category}>{product.category}</p>
      <Link to={`product/${product._id}`} className={styles.link}>
        <p>
          Перейти на <br /> страницу товара
        </p>
        <ArrowForwardIosIcon color="disabled" />
      </Link>
    </Link>
  );
};

export default Product;
