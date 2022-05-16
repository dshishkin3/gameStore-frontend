import { ICategory, IProduct } from "../utils/interfaces";

export interface ICategoryContext {
  categories: ICategory[];

  getCategories: () => void;

  isLoading: boolean;
}

export interface IProductsContext {
  hits: IProduct[];
  promotions: IProduct[];
  searchProducts: IProduct[];
  categoryProducts: IProduct[];
  product: IProduct;

  setCategoryProducts: (arg0: IProduct[]) => void;
  setIsLoading: (arg0: boolean) => void;
  setSearchProducts: (arg0: IProduct[]) => void;

  getHits: () => void;
  getPromotions: () => void;
  getSearchProducts: ({ name }: { name: string }) => void;
  getCategoryProducts: ({ name }: { name: string }) => void;
  getProduct: ({ id }: { id: string }) => void;

  isLoading: boolean;
}

export interface IAuthContext {
  email: string;
  password: string;
  isLoading: boolean;
  auth: boolean;
  isError: null | string;

  setEmail: (arg0: string) => void;
  setPassword: (arg0: string) => void;
  setIsLoading: (arg0: boolean) => void;
  setIsError: (arg0: null | string) => void;

  login: () => void;
}
