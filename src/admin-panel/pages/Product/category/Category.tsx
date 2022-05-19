import React, { FC, useEffect, useState } from "react";
import { useCategories } from "../../../../hooks/useCategories";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Category.module.scss";

const Category: FC = () => {
  const { product, setProduct } = useProducts();
  const { categories } = useCategories();

  const subcategories = [];

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].subcategories.length; j++) {
      subcategories.push(categories[i].subcategories[j]);
    }
  }

  const [category, setCategory] = useState(product.price);

  return (
    <div className={styles.container}>
      <select
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      >
        {subcategories.map((subcategory) => (
          <option>{subcategory.title}</option>
        ))}
      </select>
    </div>
  );
};

//   setProduct({ ...product, oldPrice: Number(e.target.value) });

export default Category;
