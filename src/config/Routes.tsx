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
import Nav from "../admin-panel/components/nav/Nav";

import AdminAuth from "../admin-panel/pages/Auth/Auth";
import AdminHome from "../admin-panel/pages/Home/Home";

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
		<Routes>
			<Route path="/admin/home" element={<AdminHome />} />
			<Route path="*" element={<AdminHome />} />
		</Routes>
	);
};
