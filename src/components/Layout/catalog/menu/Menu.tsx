import React, { FC } from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { mainCategories } from "../../../../utils/categories";

import styles from "./Menu.module.scss";

const MenuBlock: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className={styles.catalog}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="medium" />
        <p>Каталог товаров</p>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={styles.menu}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.title}>Категории товаров</p>
            <CloseIcon onClick={handleClose} cursor="pointer" />
          </div>
          {mainCategories.map((category) => (
            <Link
              to={`category/${category.title}`}
              className={styles.category}
              key={category.id}
              onClick={handleClose}
            >
              <img
                src="https://c.dns-shop.ru/thumb/st4/fit_width/120/120/88f022c8921651dd34f05377c46a20d8/d8ebb6eda3210347f2614c878e5a7ebe7992469f025d2dc073464462fe875ded.png.webp"
                alt=""
              />
              <p>{category.title}</p>
            </Link>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default MenuBlock;
