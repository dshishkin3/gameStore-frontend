import { FC } from "react";
import { useProducts } from "../../../../hooks/useProducts";

import ImageBlock from "./image/Image";

import styles from "./Images.module.scss";

const ImagesBlock: FC = () => {
  const { product } = useProducts();

  return (
    <div className={styles.container}>
      {product.urlImages.map((image, i) => (
        <ImageBlock type="change" key={image} image={image} index={i} />
      ))}
    </div>
  );
};

export default ImagesBlock;
