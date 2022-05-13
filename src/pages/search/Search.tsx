import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import BackButton from "../../components/ui/backButton/BackButton";
import Card from "../../components/ui/card/Card";
import { MyLoader } from "../../components/ui/contentLoader/ContentLoader";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { useProducts } from "../../hooks/useProducts";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const { searchProducts, getSearchProducts, isLoading } = useProducts();

  const { name } = useParams();

  useEffect(() => {
    if (name !== undefined) {
      getSearchProducts({ name });
    }
  }, [name]);

  return (
    <div>
      <PageTitle title="Поиск в каталоге" />
      <div className={styles.container}>
        {isLoading ? (
          <MyLoader />
        ) : (
          <div className={styles.products}>
            {searchProducts.length < 1 ? (
              <div className={styles.empty}>
                <p>К сожалению, по вашему запросу ничего не найдено :(</p>
                <BackButton />
              </div>
            ) : (
              searchProducts.map((product) => <Card product={product} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
