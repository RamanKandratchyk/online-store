import app from '../../../index';
import * as appState from '../../state/appState';
import promocodesData from '../../../data/promocodes';
import CartPromocode from './cartPromocode';
import PaymentPage from '../paymentPage/paymentPage';
import { STATE } from '../../state/state';

class CartTotal {
  cartPromocode: CartPromocode = new CartPromocode();

  paymentPage: PaymentPage = new PaymentPage();

  render() {
    return `
      <h2 class="cart-total__title">Summary</h2>
      <div class="total-value">
        <span class="total-value__title">Products: </span>
        ${appState.getAmountCart()}
      </div>
      <div class="total-value old-price">
      ${
        appState.hasPromocode()
          ? `<span class="total-value__title">Total: </span> €${appState.getSumPrice().toFixed(2)}`
          : ''
      }
      </div>
      <div class="total-value new-price">
        <span class="total-value__title">Total: </span>
        €${appState.hasPromocode() ? appState.getSumPriceWithPromo().toFixed(2) : appState.getSumPrice().toFixed(2)}
      </div>
      <div class="appl-codes">
        ${appState.hasPromocode() ? this.cartPromocode.renderAdd(STATE.cartPromocode) : ''}
      </div>
      <div class="promo-code">
        <input type="search" class="promo-code__input" placeholder="Enter promo code" />
      </div>
      <div class="res-promo"></div>
      <span class="promo-example">Promo for test: 'RS', 'EPM'</span>
      <button class="cart-total__button">BUY NOW</button>
    `;
  }

  refreshCartTotal(cartTotal: HTMLElement) {
    const cartTotalHandle = cartTotal;
    cartTotalHandle.innerHTML = this.render();
    this.setListeners();
    app.controller.setHeaderCart();
  }

  changeValue(): void {
    const cartTotalProducts = document.querySelector('.total-value') as HTMLElement;
    cartTotalProducts.innerHTML = `
      <span class="total-value__title">Products: </span>
      ${appState.getAmountCart()}
    `;

    const cartTotalOldPrice = document.querySelector('.total-value.old-price') as HTMLElement;
    cartTotalOldPrice.innerHTML = `
    ${
      appState.hasPromocode()
        ? `<span class="total-value__title">Total: </span> €${appState.getSumPrice().toFixed(2)}`
        : ''
    }
    `;

    const cartTotalNewPrice = document.querySelector('.total-value.new-price') as HTMLElement;
    cartTotalNewPrice.innerHTML = `
      <span class="total-value__title">Total: </span>
      €${appState.getSumPriceWithPromo().toFixed(2)}
    `;
  }

  openPaymentPage() {
    const cartContainer = document.querySelector('.cart-container') as HTMLElement;
    cartContainer.insertAdjacentHTML('beforeend', this.paymentPage.render());
    this.paymentPage.setListeners();
  }

  setListeners(): void {
    const cartTotal = document.querySelector('.cart-total') as HTMLElement;
    const cartPromoInput = document.querySelector('.promo-code__input') as HTMLElement;
    const promoCodesPreview = document.querySelector('.res-promo') as HTMLElement;

    cartPromoInput.oninput = ({ target }) => {
      const { value } = target as HTMLInputElement;
      const promocode = promocodesData.find((el) => el.id === value.toLowerCase());

      if (promocode) {
        promoCodesPreview.innerHTML = this.cartPromocode.renderPreview(promocode);
        const addBtn = document.querySelector('.code-add-button') as HTMLButtonElement;

        if (appState.getPromocode(promocode.id)) {
          addBtn.style.display = 'none';
        }

        addBtn.onclick = () => {
          addBtn.style.display = 'none';
          appState.addPromocode(promocode);
          this.refreshCartTotal(cartTotal);
        };
      } else {
        promoCodesPreview.innerHTML = '';
      }
    };

    if (appState.hasPromocode()) {
      const removeButtons = document.querySelectorAll('.code-drop-button');

      removeButtons.forEach((el) =>
        el.addEventListener('click', ({ target }) => {
          appState.removePromocode((target as HTMLElement).id);
          this.refreshCartTotal(cartTotal);
        })
      );
    }

    const cartTotalBtn = document.querySelector('.cart-total__button') as HTMLElement;
    cartTotalBtn.onclick = () => {
      this.openPaymentPage();
    };
  }
}

export default CartTotal;
