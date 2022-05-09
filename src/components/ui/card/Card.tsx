import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

import { IProduct } from "../../../utils/interfaces";

import styles from "./Card.module.scss";
interface ICardProps {
  product: IProduct;
}

const Card: FC<ICardProps> = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            {product.hit && <p className={styles.hit}>ХИТ</p>}
            {product.promotion && <p className={styles.promotion}>АКЦИЯ</p>}
          </div>
          <div className={styles.favorite}>
            <FavoriteBorderIcon fontSize="medium" color="success" />
          </div>
        </div>
        <img className={styles.img} src={product.urlImg} alt="" />
        <p className={styles.title}>
          {product.title.length < 49
            ? product.title
            : product.title.slice(0, 49) + "..."}
        </p>
        <div className={styles.prices}>
          <p className={styles.price}>{product.price} ₽</p>
          {product.oldPrice && (
            <p className={styles.oldPrice}>{product.oldPrice} ₽</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
