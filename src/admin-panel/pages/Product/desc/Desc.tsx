import { FC, useEffect, useState } from "react";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Desc.module.scss";

interface IDescProps {
  type: "change" | "create";
}

const Desc: FC<IDescProps> = ({ type }) => {
  console.log(type);

  const { product, newProduct, setNewProduct, setProduct } = useProducts();

  const [desc, setDesc] = useState<string>("");

  useEffect(() => {
    if (type === "change") {
      setDesc(product.desc);
    } else {
      setDesc(newProduct.desc);
    }
  }, []);

  const changeDesc = (e: any) => {
    if (type === "change") {
      setDesc(e.target.value);
      setProduct({ ...product, desc: e.target.value });
    } else {
      setDesc(product.desc);
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
