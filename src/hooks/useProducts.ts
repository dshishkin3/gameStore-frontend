import { useContext } from "react";
import { ProductsContext } from "../providers/ProductsProvider";

export const useProducts = () => useContext(ProductsContext);
