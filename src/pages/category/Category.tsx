import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import BackButton from "../../components/ui/backButton/BackButton";
import Card from "../../components/ui/card/Card";
import { MyLoader } from "../../components/ui/contentLoader/ContentLoader";
import Filters from "../../components/ui/filters/Filters";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { useProducts } from "../../hooks/useProducts";

import styles from "./Category.module.scss";

const Category: FC = () => {
  let { name } = useParams();

  const { categoryProducts, getCategoryProducts, isLoading } = useProducts();

  useEffect(() => {
    if (name !== undefined) {
      getCategoryProducts({ name });
    }
  }, []);

  return (
    <div>
      <PageTitle title={String(name)} />
      <div className={styles.container}>
        {isLoading ? (
          <MyLoader />
        ) : (
          <div className={styles.wrapper}>
            {categoryProducts.length < 1 && (
              <div className={styles.empty}>
                <p>Товаров из данной категории пока нет :(</p>
                <BackButton />
              </div>
            )}

            <div
              className={styles.products}
              style={{
                justifyContent:
                  categoryProducts.length > 2 ? "space-between" : "unset",
              }}
            >
              {categoryProducts.map((product) => (
                <Card product={product} key={product._id} />
              ))}
            </div>
          </div>
        )}
        <Filters page="category" />
      </div>
    </div>
  );
};

export default Category;
