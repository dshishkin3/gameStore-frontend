import { FC, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Price.module.scss";

interface IPrice {
  type: "change" | "create";
}

const Price: FC<IPrice> = ({ type }) => {
  const { product, newProduct, setNewProduct, setProduct } = useProducts();

  const [price, setPrice] = useState<number>(
    type === "change" ? product.price : newProduct.price
  );

  const [oldPrice, setOldPrice] = useState<number | undefined>(
    type === "change" ? product.oldPrice : newProduct.oldPrice
  );

  const changePrice = (e: any) => {
    setPrice(Number(e.target.value));
    if (type === "change") {
      setProduct({ ...product, price: Number(e.target.value) });
    } else {
      setNewProduct({ ...newProduct, price: Number(e.target.value) });
    }
  };

  const changeOldPrice = (e: any) => {
    setOldPrice(Number(e.target.value));
    if (type === "change") {
      setProduct({ ...product, oldPrice: Number(e.target.value) });
    } else {
      setNewProduct({ ...newProduct, oldPrice: Number(e.target.value) });
    }
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} value={price} onChange={changePrice} />

      <input
        className={styles.input}
        value={oldPrice}
        onChange={changeOldPrice}
      />
    </div>
  );
};

export default Price;
