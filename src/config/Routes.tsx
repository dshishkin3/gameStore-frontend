import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Search from "../pages/search/Search";
import AllCategories from "../pages/allCategories/AllCategories";
import Category from "../pages/category/Category";
import Favories from "../pages/favorites/Favories";
import Subcategory from "../pages/subcategory/Subcategory";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/search/:name" element={<Search />} />
			<Route path="/category/:name" element={<Category />} />
			<Route path="/subcategory/:name" element={<Subcategory />} />
			<Route path="/allCategories" element={<AllCategories />} />
			<Route path="/favorites" element={<Favories />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;
