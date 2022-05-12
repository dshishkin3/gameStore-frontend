import axios from "axios";
import React, { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import TuneIcon from "@mui/icons-material/Tune";
import { FormControlLabel, FormGroup } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { CSSTransition } from "react-transition-group";

import { IProduct } from "../../../utils/interfaces";

import styles from "./Filters.module.scss";
import "./styles.css";

interface IFiltersProps {
  setProducts: (arg0: IProduct[]) => void;
  getProducts: () => void;
  loading: boolean;
  setLoading: (arg0: boolean) => void;
}

const filterCheckbox = [
  {
    id: 1,
    title: "Менее 15 000 ₽",
  },
  {
    id: 2,
    title: "15 001 ₽ - 20 000 ₽",
  },
  {
    id: 3,
    title: "20 001 ₽ - 40 000 ₽",
  },
  {
    id: 4,
    title: "40 001 и более",
  },
];

const Filters: FC<IFiltersProps> = ({
  getProducts,
  setProducts,
  loading,
  setLoading,
}) => {
  const [from, setFrom] = useState<string | number>("");
  const [to, setTo] = useState<string | number>("");

  const [labelPrice, setLabelPrice] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  let { name } = useParams();

  const search = async () => {
    setLoading(true);
    const res = await axios.get<IProduct[]>(
      `http://game-store12.herokuapp.com/api/products/category/${name}`
    );

    let filteredProducts = res.data.filter(
      (product) =>
        product.price >= (typeof from === "string" ? 0 : from) &&
        product.price <= (typeof to === "string" ? 99999 : to)
    );

    if (labelPrice.length > 1) {
      switch (labelPrice) {
        case "Менее 15 000 ₽":
          filteredProducts = res.data.filter(
            (product) => product.price <= 15000
          );
          break;

        case "15 001 ₽ - 20 000 ₽":
          filteredProducts = res.data.filter(
            (product) => product.price >= 15001 && product.price <= 20000
          );
          break;

        case "20 001 ₽ - 40 000 ₽":
          filteredProducts = res.data.filter(
            (product) => product.price >= 20001 && product.price <= 40000
          );
          break;

        case "40 001 и более":
          filteredProducts = res.data.filter(
            (product) => product.price >= 40001
          );
          break;

        default:
          break;
      }
    }
    setProducts(filteredProducts);
    setLoading(false);
  };

  const reset = () => {
    getProducts();
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
            <TextField
              style={{ marginRight: 20, fontFamily: "Montserrat" }}
              size="small"
              id="outlined-multiline-flexible"
              label={`от ${typeof from === "string" ? "150" : from} ₽`}
              multiline
              maxRows={4}
              value={from}
              onChange={(e) => setFrom(Number(e.target.value))}
            />
            <TextField
              size="small"
              id="outlined-multiline-flexible"
              label={`до ${typeof to === "string" ? "99     999" : to} ₽`}
              multiline
              maxRows={4}
              value={to}
              onChange={(e) => setTo(Number(e.target.value))}
            />
          </div>
          <FormGroup>
            {filterCheckbox.map((checkbox) => (
              <FormControlLabel
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
