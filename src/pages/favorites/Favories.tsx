import { FC, useEffect, useState } from "react";

import { IProduct } from "../../utils/interfaces";

import Card from "../../components/ui/card/Card";
import PageTitle from "../../components/ui/pageTitle/PageTitle";
import Empty from "./Empty";
import ScrollToTop from "../../components/ui/scroll/ScrollToTop";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";

import styles from "./Favories.module.scss";

const Favories: FC = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    getProductFromLS();
  }, []);

  function getProductFromLS() {
    if (localStorage.getItem("favorites")) {
      setProduct(JSON.parse(localStorage.getItem("favorites") || ""));
    }
  }

  return (
    <div className={styles.container}>
      <ActiveLastBreadcrumb title={["Мои закладки"]} />
      {!product.length ? (
        <Empty />
      ) : (
        product.length && (
          <>
            <PageTitle title="Мои закладки" />
            <div className={styles.favorites}>
              {product.map((obj) => (
                <Card
                  key={obj._id}
                  product={obj}
                  getProduct={getProductFromLS}
                />
              ))}
            </div>{" "}
          </>
        )
      )}
      <ScrollToTop />
    </div>
  );
};

export default Favories;
