import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../../hooks/useProducts";

import Wrapper from "../../components/ui/wrapper/Wrapper";
import ImageBlock from "./image/Image";

import styles from "./Product.module.scss";

const AdminProduct: FC = () => {
  const { id } = useParams();
  const { getProduct, product, isLoading } = useProducts();

  useEffect(() => {
    if (id !== undefined) {
      getProduct({ id });
    }
  }, []);

  return (
    <Wrapper title={product.title} backBtn>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.headerItems}>
              <p>Изображения товара</p>
              <div className={styles.right}>
                <p>Наименование товара</p>
                <p>Цена</p>
                <p>Старая цена</p>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            {product.urlImages.map((image) => (
              <ImageBlock image={image} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default AdminProduct;
