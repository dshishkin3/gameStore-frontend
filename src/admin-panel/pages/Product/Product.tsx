import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../../hooks/useProducts";

import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import ToggleBtn from "../../components/ui/toggleBtn/ToggleBtn";
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
import Flex from "../../components/ui/flexBox/Flex";

const AdminProduct: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams();

  const {
    getProduct,
    product,
    updateProduct,
    deleteProduct,
    productIsLoading,
  } = useProducts();

  useEffect(() => {
    getProduct(String(id));
    delay(500).then(() => setIsLoading(false));
  }, []);

  const delay = (ms: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

  return (
    <Wrapper title={product.title} backBtn>
      {productIsLoading || isLoading ? (
        <p>loading...</p>
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
          <Flex>
            <ImagesBlock />
            <Title type="change" />
            <Price type="change" />
          </Flex>
          <HeaderItems items={["Подкатегория", "Хит", "Акция"]} />
          <Flex>
            <Category type="change" />
            <Hit type="change" />
            <Promotion type="change" />
          </Flex>
          <HeaderItems items={["Описание", "Характеристики"]} />
          <Flex>
            <Desc type="change" />
            <Characteristics type="change" />
          </Flex>
          <div className={styles.buttons}>
            <ToggleBtn
              onClick={() => updateProduct(String(id))}
              type="saveBtn"
              text="Сохранить изменения"
            />
            <ToggleBtn
              type="deleteBtn"
              text="Удалить продукт"
              onClick={() => deleteProduct(String(id))}
            />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default AdminProduct;
