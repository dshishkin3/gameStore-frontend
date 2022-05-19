import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../../hooks/useProducts";

import Wrapper from "../../components/ui/wrapper/Wrapper";
import Category from "./category/Category";

import ImagesBlock from "./images/Images";

import Price from "./price/Price";

import styles from "./Product.module.scss";
import Title from "./title/Title";

const AdminProduct: FC = () => {
  const { id } = useParams();
  const { getProduct, product, isLoading } = useProducts();

  useEffect(() => {
    if (id !== undefined) {
      getProduct({ id });
    }
  }, []);

  const updateProduct = async () => {
    try {
      const res = await axios.put(
        `https://game-store12.herokuapp.com/api/products/${id}`,
        product
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
                <p>{`Старая цена (не обяз.)`}</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <ImagesBlock />
            <Title />
            <Price />
          </div>
          <div className={styles.header}>
            <div className={styles.headerItems}>
              <div className={styles.right}>
                <p>Подкатегория</p>
                <p>Хит</p>
                <p>Акция</p>
              </div>
            </div>
          </div>
          <Category />
          <button onClick={updateProduct}>сохранить</button>
        </>
      )}
    </Wrapper>
  );
};

export default AdminProduct;
