import app from '../../../index';
import PRODUCTS from '../../../data/products';
import { Product, CartState } from '../../../types/interfaces';
import CartPagination from './cartPagination';
import CartTotal from './cartTotal';
import * as appState from '../../state/appState';
import { STATE } from '../../state/state';

class Cart {
  cartTotal: CartTotal = new CartTotal();

  cartPagination: CartPagination = new CartPagination();

  render(products: CartState[] = STATE.cartProducts.slice(0, STATE.cartItems)): string {
    let prodListHtml = '';
    let cartHtml = '';

    products.forEach((cartElement) => {
      const cartProduct = PRODUCTS.find((prod) => prod.id === cartElement.id) as Product;
      prodListHtml += `
        <div class="cart-product-item-container">
          <div id="${cartProduct.id}" class="cart-item">
            <div class="cart-item__number">${STATE.cartProducts.indexOf(cartElement) + 1}</div>
            <div class="cart-item__info">
              <a href="${window.location.search}#/id/${cartProduct.id}/" class="cart-item__href">
                <img
                  class="cart-item__image"
                  src="${cartProduct.thumbnail}"
                  alt="${cartProduct.title}"
                />
              </a>
              <div class="cart-item__detail">
                <div class="cart-item__title">
                  <h3 class="cart-item__title-text">${cartProduct.title}</h3>
                </div>
                <div class="cart-item__description">
                  ${cartProduct.description}
                </div>
                <div class="cart-item__others">
                  <div>Rating: ${cartProduct.rating}</div>
                  <div>Discount: ${cartProduct.discountPercentage}%</div>
                </div>
              </div>
            </div>
            <div class="number-control">
              <div class="cart-stock-control">Stock: ${cartProduct.stock - cartElement.count}</div>
              <div class="incDec-control">
                <button class="incDec-control__button" name="minus">-</button>
                <span class="number-control__count">${cartElement.count}</span>
                <button class="incDec-control__button" name="plus">+</button>
              </div>
              <div class="cart-amount-control">€${(cartProduct.price * cartElement.count).toFixed(2)}</div>
            </div>
          </div>
        </div>
      `;
    });

    cartHtml = `
      <div class="cart-container">
        <div class="cart-wrapper">
          <div class="cart-products">
            <div class="title-and-page-control">
              <h2 class="cart-title">Products In Cart</h2>
              <div class="page-control">
                <div class="cart-limit">
                  LIMIT:
                  <button class="number-plus-minus" onclick="this.nextElementSibling.stepDown();">-</button>
                  <input type="number" class="cart-limit__input" min="1" value="${STATE.cartItems}" />
                  <button class="number-plus-minus" onclick="this.previousElementSibling.stepUp();">+</button>
                </div>
                <div class="page-numbers">
                  PAGE:
                  <button class="page-number-button prev"><</button>
                  <span class="cur-page-number">${this.checkItemsPage().curPage} / ${this.checkItemsPage().pages}</span>
                  <button class="page-number-button next">></button>
                </div>
              </div>
            </div>
    
            <div class="cart-products-items">
              ${prodListHtml}
            </div>
          </div>
          <div class="cart-total">
            ${this.cartTotal.render()}
          </div>
        </div>
      </div>  
    `;

    const main = document.getElementsByTagName('main')[0];
    main.setAttribute('class', 'main-cart');

    return STATE.cartProducts.length === 0 ? `<p class="cart-empty">Cart is Empty</p>` : cartHtml;
  }

  addProduct(id: string): void {
    const count = appState.addProdToCart(+id);
    app.controller.setHeaderCart();
    this.cartTotal.changeValue();

    const cartElementID = document.getElementById(`${id}`) as HTMLDivElement;
    const cartElementCount = cartElementID.querySelector(`.number-control__count`) as HTMLSpanElement;
    cartElementCount.innerHTML = count.toString();

    if (STATE.cartPromocode.length > 0) {
      const newPriceDiv = document.querySelector('.new-price') as HTMLDivElement;
      newPriceDiv.innerHTML = `
        <span class="total-value__title">Total: </span>
        €${appState.getSumPriceWithPromo().toFixed(2)}
      `;
    }

    const prod = PRODUCTS.find((prd) => prd.id === +id);
    const cartElementStockRest = cartElementID.querySelector(`.cart-stock-control`) as HTMLSpanElement;
    const cartElementPriceSum = cartElementID.querySelector(`.cart-amount-control`) as HTMLSpanElement;
    if (prod) {
      cartElementStockRest.innerHTML = `Stock: ${(prod.stock - count).toString()}`;
      cartElementPriceSum.innerHTML = `€${(prod.price * count).toFixed(2)}`;
    }
  }

  removeProduct(id: string): void {
    const count = appState.removeProdFromCart(+id);
    app.controller.setHeaderCart();

    const cartElementID = document.getElementById(`${id}`) as HTMLDivElement;
    const cartElementCount = cartElementID.querySelector(`.number-control__count`) as HTMLSpanElement;
    if (count) cartElementCount.innerHTML = count.toString();

    if (count) {
      this.cartTotal.changeValue();

      if (STATE.cartPromocode.length > 0) {
        const newPriceDiv = document.querySelector('.new-price') as HTMLDivElement;
        newPriceDiv.innerHTML = `
          <span class="total-value__title">Total: </span>
          €${appState.getSumPriceWithPromo().toFixed(2)}
        `;
      }
    } else {
      const pageList = this.cartPagination.getPageList(STATE.cartItems, STATE.cartPage);
      const main = document.getElementsByTagName('main')[0];
      main.innerHTML = this.render(pageList);

      if (STATE.cartProducts.length !== 0) this.setListeners();
    }

    const prod = PRODUCTS.find((prd) => prd.id === +id);
    const cartElementStockRest = cartElementID.querySelector(`.cart-stock-control`) as HTMLSpanElement;
    const cartElementPriceSum = cartElementID.querySelector(`.cart-amount-control`) as HTMLSpanElement;
    if (prod && count) {
      cartElementStockRest.innerHTML = `Stock: ${(prod.stock - count).toString()}`;
      cartElementPriceSum.innerHTML = `€${(prod.price * count).toFixed(2)}`;
    }
  }

  checkItemsPage(): { curPage: number; pages: number } {
    const pages: number = Math.ceil(STATE.cartProducts.length / STATE.cartItems);
    if (STATE.cartPage > pages) {
      STATE.cartPage = 1;
      app.controller.setSearchParams('page', `${STATE.cartPage}`);
    }
    return { curPage: STATE.cartPage, pages };
  }

  renderPageList(): void {
    app.controller.setSearchParams('page', `${STATE.cartPage}`);
    const pageList = this.cartPagination.getPageList(STATE.cartItems, STATE.cartPage);
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = this.render(pageList);
    this.setListeners();
  }

  cartLimitInputFunc(input: HTMLInputElement): void {
    const inputHandle = input;
    if (+input.value < 1) inputHandle.value = '1';
    if (+input.value > STATE.cartProducts.length) inputHandle.value = `${STATE.cartProducts.length}`;
    app.controller.appStateControl('items', inputHandle.value);
    const pageList = this.cartPagination.getPageList(STATE.cartItems, STATE.cartPage);
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = this.render(pageList);
    this.cartTotal.changeValue();
    this.setListeners();
    app.controller.setHeaderCart();
  }

  setListeners(): void {
    this.cartTotal.setListeners();

    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach((item) =>
      item.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.name === 'plus') {
          this.addProduct(item.id);
          this.cartTotal.changeValue();
        } else if (target.name === 'minus') {
          this.removeProduct(item.id);
          if (STATE.cartProducts.length !== 0) this.cartTotal.changeValue();
        }
      })
    );

    const cartLimit = document.querySelector('.cart-limit') as HTMLDivElement;
    const cartLimitInput = document.querySelector('.cart-limit__input') as HTMLInputElement;

    cartLimitInput.oninput = () => this.cartLimitInputFunc(cartLimitInput);

    cartLimit.onclick = (event) => {
      if (event.target !== cartLimitInput) {
        this.cartLimitInputFunc(cartLimitInput);
      }
    };

    const prev = document.querySelector('.prev') as HTMLElement;
    prev.onclick = () => {
      if (STATE.cartPage > 1) {
        STATE.cartPage -= 1;
        this.renderPageList();
      }
    };

    const next = document.querySelector('.next') as HTMLElement;
    next.onclick = () => {
      if (STATE.cartPage < STATE.cartProducts.length / STATE.cartItems) {
        STATE.cartPage += 1;
        this.renderPageList();
      }
    };
  }
}

export default Cart;
