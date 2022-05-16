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

export const CategoriesContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

interface ICategoryProviderProps {
  children: ReactNode;
}

export const CategoriesProvider: FC<ICategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<ICategory[]>(
        "http://game-store12.herokuapp.com/api/categories"
      );
      setCategories(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      categories,
      isLoading,
      getCategories,
    }),
    [categories, isLoading]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
