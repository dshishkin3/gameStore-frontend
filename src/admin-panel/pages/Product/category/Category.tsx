import { FC, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useCategories } from "../../../../hooks/useCategories";
import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Category.module.scss";

interface ICategoryProps {
  type: "change" | "create";
}

const Category: FC<ICategoryProps> = ({ type }) => {
  const { product, newProduct, setProduct, setNewProduct } = useProducts();
  const { categories, isLoading, getCategories } = useCategories();

  useEffect(() => {
    getCategories(1, 99);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    if (type === "change") {
      setProduct({ ...product, category: event.target.value });
    } else {
      setNewProduct({ ...newProduct, category: event.target.value });
    }
  };

  const subcategories: any[] = [];

  if (!isLoading) {
    for (let i = 0; i < categories.categories.length; i++) {
      for (let j = 0; j < categories.categories[i].subcategories.length; j++) {
        subcategories.push(categories.categories[i].subcategories[j]);
      }
    }
  }

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, minWidth: 250 }} size="medium">
        <InputLabel id="demo-select-small">
          {type === "change" ? product.category : newProduct.category}
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={type === "change" ? product.category : newProduct.category}
          label="Age"
          onChange={handleChange}
        >
          {subcategories.map((subcategory, i) => (
            <MenuItem key={subcategory.title + i} value={subcategory.title}>
              {subcategory.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
