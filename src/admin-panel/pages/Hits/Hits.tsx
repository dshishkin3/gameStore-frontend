import React, { FC, useEffect, useState } from "react";

import { useProducts } from "../../../hooks/useProducts";

import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import PaginationControl from "../../components/ui/pagination/Pagination";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Product from "../Products/product/Product";

import styles from "../Products/Products.module.scss";

const AdminHits: FC = () => {
  const { getHits, hits, isLoading } = useProducts();

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const init = Math.ceil(hits.count / 8);

  useEffect(() => {
    getHits();
    setLoading(false);
  }, []);

  return (
    <Wrapper title="Хиты">
      {isLoading || loading ? (
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
          {hits.products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </>
      )}
      <div className={styles.pagination}>
        <PaginationControl count={init} page={page} setPage={setPage} />
      </div>
    </Wrapper>
  );
};

export default AdminHits;
