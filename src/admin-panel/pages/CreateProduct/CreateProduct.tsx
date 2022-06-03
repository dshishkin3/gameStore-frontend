import React, { FC } from "react";

import { useProducts } from "../../../hooks/useProducts";

import Flex from "../../components/ui/flexBox/Flex";
import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import ToggleBtn from "../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Category from "../Product/category/Category";
import Characteristics from "../Product/characteristics/Characteristics";
import Desc from "../Product/desc/Desc";
import Hit from "../Product/hit/Hit";
import Price from "../Product/price/Price";
import Promotion from "../Product/promotion/Promotion";
import Title from "../Product/title/Title";
import ImagesBlock from "./images/ImagesBlock";

const AdminCreateProduct: FC = () => {
  const { addProduct } = useProducts();

  return (
    <Wrapper title="Добавление нового продукта" backBtn>
      <HeaderItems
        items={[
          "Изображения товара",
          "Наименование товара",
          "Цена",
          "Старая цена (не обяз.)",
        ]}
      />
      <Flex>
        <ImagesBlock />
        <Title type="create" />
        <Price type="create" />
      </Flex>
      <HeaderItems items={["Подкатегория", "Хит", "Акция"]} />
      <Flex>
        <Category type="create" />
        <Hit type="create" />
        <Promotion type="create" />
      </Flex>
      <HeaderItems items={["Описание", "Характеристики"]} />
      <Flex>
        <Desc type="create" />
        <Characteristics type="create" />
      </Flex>
      <div style={{ width: "fit-content", margin: 30 }}>
        <ToggleBtn
          text="Добавить продукт"
          type="saveBtn"
          onClick={addProduct}
        />
      </div>
    </Wrapper>
  );
};

export default AdminCreateProduct;
