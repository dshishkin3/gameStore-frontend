import { FC } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useProducts } from "../../../../hooks/useProducts";

import styles from "./Hits.module.scss";

interface IHitProps {
  type: "change" | "create";
}

const Hit: FC<IHitProps> = ({ type }) => {
  const { setProduct, setNewProduct, product, newProduct } = useProducts();

  const handleChange = (event: SelectChangeEvent) => {
    if (type === "change") {
      setProduct({
        ...product,
        hit: event.target.value === "Да" ? true : false,
      });
    } else {
      setNewProduct({
        ...newProduct,
        hit: event.target.value === "Да" ? true : false,
      });
    }
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, minWidth: 60 }} size="medium">
        <InputLabel id="demo-select-small">
          {type === "change" ? product.hit : newProduct.hit}
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={
            type === "change"
              ? product.hit
                ? "Да"
                : "Нет"
              : newProduct.hit
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

export default Hit;
