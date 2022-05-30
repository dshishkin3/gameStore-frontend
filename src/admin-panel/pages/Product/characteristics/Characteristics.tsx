import { FC, useEffect, useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Characteristics.module.scss";

interface ICharacteristicsProps {
  type: "change" | "create";
}

const Characteristics: FC<ICharacteristicsProps> = ({ type }) => {
  const { product, newProduct, setNewProduct, setProduct } = useProducts();

  const [characteristics, setCharacteristics] = useState<string>("");

  useEffect(() => {
    if (type === "change") {
      setCharacteristics(product.desc);
    } else {
      setCharacteristics(newProduct.desc);
    }
  }, []);

  const changeCharacteristics = (e: any) => {
    if (type === "change") {
      setCharacteristics(e.target.value);
      setProduct({ ...product, characteristic: e.target.value });
    } else {
      setCharacteristics(e.target.value);
      setNewProduct({ ...newProduct, characteristic: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={characteristics}
        onChange={changeCharacteristics}
      />
    </div>
  );
};

export default Characteristics;
