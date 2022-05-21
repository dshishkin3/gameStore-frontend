import React, { FC, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Characteristics.module.scss";

const Characteristics: FC = () => {
  const { product, setProduct } = useProducts();

  const [characteristics, setCharacteristics] = useState<string>(
    product.characteristic
  );

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={characteristics}
        onChange={(e) => {
          setCharacteristics(e.target.value);
          setProduct({ ...product, characteristic: e.target.value });
        }}
      />
    </div>
  );
};

export default Characteristics;
