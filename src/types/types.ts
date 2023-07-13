export type RouterMode = 'history' | 'hash';

export type CallbackType = (...arg: string[]) => void;

export type CategoryFilterData = [string, string, string, number];
export type BrandFilterData = [string, string, string, number];

export enum SortKind {
  popular = 'Most Popular',
  lettersAsc = 'Letters Ascend',
  lettersDesc = 'Letters Descend',
  priceAsc = '$ Ascend',
  priceDesc = '$ Descend',
}

export type SortView = 'bigTile' | 'smallTile';
