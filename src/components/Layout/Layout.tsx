import React, { FC, ReactNode } from "react";

import Footer from "./Footer/Footer";
import Catalog from "./catalog/Catalog";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Catalog />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
