import React, { FC, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import { IProduct } from "../../../utils/interfaces";
import toggleProductLS from "../../../hooks/toggleProductLS";

import styles from "./Card.module.scss";

interface ICardProps {
  product: IProduct;
  getProduct?: () => void;
}

const Card: FC<ICardProps> = ({ product, getProduct }) => {
  const [favorites, setFavorites] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem(product._id)) {
      setFavorites(true);
    }
  }, []);

  function toggleFavorites(obj: IProduct): void {
    toggleProductLS(obj, setFavorites);
    if (getProduct) {
      getProduct();
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            {product.hit && <p className={styles.hit}>ХИТ</p>}
            {product.promotion && <p className={styles.promotion}>АКЦИЯ</p>}
          </div>
          <div
            onClick={() => toggleFavorites(product)}
            className={styles.favorite}
          >
            {favorites ? (
              <FavoriteIcon fontSize="medium" color="success" />
            ) : (
              <FavoriteBorderIcon fontSize="medium" color="success" />
            )}
          </div>
        </div>
        <Link to={`/product/${product._id}`} className={styles.cardItem}>
          <img
            className={styles.img}
            src={product.urlImages[0]}
            alt="product"
          />
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
