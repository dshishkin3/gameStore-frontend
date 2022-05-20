import React, { FC, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useCategories } from "../../../../hooks/useCategories";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Category.module.scss";

const Category: FC = () => {
  const { product, setProduct } = useProducts();
  const { categories } = useCategories();

  const handleChange = (event: SelectChangeEvent) => {
    setProduct({ ...product, category: event.target.value });
  };

  const subcategories = [];

  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].subcategories.length; j++) {
      subcategories.push(categories[i].subcategories[j]);
    }
  }
  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, minWidth: 250 }} size="medium">
        <InputLabel id="demo-select-small">{product.category}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={product.category}
          label="Age"
          onChange={handleChange}
        >
          {subcategories.map((subcategory) => (
            <MenuItem key={subcategory.title} value={subcategory.title}>
              {subcategory.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
