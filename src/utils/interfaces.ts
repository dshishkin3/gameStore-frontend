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
  _id: number;
  title: string;
  urlImg: string;
  subcategories: any[];
}
