import React, { FC, ReactNode } from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
