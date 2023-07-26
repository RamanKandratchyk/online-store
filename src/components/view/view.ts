import Main from './main/main';
import ProductDetails from './product/productDetails';
import Cart from './cart/cart';
import Page404 from './page404/page404';

class View {
  main: Main = new Main();

  productDetails: ProductDetails = new ProductDetails();

  cart: Cart = new Cart();

  page404: Page404 = new Page404();
}

export default View;
