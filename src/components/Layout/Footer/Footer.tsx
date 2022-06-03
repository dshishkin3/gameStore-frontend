import { FC } from "react";
import { Link } from "react-router-dom";

import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

import { useCategories } from "../../../hooks/useCategories";

import logo from "../../../assets/images/header/logo.png";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <p className={styles.title}>НАВИГАЦИЯ</p>
        <div className={styles.categories}>
          {!isLoading &&
            categories.categories.slice(0, 3).map((category) => (
              <Link
                to={`subcategory/${category.title}`}
                key={category._id}
                className={styles.category}
              >
                {category.title}
              </Link>
            ))}
        </div>
        <div className={styles.refs}>
          <Link to="/" className={styles.allCategories}>
            <p className={styles.stock}>Акции</p>
          </Link>

          <Link to={`allCategories`} className={styles.allCategories}>
            Все категории
          </Link>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.logoImage}>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.infoItem}>
          <p className={styles.city}>
            г. Грозный, Старопромысловское шоссе 24/3
          </p>
          <div className={styles.links}>
            <a href="tel:89288968896" className={styles.link}>
              <CallIcon fontSize="small" />
              <p className={styles.linkTitle}>8 (928) 89 68 896</p>
            </a>
            <span className={styles.social}>
              <a
                href="https://instagram.com/game_store_95?igshid=YmMyMTA2M2Y="
                className={styles.link}
              >
                <InstagramIcon fontSize="small" />
                <p className={styles.linkTitle}>instagram</p>
              </a>
              <a href="https://t.me/game_store_95" className={styles.link}>
                <TelegramIcon fontSize="small" />
                <p className={styles.linkTitle}>telegram</p>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
