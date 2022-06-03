import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Search from "../pages/search/Search";
import AllCategories from "../pages/allCategories/AllCategories";
import Category from "../pages/category/Category";
import Favories from "../pages/favorites/Favories";
import Subcategory from "../pages/subcategory/Subcategory";

import LayoutAdmin from "../admin-panel/components/nav/LayoutAdmin";
import AdminAuth from "../admin-panel/pages/Auth/Auth";
import AdminHome from "../admin-panel/pages/Home/Home";
import AdminProducts from "../admin-panel/pages/Products/Products";
import AdminHits from "../admin-panel/pages/Hits/Hits";
import AdminPromotions from "../admin-panel/pages/Promotions/Promotions";
import AdminCategories from "../admin-panel/pages/Categories/AdminCategories";
import AdminCategory from "../admin-panel/pages/Categories/AdminCategory/AdminCategory";
import AdminProduct from "../admin-panel/pages/Product/Product";
import AdminCreateProduct from "../admin-panel/pages/CreateProduct/CreateProduct";
import Notification from "../admin-panel/components/ui/notification/Notification";

export const PublicRoutes: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/subcategory/:name" element={<Subcategory />} />
        <Route path="/allCategories" element={<AllCategories />} />
        <Route path="/favorites" element={<Favories />} />
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export const PrivateRoutes: FC = () => {
  return (
    <LayoutAdmin>
      <>
        <Notification />
        <Routes>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/product/:id" element={<AdminProduct />} />
          <Route
            path="/admin/products/product/create"
            element={<AdminCreateProduct />}
          />
          <Route path="/admin/hits" element={<AdminHits />} />
          <Route path="/admin/promotions" element={<AdminPromotions />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/categories/:id" element={<AdminCategory />} />
          <Route path="*" element={<AdminHome />} />
        </Routes>
      </>
    </LayoutAdmin>
  );
};
