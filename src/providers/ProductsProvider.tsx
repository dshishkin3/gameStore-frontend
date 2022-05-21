import {
  FC,
  useState,
  useMemo,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

import { IProduct } from "../utils/interfaces";
import { IProductsContext } from "./types";

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

interface IProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: FC<IProductsProviderProps> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [hits, setHits] = useState<IProduct[]>([]);
  const [promotions, setPromotions] = useState<IProduct[]>([]);
  const [searchProducts, setSearchProducts] = useState<IProduct[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [newProduct, setNewProduct] = useState<IProduct>({} as IProduct);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(product);
  }, [product]);

  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);

  const getHits = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<IProduct[]>(
        "http://game-store12.herokuapp.com/api/products/hits"
      );
      setHits(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getPromotions = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<IProduct[]>(
        "http://game-store12.herokuapp.com/api/products/promotions"
      );
      setPromotions(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchProducts = async ({ name }: { name: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get<IProduct[]>(
        `http://game-store12.herokuapp.com/api/products/search/${name}`
      );
      setSearchProducts(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryProducts = async ({ name }: { name: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get<IProduct[]>(
        `http://game-store12.herokuapp.com/api/products/category/${name}`
      );
      setCategoryProducts(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getProduct = async ({ id }: { id: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get<IProduct>(
        `http://game-store12.herokuapp.com/api/products/product/${id}`
      );
      setProduct(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://game-store12.herokuapp.com/api/products/"
      );
      setAllProducts(res.data);
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      allProducts,
      hits,
      promotions,
      searchProducts,
      setSearchProducts,
      categoryProducts,
      setCategoryProducts,
      product,
      newProduct,
      setNewProduct,
      setProduct,
      getAllProducts,
      getHits,
      getPromotions,
      getSearchProducts,
      getCategoryProducts,
      getProduct,
      isLoading,
      setIsLoading,
    }),
    [hits, isLoading, product, newProduct]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
