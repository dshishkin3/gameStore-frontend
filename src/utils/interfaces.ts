import { ReactNode } from "react";

export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  characteristic: string;
  category: string;
  price: number;
  oldPrice?: number;
  urlImages: any[];
  hit: boolean;
  promotion: boolean;
}
export interface ICategory {
  _id: string;
  title: string;
  urlImg: string;
  subcategories: any[];
}

export interface ICategories {
  categories: ICategory[];
  count: number;
}
