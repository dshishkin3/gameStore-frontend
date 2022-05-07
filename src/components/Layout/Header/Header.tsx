import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Drawer from "./drawer/Drawer";

import logo from "../../../assets/images/header/logo.png";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
        <p className={styles.logoText}>GAME STORE</p>
      </Link>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <div className={styles.search}>
        <input className={styles.searchInput} placeholder="Поиск..." />
        <div className={styles.searchIcon}>
          <SearchIcon fontSize="small" />
        </div>
      </div>
      <div className={styles.info}>
        <p>Красноярск ул. 9 мая 77 ТРЦ «Планета»</p>
        <a className={styles.tel} href="tel:+73912050977">
          +7 (391) 205-09-77
        </a>
      </div>
      <Link to="/favorites" className={styles.favorites}>
        <FavoriteBorderIcon color="success" fontSize="small" />
        <p>Избранное</p>
      </Link>
    </div>
  );
};

export default Header;
