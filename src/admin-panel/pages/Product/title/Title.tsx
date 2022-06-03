import { FC, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "../Product.module.scss";

interface ITitleProps {
  type: "change" | "create";
}

const Title: FC<ITitleProps> = ({ type }) => {
  console.log(type);

  const { product, newProduct, setProduct, setNewProduct } = useProducts();

  const [title, setTitle] = useState<string>(
    type === "change" ? product.title : newProduct.title
  );

  const changeTitle = (e: any) => {
    setTitle(e.target.value);
    if (type === "change") {
      setProduct({ ...product, title: e.target.value });
    } else {
      setNewProduct({ ...newProduct, title: e.target.value });
    }
  };

  return (
    <div className={styles.titleBlock}>
      <input className={styles.input} value={title} onChange={changeTitle} />
    </div>
  );
};

export default Title;
