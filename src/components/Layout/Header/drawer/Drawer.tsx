import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useCategories } from "../../../../hooks/useCategories";

import logo from "../../../../assets/images/header/logo.png";

import styles from "./Drawer.module.scss";

interface IDrawerProps {
  drawer: boolean;
  setDrawer: (arg0: boolean) => void;
}

const DrawerBlock = ({ drawer, setDrawer }: IDrawerProps) => {
  const { categories, isLoading } = useCategories();

  return (
    <div className={styles.drawer}>
      <Button onClick={() => setDrawer(!drawer)} color="inherit">
        <IconButton color="inherit" aria-label="open drawer" edge="start">
          <div className={styles.drawerText}>
            <MenuIcon />
            <p>Меню</p>
          </div>
        </IconButton>
      </Button>
      {!isLoading && (
        <Drawer
          anchor={"left"}
          open={drawer}
          onClose={() => setDrawer(!drawer)}
        >
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt="" />
              <p className={styles.logoText}>GAME STORE</p>
            </div>
            <Button onClick={() => setDrawer(!drawer)} color="inherit">
              <IconButton
                color="inherit"
                aria-label="close drawer"
                edge="start"
              >
                <div className={styles.drawerText}>
                  <CloseIcon />
                  <p>Меню</p>
                </div>
              </IconButton>
            </Button>
          </div>
          <div className={styles.body}>
            <div className={styles.categories}>
              {categories.categories.slice(0, 5).map((category) => (
                <Link
                  key={category._id}
                  to={`subcategory/${category.title}`}
                  className={styles.category}
                  onClick={() => setDrawer(!drawer)}
                >
                  <p>{category.title}</p>
                  <ArrowForwardIosIcon fontSize="small" />
                </Link>
              ))}

              <Link to="/allCategories" onClick={() => setDrawer(!drawer)}>
                <p className={styles.allCategories}>Все категории...</p>
              </Link>
            </div>
            <Link
              to="/favorites"
              onClick={() => setDrawer(!drawer)}
              className={styles.favorites}
            >
              <FavoriteBorderIcon color="success" fontSize="small" />
              <p>Избранное</p>
            </Link>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default DrawerBlock;
