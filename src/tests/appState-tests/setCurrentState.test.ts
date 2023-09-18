import { setCurrentState } from '../../components/state/appState';
import { DEFAULT_STATE, resetState, STATE } from '../../components/state/state';
import { SortKind } from '../../types/types';

describe('setCurrentState function', () => {
  let key;
  let value;

  afterEach(() => resetState());

  test(`Should add given category in state at case 'category'`, () => {
    key = 'category';
    value = 'some-category';
    const value2 = 'else-category';
    const expected = ['some-category', 'else-category'];
    const checked = STATE.filters.category;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked[0]).toBe(expected[0]);

    setCurrentState(key, value2);
    expect(checked.length).toBe(2);
    expect(checked[1]).toBe(expected[1]);
    expect(checked).toEqual(expected);
  });

  test(`Should remove given category from state, if category already was in state at case 'category'`, () => {
    key = 'category';
    value = 'some-category';
    const value2 = 'else-category';
    STATE.filters.category = ['some-category', 'else-category'];
    const checked = STATE.filters.category;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked).not.toContain(value);

    setCurrentState(key, value2);
    expect(checked.length).toBe(0);
    expect(checked).not.toContain(value2);
  });

  test(`Should add given value in state at case 'brand'`, () => {
    key = 'brand';
    value = 'some-value';
    const value2 = 'else-value';
    const expected = ['some-value', 'else-value'];
    const checked = STATE.filters.brand;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked[0]).toBe(expected[0]);

    setCurrentState(key, value2);
    expect(checked.length).toBe(2);
    expect(checked[1]).toBe(expected[1]);
    expect(checked).toEqual(expected);
  });

  test(`Should remove given value from state, if value already was in state at case 'brand'`, () => {
    key = 'brand';
    value = 'some-value';
    const value2 = 'else-value';
    STATE.filters.brand = ['some-value', 'else-value'];
    const checked = STATE.filters.brand;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked).not.toContain(value);

    setCurrentState(key, value2);
    expect(checked.length).toBe(0);
    expect(checked).not.toContain(value2);
  });

  test(`Should set price as number in state at case 'price-from'`, () => {
    key = 'price-from';
    value = '33.00';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.filters.price.min;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
    expect(checked).toBeDefined();
  });

  test(`Should set price as number in state at case 'price-to'`, () => {
    key = 'price-to';
    value = '33.00';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.filters.price.max;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
    expect(checked).toBeDefined();
  });

  test(`Should set stock count as number in state at case 'stock-from'`, () => {
    key = 'stock-from';
    value = '4';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.filters.stock.min;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
    expect(checked).toBeDefined();
  });

  test(`Should set stock count as number in state at case 'stock-to'`, () => {
    key = 'stock-to';
    value = '4';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.filters.stock.max;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
    expect(checked).toBeDefined();
  });

  test(`Should set sort kinde as enum SortKind in state at case 'sort'`, () => {
    key = 'sort';
    value = 'Sort by title DESC';
    const expected = SortKind.titleDesc;
    setCurrentState(key, value);
    const checked = STATE.sortIndex;
    expect(checked).toBe(expected);
    expect(checked).toBeDefined();
  });

  test(`Should set search string in state at case 'search'`, () => {
    key = 'search';
    value = 'something';
    setCurrentState(key, value);
    const checked = STATE.filters.search;
    expect(checked).toBe(value);
    expect(checked).not.toBe('');
  });

  test(`Should set sort view as SortView type in state at case 'sortView'`, () => {
    key = 'sortView';
    value = 'list';
    setCurrentState(key, value);
    const checked = STATE.sortView;
    expect(checked).toBe(value);
  });

  test(`Should add product in cart if product with given id absent in cart at case 'cart'`, () => {
    key = 'cart';
    value = '5';
    const value2 = '15';
    const expected = [
      { id: 5, count: 1, price: 11.0 },
      { id: 15, count: 1, price: 166.12 },
    ];
    const checked = STATE.cartProducts;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked[0]).toEqual(expected[0]);

    setCurrentState(key, value2);
    expect(checked.length).toBe(2);
    expect(checked[1]).toEqual(expected[1]);
    expect(checked).toEqual(expected);
  });

  test(`Should remove product from cart if product with given id already was in cart at case 'cart'`, () => {
    key = 'cart';
    value = '5';
    const value2 = '15';
    STATE.cartProducts = [
      { id: 5, count: 1, price: 84 },
      { id: 15, count: 1, price: 48 },
    ];
    const checked = STATE.cartProducts;

    setCurrentState(key, value);
    expect(checked.length).toBe(1);
    expect(checked).not.toContain(value);

    setCurrentState(key, value2);
    expect(checked.length).toBe(0);
    expect(checked).not.toContain(value2);
  });

  test(`Should set items count of cart pagination as number in state at case 'items'`, () => {
    key = 'items';
    value = '4';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.cartItems;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
  });

  test(`Should set page number of cart pagination as number in state at case 'page'`, () => {
    key = 'page';
    value = '4';
    const expected = parseInt(value, 10);
    setCurrentState(key, value);
    const checked = STATE.cartPage;
    expect(checked).toBe(expected);
    expect(checked).not.toBeNaN();
  });

  test(`Should not change state when key not valid`, () => {
    key = 'not valid key';
    value = 'something';
    setCurrentState(key, value);
    expect(STATE).toEqual(DEFAULT_STATE);
  });
});
