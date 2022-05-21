import { FC, useEffect } from "react";

import { useProducts } from "../../../hooks/useProducts";

import Wrapper from "../../components/ui/wrapper/Wrapper";
import AddProduct from "./addProduct/AddProduct";
import Product from "./product/Product";

import styles from "./Products.module.scss";

const AdminProducts: FC = () => {
  const { allProducts, getAllProducts, isLoading } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Wrapper title="Все продукты">
      <div className={styles.addProductBlock}>
        <AddProduct />
      </div>
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <p>Информация о товаре</p>
          <div className={styles.right}>
            <p>Цена</p>
            <p>Категория</p>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          allProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default AdminProducts;
