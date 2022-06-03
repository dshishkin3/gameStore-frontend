import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PaginationControl from "../../admin-panel/components/ui/pagination/Pagination";
import BackButton from "../../components/ui/backButton/BackButton";
import Card from "../../components/ui/card/Card";
import { MyLoader } from "../../components/ui/contentLoader/ContentLoader";
import Filters from "../../components/ui/filters/Filters";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { useProducts } from "../../hooks/useProducts";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const { searchProducts, getSearchProducts, searchIsLoading } = useProducts();

  const { name } = useParams();

  const [page, setPage] = useState<number>(1);

  let init = Math.ceil(searchProducts.count / 8);

  useEffect(() => {
    if (name !== undefined) {
      getSearchProducts(name, page, 99);
    }
  }, [page]);

  return (
    <div>
      <PageTitle title="Поиск в каталоге" />
      <div className={styles.container}>
        {searchIsLoading ? (
          <MyLoader />
        ) : (
          <div className={styles.products}>
            {searchProducts.count < 1 ? (
              <div className={styles.empty}>
                <p>К сожалению, по вашему запросу ничего не найдено :(</p>
                <BackButton />
              </div>
            ) : (
              searchProducts.products.map((product) => (
                <Card key={product._id} product={product} />
              ))
            )}
          </div>
        )}
        <Filters page="search" />
      </div>
      <div className={styles.pagination}>
        <PaginationControl count={init} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Search;
