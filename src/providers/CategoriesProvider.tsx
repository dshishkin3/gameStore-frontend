import {
  FC,
  useState,
  useMemo,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

import { ICategories, ICategory } from "../utils/interfaces";
import { ICategoryContext } from "./types";
import { useNotification } from "../hooks/useNotification";

export const CategoriesContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

interface ICategoryProviderProps {
  children: ReactNode;
}

export const CategoriesProvider: FC<ICategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<ICategories>({} as ICategories);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const [product, setProduct] = useState<ICategories>({} as ICategories);
  const [subCategory, setSubCategory] = useState<any[]>([]);

  const [category, setCategory] = useState<ICategory>({} as ICategory);
  const [isLoadingCategory, setIsLoadingCategory] = useState<boolean>(true);

  const {
    setSuccessMessage,
    setNotificaionSuccess,
    setErrorMessage,
    setNotificationError,
  } = useNotification();

  useEffect(() => {
    getCategories(1, 14);
  }, []);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const getCategories = async (page: number, size: number) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/categories/?page=${page}&size=${size}`
      );
      setCategories(res.data);
      setProduct(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategory = async (name: string) => {
    setIsLoadingCategory(true);
    try {
      const res = await axios.get(
        `https://gamestore4.herokuapp.com/categories/${name}`
      );
      setCategory(res.data[0]);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoadingCategory(false);
    }
  };

  const addCategory = async (titleForm: string, urlImageFrom: string) => {
    try {
      await axios.post(
        "https://gamestore4.herokuapp.com/categories/",
        { title: titleForm, urlImg: urlImageFrom },
        config
      );
      setSuccessMessage("Категория добавлена!");
      setNotificaionSuccess(true);
      getCategories(1, 4);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setNotificationError(true);
    }
  };
  const updateCategory = async (category: ICategory) => {
    try {
      await axios.put(
        `https://gamestore4.herokuapp.com/categories/${category._id}`,
        category,
        config
      );

      setSuccessMessage("Категория обновлена!");
      setNotificaionSuccess(true);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setNotificationError(true);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await axios.delete(
        `https://gamestore4.herokuapp.com/categories/${id}`,
        config
      );
      setSuccessMessage("Категория удалена!");
      setNotificaionSuccess(true);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setNotificationError(true);
    }
  };

  const value = useMemo(
    () => ({
      categories,
      isLoading,
      getCategories,
      addCategory,
      product,
      setPage,
      page,
      updateCategory,
      deleteCategory,
      setSubCategory,
      category,
      setCategory,
      isLoadingCategory,
      getCategory,
    }),
    [categories, category, page, product, isLoading]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
