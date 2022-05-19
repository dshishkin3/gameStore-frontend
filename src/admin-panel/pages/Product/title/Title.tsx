import React, { FC, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "../Product.module.scss";

const Title: FC = () => {
  const { product, setProduct } = useProducts();

  const [title, setTitle] = useState(product.title);

  return (
    <div style={{ padding: "30px 70px" }}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setProduct({ ...product, title: e.target.value });
        }}
      />
    </div>
  );
};

export default Title;
