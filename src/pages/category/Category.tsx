import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/ui/backButton/BackButton";

import Card from "../../components/ui/card/Card";
import MyLoader from "../../components/ui/contentLoader/ContentLoader";
import Filters from "../../components/ui/filters/Filters";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { IProduct } from "../../utils/interfaces";

import styles from "./Category.module.scss";

const Category: FC = () => {
  let { name } = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategoryProducts();
  }, []);

  const getCategoryProducts = async () => {
    const res = await axios.get<IProduct[]>(
      `http://game-store12.herokuapp.com/api/products/category/${name}`
    );
    setProducts(res.data);
    setLoading(false);
  };

  return (
    <div>
      <PageTitle title={String(name)} />
      <div className={styles.container}>
        {loading ? (
          <MyLoader />
        ) : (
          <div className={styles.wrapper}>
            {products.length < 1 && (
              <div className={styles.empty}>
                <p>Товаров из данной категории пока нет :(</p>
                <BackButton />
              </div>
            )}

            <div className={styles.products}>
              {products.map((product) => (
                <Card product={product} key={product._id} />
              ))}
            </div>
          </div>
        )}
        <Filters
          setProducts={setProducts}
          getProducts={getCategoryProducts}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default Category;
