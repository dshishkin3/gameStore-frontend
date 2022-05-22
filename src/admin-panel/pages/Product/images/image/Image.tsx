import { FC, useState } from "react";

import { useProducts } from "../../../../../hooks/useProducts";

import styles from "./Image.module.scss";

interface IImageBlockProps {
  image: string;
  index: number;
  type: "change" | "create";
  placeholder?: string;
}

const ImageBlock: FC<IImageBlockProps> = ({
  image,
  index,
  type,
  placeholder,
}) => {
  const [value, setValue] = useState<string>(image);

  const { setProduct, setNewProduct, product, newProduct } = useProducts();

  const change = (e: any) => {
    setValue(e.target.value);
    if (type === "change") {
      let images = product.urlImages;
      images[index] = e.target.value;
      setProduct({ ...product, urlImages: images });
    } else {
      let images =
        newProduct.urlImages !== undefined
          ? newProduct.urlImages
          : new Array("", "", "", "");
      images[index] = e.target.value;
      setNewProduct({ ...newProduct, urlImages: images });
    }
  };

  return (
    <div className={styles.image}>
      <img src={value} alt="" />
      <input
        type="string"
        value={value}
        onChange={(e) => change(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ImageBlock;
