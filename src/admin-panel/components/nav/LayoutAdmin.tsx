import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { navItems } from "./navItems";

import logo from "../../../assets/images/header/logo.png";

import styles from "./LayoutAdmin.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutAdmin: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to="/admin/home" className={styles.logo}>
          <img src={logo} alt="" />
          <p>GameStore</p>
        </Link>
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link
              to={`admin/${item.link}`}
              key={item.id}
              className={styles.navItem}
            >
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default LayoutAdmin;
