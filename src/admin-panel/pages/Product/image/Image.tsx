import React, { FC } from "react";

import styles from "./Image.module.scss";

interface IImageBlockProps {
  image: string;
}

const ImageBlock: FC<IImageBlockProps> = ({ image }) => {
  return (
    <div className={styles.image}>
      <img src={image} alt="" />
      <input placeholder={image} />
    </div>
  );
};

export default ImageBlock;
