import { CallbackType } from './types';

export interface Route {
  path: RegExp;
  cb: CallbackType;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  latinName: string;
  category: string;
  thumbnail: string;
  images: string[];
}
