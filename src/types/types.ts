export type RouterMode = 'history' | 'hash';

export type CallbackType = (...arg: string[]) => void;

export enum SortKind {
  popular = 'Most Popular',
  lettersAsc = 'Letters Ascend',
  lettersDesc = 'Letters Descend',
  priceAsc = '$ Ascend',
  priceDesc = '$ Descend',
}

export type SortView = 'bigTile' | 'smallTile';
