import { FC, ReactNode } from "react";

import Footer from "./Footer/Footer";
import Catalog from "./catalog/Catalog";
import Header from "./Header/Header";
import ScrollToTop from "../ui/scroll/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
};

export default Layout;
