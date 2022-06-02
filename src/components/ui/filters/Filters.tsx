import axios from "axios";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Checkbox from "@mui/material/Checkbox";
import TuneIcon from "@mui/icons-material/Tune";
import { FormControlLabel, FormGroup } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useProducts } from "../../../hooks/useProducts";

import { IProduct } from "../../../utils/interfaces";
import { filterCheckbox } from "./data";

import styles from "./Filters.module.scss";
import "./styles.css";

interface IFiltersProps {
  page: "category" | "search";
}

const Filters: FC<IFiltersProps> = ({ page }) => {
  const [from, setFrom] = useState<string | number>("");
  const [to, setTo] = useState<string | number>("");

  const [labelPrice, setLabelPrice] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const {
    getCategoryProducts,
    getSearchProducts,
    setCategoryProducts,
    setSearchProducts,
    setIsLoading,
  } = useProducts();

  let { name } = useParams();

  interface IAllProducts {
    products: IProduct[];
    count: number;
  }

  const search = async () => {
    setIsLoading(true);
    const res = await axios.get<IAllProducts>(
      page === "category"
        ? `https://gamestore4.herokuapp.com/products/category/${name}`
        : `https://gamestore4.herokuapp.com/products/search/${name}`
    );
    console.log(res.data);

    let filteredProducts = res.data.products.filter(
      (product) =>
        product.price >= (typeof from === "string" ? 0 : from) &&
        product.price <= (typeof to === "string" ? 99999 : to)
    );

    if (labelPrice.length > 1) {
      switch (labelPrice) {
        case "Менее 15 000 ₽":
          filteredProducts = res.data.products.filter(
            (product) => product.price <= 15000
          );
          break;

        case "15 001 ₽ - 20 000 ₽":
          filteredProducts = res.data.products.filter(
            (product) => product.price >= 15001 && product.price <= 20000
          );
          break;

        case "20 001 ₽ - 40 000 ₽":
          filteredProducts = res.data.products.filter(
            (product) => product.price >= 20001 && product.price <= 40000
          );
          break;

        case "40 001 и более":
          filteredProducts = res.data.products.filter(
            (product) => product.price >= 40001
          );
          break;

        default:
          break;
      }
    }
    page === "category" && setCategoryProducts(filteredProducts);
    page === "search" &&
      setSearchProducts({
        products: filteredProducts,
        count: filteredProducts.length,
      });
    setIsLoading(false);
  };

  const reset = () => {
    if (name !== undefined) {
      page === "category" && getCategoryProducts({ name });
      page === "search" && getSearchProducts(name, 1, 99);
    }
    setFrom("");
    setTo("");
    setLabelPrice("");
  };

  return (
    <div>
      <div
        className={styles.filtersButton}
        onClick={() => setShowFilters(!showFilters)}
      >
        <TuneIcon />
        <p>Фильтры</p>
        <KeyboardArrowDownIcon />
      </div>
      <CSSTransition
        in={showFilters}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className={styles.container}>
          <p className={styles.title}>Цена</p>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              value={from}
              onChange={(e) => setFrom(Number(e.target.value))}
              placeholder="от 100 ₽"
              type="tel"
            />
            <input
              className={styles.input}
              value={to}
              onChange={(e) => setTo(Number(e.target.value))}
              placeholder="до 99 999 ₽"
              type="tel"
            />
          </div>
          <FormGroup>
            {filterCheckbox.map((checkbox) => (
              <FormControlLabel
                key={checkbox.title}
                control={
                  <Checkbox
                    color="success"
                    checked={labelPrice === checkbox.title ? true : false}
                    onChange={() => setLabelPrice(checkbox.title)}
                  />
                }
                label={checkbox.title}
              />
            ))}
          </FormGroup>
          <div className={styles.buttons}>
            <button className={styles.success} onClick={search}>
              Применить
            </button>
            <button className={styles.reset} onClick={reset}>
              Сбросить
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Filters;
