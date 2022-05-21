import { FC } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Promotion.module.scss";

interface IPromotionProps {
  type: "change" | "create";
}

const Promotion: FC<IPromotionProps> = ({ type }) => {
  const { setProduct, setNewProduct, product, newProduct } = useProducts();

  const handleChange = (event: SelectChangeEvent) => {
    if (type === "change") {
      setProduct({
        ...product,
        promotion: event.target.value === "Да" ? true : false,
      });
    } else {
      setNewProduct({
        ...newProduct,
        promotion: event.target.value === "Да" ? true : false,
      });
    }
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, minWidth: 60 }} size="medium">
        <InputLabel id="demo-select-small">{product.promotion}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={
            type === "change"
              ? product.promotion
                ? "Да"
                : "Нет"
              : newProduct.promotion
              ? "Да"
              : "Нет"
          }
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Да">Да</MenuItem>
          <MenuItem value="Нет">Нет</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Promotion;
