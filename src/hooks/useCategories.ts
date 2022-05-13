import { useContext } from "react";
import { CategoriesContext } from "../providers/CategoriesProvider";

export const useCategories = () => useContext(CategoriesContext);
