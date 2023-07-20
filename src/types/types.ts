export type RouterMode = 'history' | 'hash';

export type CallbackType = (...arg: string[]) => void;

export type RegExpCallBack<T> = (string: T) => boolean;

export type CategoryFilterData = [string, string, string, number];
export type BrandFilterData = [string, string, string, number];

export enum SortKind {
  titleAsc = 'Sort by title ASC',
  titleDesc = 'Sort by title DESC',
  priceAsc = 'Sort by price ASC',
  priceDesc = 'Sort by price DESC',
  ratingAsc = 'Sort by rating ASC',
  ratingDesc = 'Sort by rating DESC',
  discountAsc = 'Sort by discount ASC',
  discountDesc = 'Sort by discount DESC',
}

export type SortView = 'bigTile' | 'smallTile';
