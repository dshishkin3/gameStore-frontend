import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackButton from "../../components/ui/backButton/BackButton";
import Card from "../../components/ui/card/Card";
import { MyLoader } from "../../components/ui/contentLoader/ContentLoader";
import Filters from "../../components/ui/filters/Filters";
import PageTitle from "../../components/ui/pageTitle/PageTitle";
import SeeMore from "../../components/ui/seeMore/SeeMore";

import { useProducts } from "../../hooks/useProducts";

import styles from "./Category.module.scss";

const Category: FC = () => {
  let { name } = useParams();

  const [maxItems, setMaxItems] = useState(12);

  const { categoryProducts, getCategoryProducts, isLoading } = useProducts();

  useEffect(() => {
    if (name !== undefined) {
      getCategoryProducts({ name });
    }
  }, []);

  return (
    <div className={styles.main}>
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
              {categoryProducts.slice(0, maxItems).map((product) => (
                <Card product={product} key={product._id} />
              ))}
            </div>
          </div>
        )}
        <Filters page="category" />
      </div>
      {categoryProducts.length >= 12 && (
        <SeeMore onClick={() => setMaxItems(maxItems + 12)} />
      )}
    </div>
  );
};

export default Category;
