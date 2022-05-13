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

  getHits: () => void;
  getPromotions: () => void;
  getSearchProducts: ({ name }: { name: string }) => void;
  getCategoryProducts: ({ name }: { name: string }) => void;
  getProduct: ({ id }: { id: string }) => void;

  isLoading: boolean;
}
