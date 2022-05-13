import { FC, useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Drawer from "./drawer/Drawer";

import logo from "../../../assets/images/header/logo.png";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
        <p className={styles.logoText}>GAME STORE</p>
      </Link>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.searchIcon}>
          <Link to={`/search/${search}`} className={styles.searchLink}>
            <SearchIcon fontSize="small" />
          </Link>
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
