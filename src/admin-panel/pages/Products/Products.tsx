import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../../../utils/interfaces";

import Wrapper from "../../components/ui/wrapper/Wrapper";
import AddProduct from "./addProduct/AddProduct";
import Product from "./product/Product";

import styles from "./Products.module.scss";

const AdminProducts: FC = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://game-store12.herokuapp.com/api/products/"
      );
      setAllProducts(res.data);
      console.log(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
        {allProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default AdminProducts;
