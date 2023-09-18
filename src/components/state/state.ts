import PRODUCTS from '../../data/products';
import { SortKind } from '../../types/types';
import { AppState, Product } from '../../types/interfaces';

const PRODUCTS_CLONE: Product[] = structuredClone(PRODUCTS);
const sortPrice = PRODUCTS_CLONE.sort((a, b) => a.price - b.price);
export const minPrice: number = sortPrice[0].price;
export const maxPrice: number = sortPrice[sortPrice.length - 1].price;
console.log('minPrice =', minPrice);
console.log('maxPrice =', maxPrice);

const sortStock = PRODUCTS_CLONE.sort((a, b) => a.stock - b.stock);
export const minStock: number = sortStock[0].stock;
export const maxStock: number = sortStock[sortStock.length - 1].stock;
console.log('minStock =', minStock);
console.log('maxStock =', maxStock);

export const DEFAULT_STATE: AppState = {
  cartProducts: [],
  cartItems: 3,
  cartPage: 1,
  cartPromocode: [],
  sortIndex: SortKind.titleAsc,
  sortView: 'bigTile',
  filters: {
    search: '',
    category: [],
    brand: [],
    price: {
      min: minPrice,
      max: maxPrice,
    },
    stock: {
      min: minStock,
      max: maxStock,
    },
  },
  products: PRODUCTS,
};

export let STATE: AppState = structuredClone(DEFAULT_STATE);
// export const STATE: AppState = JSON.parse(JSON.stringify(DEFAULT_STATE)) as AppState;

export function resetState(): void {
  STATE = structuredClone(DEFAULT_STATE);
}
