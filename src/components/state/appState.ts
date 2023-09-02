import PRODUCTS from '../../data/products';
import { CartPromocodeState, CartState, Product } from '../../types/interfaces';
import { SortKind, SortView } from '../../types/types';
import { STATE } from './state';

export function productFilter(): Product[] {
  const { search, category, price, stock, brand } = STATE.filters;
  const products: Product[] = PRODUCTS.filter((prod) =>
    search === ''
      ? true
      : [
          prod.title,
          prod.description,
          prod.price.toString(),
          prod.stock.toString(),
          prod.category,
          prod.brand,
        ].some((str) => str.toLowerCase().match(new RegExp(search, 'gui')))
  )
    .filter((prod) => (category.length === 0 ? true : category.some((ctgr) => prod.category === ctgr)))
    .filter((prod) => (brand.length === 0 ? true : brand.some((brd) => prod.brand === brd)))
    .filter((prod) => prod.price >= price.min && prod.price <= price.max)
    .filter((prod) => prod.stock >= stock.min && prod.stock <= stock.max);
  return products;
}

export function setStateAtArr(arr: string[], value: string): void {
  let handleArr = arr;
  if (value === '') handleArr = [];
  if (handleArr.includes(value)) {
    handleArr.splice(handleArr.indexOf(value), 1);
  } else {
    handleArr.push(value);
  }
}

export function addProdToCart(id: number): number {
  let prod: CartState | undefined = STATE.cartProducts.find((prd) => prd.id === id);
  const prodData = PRODUCTS.find((prd) => prd.id === id) as Product;
  if (prod) {
    if (prod.count < prodData.stock) prod.count += 1;
  } else {
    prod = {
      id,
      count: 1,
      price: prodData.price,
    };
    STATE.cartProducts.push(prod);
  }
  return prod.count;
}

export function removeProdFromCart(id: number, isDrop = false): number | undefined {
  const prod = STATE.cartProducts.find((prd) => prd.id === id) as CartState;

  if (isDrop || prod.count === 1) {
    STATE.cartProducts.splice(STATE.cartProducts.indexOf(prod), 1);
    if (STATE.cartProducts.length === 0) STATE.cartPromocode = [];
    return undefined;
  }
  prod.count -= 1;

  return prod.count;
}

export function getAmountCart(): number {
  return STATE.cartProducts.reduce((curr, prod) => curr + prod.count, 0);
}

export function getSumPrice(): number {
  return STATE.cartProducts.reduce((curr, prod) => curr + prod.count * prod.price, 0);
}

export function getSumPriceWithPromo(): number {
  const promo = STATE.cartPromocode.reduce((acc, el) => acc + el.discount / 100, 0);
  return Math.round(getSumPrice() - getSumPrice() * promo);
}

export function removePromocode(id: string) {
  STATE.cartPromocode = STATE.cartPromocode.filter((el) => el.id !== id);
}

export function getPromocode(id: string) {
  return STATE.cartPromocode.find((el) => el.id === id);
}

export function hasPromocode() {
  return STATE.cartPromocode.length > 0;
}

export function addPromocode(promocode: CartPromocodeState) {
  STATE.cartPromocode.push(promocode);
}

export function setCurrentState(key: string, value: string): void {
  let valueArr: RegExpMatchArray | null;
  switch (key) {
    case 'category':
      setStateAtArr(STATE.filters.category, value);
      break;

    case 'brand':
      setStateAtArr(STATE.filters.brand, value);
      break;

    case 'price-from':
      valueArr = value.match(/\d+\.\d+/);
      if (valueArr) STATE.filters.price.min = +valueArr[0];
      break;

    case 'price-to':
      valueArr = value.match(/\d+\.\d+/);
      if (valueArr) STATE.filters.price.max = +valueArr[0];
      break;

    case 'stock-from':
      valueArr = value.match(/\d+/);
      if (valueArr) STATE.filters.stock.min = +valueArr[0];
      break;

    case 'stock-to':
      valueArr = value.match(/\d+/);
      if (valueArr) STATE.filters.stock.max = +valueArr[0];
      break;

    case 'sort':
      STATE.sortIndex = value as SortKind;
      break;

    case 'search':
      STATE.filters.search = value;
      break;

    case 'sortView':
      STATE.sortView = value as SortView;
      break;

    case 'cart':
      if (STATE.cartProducts.find((prod) => prod.id === +value)) {
        removeProdFromCart(+value, true);
      } else {
        addProdToCart(+value);
      }
      break;

    case 'items':
      STATE.cartItems = +value;
      break;

    case 'page':
      STATE.cartPage = +value;
      break;
    default:
  }

  STATE.products = productFilter();
}
