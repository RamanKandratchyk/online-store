import { CallbackType, SortKind, SortView } from './types';

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

export interface AppState {
  cartProducts: CartState[];
  cartItems: number;
  cartPage: number;
  cartPromocode: CartPromocodeState[];
  sortIndex: SortKind;
  sortView: SortView;
  filters: Filters;
  products: Product[];
}

export interface Filters {
  search: string;
  category: string[];
  brand: string[];
  price: Range;
  stock: Range;
}

export interface Range {
  min: number;
  max: number;
}

export interface DualSlider {
  range: Range;
  fromTextId: string;
  toTextId: string;
  fromInputId: string;
  toInputId: string;
  // correctionNumber: number;
  currencySymbol: string;
}

export interface CartState {
  id: number;
  count: number;
  price: number;
}

export interface CartPromocodeState {
  id: string;
  name: string;
  discount: number;
}
