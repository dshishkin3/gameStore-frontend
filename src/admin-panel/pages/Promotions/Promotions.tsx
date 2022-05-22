import React, { FC, useEffect } from "react";

import { useProducts } from "../../../hooks/useProducts";

import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Product from "../Products/product/Product";

const AdminPromotions: FC = () => {
  const { getPromotions, promotions, isLoading } = useProducts();

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <Wrapper title="Акции">
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
          {promotions.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default AdminPromotions;
