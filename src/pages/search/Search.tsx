import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/ui/backButton/BackButton";

import Card from "../../components/ui/card/Card";
import MyLoader from "../../components/ui/contentLoader/ContentLoader";
import Filters from "../../components/ui/filters/Filters";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { IProduct } from "../../utils/interfaces";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { name } = useParams();

  useEffect(() => {
    getSearchProducts();
  }, [name]);

  const getSearchProducts = async () => {
    const res = await axios.get<IProduct[]>(
      `http://game-store12.herokuapp.com/api/products/search/${name}`
    );
    setProducts(res.data);
    setLoading(false);
  };

  return (
    <div>
      <PageTitle title="Поиск в каталоге" />
      <div className={styles.container}>
        {loading ? (
          <MyLoader />
        ) : (
          <div className={styles.products}>
            {products.length < 1 ? (
              <div className={styles.empty}>
                <p>К сожалению, по вашему запросу ничего не найдено :(</p>
                <BackButton />
              </div>
            ) : (
              products.map((product) => <Card product={product} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
