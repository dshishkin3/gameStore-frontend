export interface ICard {
  _id: string;
  title: string;
  desc: string;
  characteristic: string;
  category: string;
  price: number;
  oldPrice?: number;
  urlImg: string;
  hit: boolean;
  promotion: boolean;
}
