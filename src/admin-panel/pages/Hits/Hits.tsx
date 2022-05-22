import React, { FC, useEffect } from "react";

import { useProducts } from "../../../hooks/useProducts";

import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Product from "../Products/product/Product";

const AdminHits: FC = () => {
  const { getHits, hits, isLoading } = useProducts();

  useEffect(() => {
    getHits();
  }, []);

  return (
    <Wrapper title="Хиты">
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
          {hits.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default AdminHits;
