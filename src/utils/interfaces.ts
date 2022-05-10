export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  characteristic: string;
  category: string;
  price: number;
  oldPrice?: number;
  urlImages: Array<string>;
  hit: boolean;
  promotion: boolean;
}
