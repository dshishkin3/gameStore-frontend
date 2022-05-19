import React, { FC, useState } from "react";

import { useProducts } from "../../../../../hooks/useProducts";

import styles from "./Image.module.scss";

interface IImageBlockProps {
  image: string;
  index: number;
}

const ImageBlock: FC<IImageBlockProps> = ({ image, index }) => {
  const [value, setValue] = useState(image);

  const { setProduct, product } = useProducts();

  const change = (e: any) => {
    setValue(e.target.value);
    let images = product.urlImages;
    images[index] = e.target.value;
    setProduct({ ...product, urlImages: images });
  };

  return (
    <div className={styles.image}>
      <img src={value} alt="" />
      <input type="string" value={value} onChange={(e) => change(e)} />
    </div>
  );
};

export default ImageBlock;
