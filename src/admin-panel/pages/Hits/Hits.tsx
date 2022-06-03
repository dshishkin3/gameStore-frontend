import { FC, useEffect, useState } from "react";

import { useProducts } from "../../../hooks/useProducts";

import PaginationControl from "../../components/ui/pagination/Pagination";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Product from "../Products/product/Product";

import styles from "../Products/Products.module.scss";

const AdminHits: FC = () => {
  const { getHits, hits, hitsIsLoading } = useProducts();

  const [page, setPage] = useState<number>(1);

  const init = Math.ceil(hits.count / 8);

  useEffect(() => {
    getHits(page);
  }, [page]);

  return (
    <Wrapper title="Хиты">
      {hitsIsLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.headerItems}>
              <p>Информация о товаре</p>
              <div className={styles.right}>
                <p>Цена</p>
                <p>Категория</p>
              </div>
            </div>
          </div>
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
