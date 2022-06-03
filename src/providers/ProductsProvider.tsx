import { FC, useState, useMemo, createContext, ReactNode } from "react";
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
  const [searchProducts, setSearchProducts] = useState<IProducts>(
    {} as IProducts
  );
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [newProduct, setNewProduct] = useState<IProduct>({} as IProduct);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [hitsIsLoading, setHitsIsLoading] = useState(true);
  const [promotionsIsLoading, setPromotionsIsLoading] = useState(true);
  const [productIsLoading, setProductIsLoading] = useState(true);
  const [searchIsLoading, setSearchIsLoading] = useState(true);

  const {
    setSuccessMessage,
    setNotificaionSuccess,
    setErrorMessage,
    setNotificationError,
  } = useNotification();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const getHits = async (page: number) => {
    setHitsIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/hits/?page=${page}`
      );
      setHits(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setHitsIsLoading(false);
    }
  };

  const getPromotions = async (page: number) => {
    setPromotionsIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/promotions/?page=${page}`
      );
      setPromotions(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setPromotionsIsLoading(false);
    }
  };

  const getSearchProducts = async (
    name: string,
    page: number,
    size: number
  ) => {
    setSearchIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/search/${name}/?page=${page}&size=${size}`
      );
      setSearchProducts(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setSearchIsLoading(false);
    }
  };

  const getCategoryProducts = async ({ name }: { name: string }) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/category/${name}`
      );
      setCategoryProducts(res.data.products);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getProduct = async (id: string) => {
    setProductIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/product/${id}`
      );
      setProduct(res.data);
      setProductIsLoading(false);
    } catch (err: any) {
      console.log(err);
    } finally {
      setProductIsLoading(false);
    }
  };

  const getAllProducts = async (page: number) => {
    setIsLoading(true);
    try {
      console.log("get all products");
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/products/?page=${page}`
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
        `https://gamestore4.herokuapp.com/products/${id}`,
        product,
        config
      );
      if (res.status === 200) {
        setSuccessMessage("Товар обновлен!");
        setNotificaionSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setNotificationError(true);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await axios.delete(
        `https://gamestore4.herokuapp.com/products/${id}`,
        config
      );
      if (res.status === 200) {
        setSuccessMessage("Товар удален");
        setNotificaionSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setNotificationError(true);
    }
  };

  const addProduct = async () => {
    try {
      const res = await axios.post(
        "https://gamestore4.herokuapp.com/products",
        newProduct,
        config
      );
      if (res.status === 201) {
        setSuccessMessage("Товар успешно добавлен!");
        setNotificaionSuccess(true);
        setNewProduct({} as IProduct);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage("Ошибка. Убедитесь, что все поля заполнены");
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
      hitsIsLoading,
      promotionsIsLoading,
      productIsLoading,
      searchIsLoading,
    }),
    [hits, isLoading, promotions, product, newProduct, searchProducts]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
