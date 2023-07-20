import { CartState } from '../../../types/interfaces';
import { STATE } from '../../state/state';

class CartPagination {
  getPageList(items: number, page: number): CartState[] {
    const { cartProducts } = STATE;
    const pages = Math.ceil(cartProducts.length / items);

    const startEl = (page - 1) * items;
    const endEl = startEl + items;

    if (pages > 0 && pages < page) {
      STATE.cartPage -= 1;
      const curPageNumber = document.querySelector('.cur-page-number') as HTMLElement;
      curPageNumber.textContent = STATE.cartPage.toString();
      return cartProducts.slice(startEl - items, endEl - items);
    }

    return cartProducts.slice(startEl, endEl);
  }
}

export default CartPagination;
