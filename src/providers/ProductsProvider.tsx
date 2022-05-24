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
import { useNotification } from "../hooks/useNotification";

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProducts {
  products: IProduct[];
  count: number;
}

export const ProductsProvider: FC<IProductsProviderProps> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<IProducts>({} as IProducts);
  const [hits, setHits] = useState<IProducts>({} as IProducts);
  const [promotions, setPromotions] = useState<IProducts>({} as IProducts);
  const [searchProducts, setSearchProducts] = useState<IProduct[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [newProduct, setNewProduct] = useState<IProduct>({} as IProduct);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    setSuccessMessage,
    setNotificaionSuccess,
    setErrorMessage,
    setNotificationError,
  } = useNotification();

  const getHits = async () => {
    setIsLoading(true);
    try {
      console.log("get hits");
      const res = await axios.get(
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
      const res = await axios.get(
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
      const res = await axios.get(
        `http://game-store12.herokuapp.com/api/products/search/${name}`
      );
      setSearchProducts(res.data.products);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryProducts = async ({ name }: { name: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://game-store12.herokuapp.com/api/products/category/${name}`
      );
      setCategoryProducts(res.data.products);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getProduct = async ({ id }: { id: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://game-store12.herokuapp.com/api/products/product/${id}`
      );
      setProduct(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllProducts = async (page: number) => {
    setIsLoading(true);
    try {
      console.log("get all products");
      const res = await axios.get(
        `https://game-store12.herokuapp.com/api/products/?page=${page}`
      );
      setAllProducts(res.data);
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id: string) => {
    try {
      const res = await axios.put(
        `https://game-store12.herokuapp.com/api/products/${id}`,
        product
      );
      if (res.status === 200) {
        setSuccessMessage(res.data.message);
        setNotificaionSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      setNotificationError(true);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await axios.delete(
        `https://game-store12.herokuapp.com/api/products/${id}`
      );
      if (res.status === 200) {
        setSuccessMessage(res.data.message);
        setNotificaionSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      setNotificationError(true);
    }
  };

  const addProduct = async () => {
    try {
      const res = await axios.post(
        "http://game-store12.herokuapp.com/api/products",
        newProduct
      );
      if (res.status === 200) {
        setSuccessMessage(res.data.message);
        setNotificaionSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.error);
      setNotificationError(true);
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
      updateProduct,
      deleteProduct,
      addProduct,
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
