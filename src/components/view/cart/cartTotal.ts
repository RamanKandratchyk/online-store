// import { app } from '../../../index';
// import * as appState from '../../state/appState';
import promocodesData from '../../../data/promocodes';
import CartPromocode from './cartPromocode';
import PaymentPage from '../paymentPage/paymentPage';
import { STATE } from '../../state/state';

class CartTotal {
  cartPromocode: CartPromocode = new CartPromocode();

  paymentPage: PaymentPage = new PaymentPage();
}

export default CartTotal;
