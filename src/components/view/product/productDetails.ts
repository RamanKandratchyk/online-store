import app from '../../../index';
import PRODUCTS from '../../../data/products';
import { Product } from '../../../types/interfaces';
import { STATE } from '../../state/state';

class ProductDetails {
  product!: Product;

  private getProduct(id: number): void {
    this.product = PRODUCTS.find((prod) => prod.id === id) as Product;
  }

  render(id: string): string {
    this.getProduct(+id);
    const homeHref: string = document.querySelector('.header__main-title')?.getAttribute('href') as string;
    console.log('homeHref =', homeHref);

    document.getElementsByTagName('main')[0].setAttribute('class', 'main-details');
    return `
      <div class="details-container">
        <div class="link-navigation">
          <a href="${homeHref}" class="link-item">STORE</a>
          <span>>></span>
          <a href="${window.location.href.replace(
            /\?(.*)|#(.*)/,
            `?category=${this.product.category}`
          )}" class="link-item">${this.product.category.toUpperCase()}</a>
          <span>>></span>
          <a href="${window.location.href.replace(
            /\?(.*)|#(.*)/,
            `?brand=${this.product.brand}`
          )}" class="link-item">${this.product.brand.toUpperCase()}</a>
          <span>>></span>
          <a href="${window.location.href}" class="link-item">${this.product.title.toUpperCase()}</a>
        </div>
        <div class="product-detail">
          <div class="product-title">
            <h1>${this.product.title}</h1>
          </div>
          <div class="product-data">
            <div class="product-photos">
              <div class="slides">
                ${this.imgsRender()}
              </div>
              <div class="grand-photo">
                <img
                  src="${this.product.thumbnail}"
                  alt="${this.product.title}"
                  class="grand-photo__image"
                />
              </div>
            </div>
            <div class="product-info">
              ${this.infoItemsRender()}
            </div>
            <div class="cart-info">
              <div class="cart-info__cart-buttons">
                €${this.product.price.toFixed(2)}
                <button id="product-add-btn" class="cart-button" value="${id}">${this.getCartButtonName()}</button>
                <button id="product-buy-btn" class="cart-button">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private infoItemsRender(): string {
    const items: (string | number)[] = [
      this.product.description,
      this.product.discountPercentage,
      this.product.rating,
      this.product.stock,
      this.product.brandName,
      this.product.categoryName,
    ];
    const headings: string[] = ['Description:', 'Discount Percentage:', 'Rating:', 'Stock:', 'Brand:', 'Category:'];

    return items.reduce(
      (acc: string, item: string | number, i): string =>
        `${acc}
        <div class="product-info__item">
          <h3 class="product-info__item-title">${headings[i]}</h3>
          <p class="product-info__item-text">${item}</p>
        </div>`,
      ''
    );
  }

  private imgsRender(): string {
    const slides = `<img src="${this.product.thumbnail}" alt="${this.product.title}" class="slide-item active-img"/>`;
    return this.product.images.reduce((acc, item): string => {
      return `${acc} <img src="${item}" alt="${this.product.title}" class="slide-item">`;
    }, slides);
  }

  private getCartButtonName(): string {
    return STATE.cartProducts.find((item) => item.id === this.product.id) ? 'REMOVE FROM CART' : 'ADD TO CART';
  }

  setListeners(): void {
    const slideImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slide-item');
    const largeImg = document.querySelector('.grand-photo__image') as HTMLImageElement;
    slideImgs.forEach((el) => {
      el.addEventListener('click', () => {
        largeImg.setAttribute('src', `${el.getAttribute('src') as string}`);
        slideImgs.forEach((img) => img.classList.remove('active-img'));
        el.classList.add('active-img');
      });
    });

    const addBtn = document.getElementById('product-add-btn') as HTMLButtonElement;
    addBtn.onclick = () => {
      app.controller.appStateControl('cart', addBtn.value, false);
      app.controller.appStateControl('items', STATE.cartItems.toString());
      addBtn.textContent = this.getCartButtonName();
    };

    const buyBtn = document.getElementById('product-buy-btn') as HTMLButtonElement;
    buyBtn.onclick = () => {
      if (!STATE.cartProducts.find((item) => item.id === this.product.id))
        app.controller.appStateControl('cart', addBtn.value, false);
      window.history.replaceState(null, '', `${window.location.search}#/cart/`);
      app.router.resolveRoute();
      app.view.cart.cartTotal.openPaymentPage();
    };
  }
}

export default ProductDetails;
