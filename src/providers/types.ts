import { ICategory, IProduct } from "../utils/interfaces";

export interface ICategoryContext {
  categories: {
    categories: ICategory[];
    count: number;
  };
  category: ICategory;
  setCategory: (arg0: ICategory) => void;
  getCategories: (page: number, size: number) => void;
  addCategory: (titleForm: string, urlImageFrom: string) => void;
  updateCategory: (arg0: ICategory) => void;
  deleteCategory: (id: string) => void;
  getCategory: (name: string) => void;

  setSubCategory: (arg: any) => void;
  setPage: (num: number) => void;
  isLoading: boolean;
  isLoadingCategory: boolean;
  product: {
    categories: ICategory[];
    count: number;
  };
  page: number;
}

export interface IProductsContext {
  allProducts: {
    products: IProduct[];
    count: number;
  };
  hits: {
    products: IProduct[];
    count: number;
  };
  promotions: {
    products: IProduct[];
    count: number;
  };
  searchProducts: {
    products: IProduct[];
    count: number;
  };
  categoryProducts: IProduct[];
  product: IProduct;
  newProduct: IProduct;

  setCategoryProducts: (arg0: IProduct[]) => void;
  setIsLoading: (arg0: boolean) => void;
  setSearchProducts: (arg0: any) => void;
  setProduct: (arg0: IProduct) => void;
  setNewProduct: (arg0: IProduct) => void;

  getAllProducts: (arg0: number) => void;
  getHits: (arg0: number) => void;
  getPromotions: (arg0: number) => void;
  getSearchProducts: (name: string, page: number, size: number) => void;
  getCategoryProducts: ({ name }: { name: string }) => void;
  getProduct: (id: string) => void;
  updateProduct: (id: string) => void;
  deleteProduct: (id: string) => void;
  addProduct: () => void;

  isLoading: boolean;
  hitsIsLoading: boolean;
  promotionsIsLoading: boolean;
  productIsLoading: boolean;
  searchIsLoading: boolean;
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

export interface INotificationContext {
  notificationSuccess: boolean;
  notificationError: boolean;
  successMessage: null | string;
  errorMessage: null | string;

  setNotificaionSuccess: (arg0: boolean) => void;
  setNotificationError: (arg0: boolean) => void;
  setSuccessMessage: (arg0: string) => void;
  setErrorMessage: (arg0: string) => void;
}
