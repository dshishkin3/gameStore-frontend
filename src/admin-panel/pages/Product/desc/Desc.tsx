import { FC, useState } from "react";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Desc.module.scss";

const Desc: FC = () => {
  const { product, setProduct } = useProducts();

  const [desc, setDesc] = useState<string>(product.desc);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
          setProduct({ ...product, desc: e.target.value });
        }}
      />
    </div>
  );
};

export default Desc;
