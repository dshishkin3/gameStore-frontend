import { FC, useState } from "react";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Desc.module.scss";

interface IDescProps {
  type: "change" | "create";
}

const Desc: FC<IDescProps> = ({ type }) => {
  const { product, newProduct, setNewProduct, setProduct } = useProducts();

  const [desc, setDesc] = useState<string>(product.desc);

  const changeDesc = (e: any) => {
    if (type === "change") {
      setDesc(e.target.value);
      setProduct({ ...product, desc: e.target.value });
    } else {
      setDesc(e.target.value);
      setNewProduct({ ...newProduct, desc: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={desc}
        onChange={changeDesc}
      />
    </div>
  );
};

export default Desc;
