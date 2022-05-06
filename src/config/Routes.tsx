import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Search from "../pages/search/Search";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/search/:name" element={<Search />} />
    </Routes>
  );
};

export default AppRouter;
