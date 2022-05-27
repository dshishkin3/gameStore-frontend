import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useCategories } from "../../../../hooks/useCategories";

import styles from "./Menu.module.scss";

const MenuBlock: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { categories, isLoading } = useCategories();

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
          <div className={styles.categories}>
            {!isLoading &&
              categories.categories.slice(0, 6).map((category) => (
                <Link
                  key={category._id}
                  to={`/subcategory/${category.title}`}
                  className={styles.category}
                  onClick={handleClose}
                >
                  <div className={styles.categoryBody}>
                    <img src={category.urlImg} alt="" />
                    <p>
                      {" "}
                      {category.title.length < 23
                        ? category.title
                        : category.title.slice(0, 23) + "..."}
                    </p>
                  </div>
                  <ArrowForwardIosIcon color="action" fontSize="small" />
                </Link>
              ))}
          </div>
          <Link
            to={`allCategories`}
            onClick={handleClose}
            className={styles.allCategories}
          >
            Все категории...
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default MenuBlock;
