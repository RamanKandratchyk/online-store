import app from '../../index';
import { CartPromocodeState, CartState } from '../../types/interfaces';
import * as appState from '../state/appState';
import { STATE, DEFAULT_STATE } from '../state/state';

class Controller {
  appStateControl(key: string, value: string, isRerender = true) {
    appState.setCurrentState(key, value);
    if (key === 'cart') {
      this.setHeaderCart();
    } else {
      let updValue: string = value;
      if (key === 'category') updValue = STATE.filters.category.toString();
      if (key === 'brand') updValue = STATE.filters.brand.toString();
      this.setSearchParams(key, updValue);
    }
    if (isRerender) {
      app.router.resolveRoute();
    }
  }

  private resetFilterParams(): void {
    const url: URL = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('sort', STATE.sortIndex.toString());
    url.searchParams.set('sortView', STATE.sortView);
    window.history.replaceState(STATE, '', url.toString());
  }

  resetFilters(): void {
    STATE.filters = structuredClone(DEFAULT_STATE.filters);
    STATE.products = appState.productFilter();
    this.resetFilterParams();
    app.router.resolveRoute();
  }

  setLinkHref(): void {
    document.querySelector('.header__main-title')?.setAttribute('href', `${window.location.search}#/`);
    document.querySelector('.header__cart-container')?.setAttribute('href', `${window.location.search}#/cart/`);
  }

  setSearchParams(key: string, values: string): void {
    const url: URL = new URL(window.location.href);
    url.searchParams.set(key, values);
    window.history.replaceState(null, '', url.toString());
    this.setLinkHref();
  }

  syncState(): void {
    if (window.location.search.replace('?', '') !== '') {
      const state: string[][] = window.location.search
        .replace('?', '')
        .split('&')
        .map((el) => el.split('='));
      state.forEach(([key, values]) => {
        values.split('%2C').forEach((val) => {
          const decodeVal = decodeURIComponent(val);
          appState.setCurrentState(key, decodeVal.replace(/\+/gi, ' '));
        });
      });
      this.setLinkHref();
    }
  }

  copyToClipboard(event: Event) {
    const milliseconds = 500;
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        const copyBtn = event.target as HTMLElement;
        copyBtn.textContent = 'Copied!';
        setTimeout(function changeTextContent(): void {
          copyBtn.textContent = 'Copy Link';
        }, milliseconds);
      })
      .catch((err: Error) => console.log(err.message));
  }

  setHeaderCart(): void {
    (document.querySelector('.header__total-price') as HTMLElement).innerHTML =
      STATE.cartPromocode.length > 0
        ? `<span class="header__cart-total">Cart total:</span> €${appState.getSumPriceWithPromo().toFixed(2)}`
        : `<span class="header__cart-total">Cart total:</span> €${appState.getSumPrice().toFixed(2)}`;
    (document.querySelector('.header__cart-number') as HTMLDivElement).innerText = `${appState.getAmountCart()}`;
  }

  setLocalStorage(): void {
    localStorage.setItem('cartProducts', JSON.stringify(STATE.cartProducts));
    localStorage.setItem('cartPromocode', JSON.stringify(STATE.cartPromocode));
  }

  getLocalStorage(): void {
    if (localStorage.getItem('cartProducts')) {
      const cartProducts: string | null = localStorage.getItem('cartProducts');
      if (cartProducts) STATE.cartProducts = JSON.parse(cartProducts) as CartState[];
    }
    if (localStorage.getItem('cartPromocode')) {
      const cartPromocode: string | null = localStorage.getItem('cartPromocode');
      if (cartPromocode) STATE.cartPromocode = JSON.parse(cartPromocode) as CartPromocodeState[];
    }
    this.setHeaderCart();
  }
}

export default Controller;
