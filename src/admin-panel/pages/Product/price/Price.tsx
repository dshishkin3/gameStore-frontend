import React, { FC, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Price.module.scss";

const Price: FC = () => {
  const { product, setProduct } = useProducts();

  const [price, setPrice] = useState<number>(product.price);

  const [oldPrice, setOldPrice] = useState<number | undefined>(
    product.oldPrice
  );

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={price}
        onChange={(e) => {
          setPrice(Number(e.target.value));
          setProduct({ ...product, price: Number(e.target.value) });
        }}
      />

      <input
        disabled={product.oldPrice ? false : true}
        className={styles.input}
        value={oldPrice}
        onChange={(e) => {
          setOldPrice(Number(e.target.value));
          setProduct({ ...product, oldPrice: Number(e.target.value) });
        }}
      />
    </div>
  );
};

export default Price;
