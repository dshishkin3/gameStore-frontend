import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../../hooks/useProducts";
import HeaderItems from "../../components/ui/headerItems/HeaderItems";

import Wrapper from "../../components/ui/wrapper/Wrapper";
import Category from "./category/Category";
import Characteristics from "./characteristics/Characteristics";
import Desc from "./desc/Desc";
import Hit from "./hit/Hit";

import ImagesBlock from "./images/Images";

import Price from "./price/Price";

import styles from "./Product.module.scss";
import Promotion from "./promotion/Promotion";
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
          <HeaderItems
            items={[
              "Изображения товара",
              "Наименование товара",
              "Цена",
              "Старая цена (не обяз.)",
            ]}
          />
          <div style={{ display: "flex" }}>
            <ImagesBlock />
            <Title />
            <Price />
          </div>
          <HeaderItems items={["Подкатегория", "Хит", "Акция"]} />
          <div style={{ display: "flex" }}>
            <Category />
            <Hit />
            <Promotion />
          </div>
          <HeaderItems items={["Описание", "Характеристики"]} />
          <div style={{ display: "flex" }}>
            <Desc />
            <Characteristics />
          </div>

          <button onClick={updateProduct}>Сохранить</button>
          <button>Удалить</button>
        </>
      )}
    </Wrapper>
  );
};

export default AdminProduct;
