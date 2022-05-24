import {
  FC,
  useState,
  useMemo,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

import { ICategory } from "../utils/interfaces";
import { ICategoryContext } from "./types";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../hooks/useNotification";

export const CategoriesContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

interface ICategoryProviderProps {
  children: ReactNode;
}

export interface ICategories {
  categories: ICategory[];
  count: number;
}

export const CategoriesProvider: FC<ICategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<ICategories>({} as ICategories);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(13);
  const [product, setProduct] = useState<ICategories>({} as ICategories);

  useEffect(() => {
    getCategories(1, 99);
  }, []);

  useEffect(() => {
    console.log("categories- ", categories);
  }, [categories]);

  const getCategories = async (page: number, size: number) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://game-store12.herokuapp.com/api/categories/?page=${page}&size=${size}`
      );
      setCategories(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const addCategory = async (titleForm: string, urlImageFrom: string) => {
    try {
      const response = await axios.post(
        "https://game-store12.herokuapp.com/api/categories/",
        { title: titleForm, urlImg: urlImageFrom }
      );
      console.log(response.data);
      getCategories(1, 99);
    } catch (e) {
      console.log(e);
    }
  };
  //   async function getPageCategories() {
  //     const response = await axios.get(
  //       `http://game-store12.herokuapp.com/api/categories?page=${page}&size=2`
  //     );
  //     setProduct(response.data.categories);
  //     setPageQty(categories.count);
  //   }

  const value = useMemo(
    () => ({
      categories,
      isLoading,
      getCategories,
      addCategory,
      //   getPageCategories,
      product,
      pageQty,
      setPage,
      page,
    }),
    [categories, page, product, isLoading]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
