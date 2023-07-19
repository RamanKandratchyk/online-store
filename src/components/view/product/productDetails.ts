// import { app } from '../../../index';
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
    const homeHref: string = document.querySelector('.header__logo-link')?.getAttribute('href') as string;

    document.getElementsByTagName('main')[0].setAttribute('class', 'main-details');
    return `
      <div class="details-container">
        <div class="link-navigation">
          <a href="${homeHref}" class="link-item">STORE</a>
          <span>>></span>
          <span class="link-item">${this.product.category.toUpperCase()}</span>
          <span>>></span>
          <a href="" class="link-item">${this.product.brand.toUpperCase()}</a>
          <span>>></span>
          <a href="" class="link-item">${this.product.title.toUpperCase()}</a>
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
                €${this.product.price}
                <button id="product-add-btn" class="cart-button">${this.getCartButtonName()}</button>
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
      this.product.brand,
      this.product.category,
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
      // app.controller.appStateControl('cart', addBtn.value, false); //!uncomment later
      addBtn.textContent = this.getCartButtonName();
    };

    const buyBtn = document.querySelector('product-buy-btn') as HTMLButtonElement;
    buyBtn.onclick = () => {
      // if (!STATE.cartProducts.find((item) => item.id === this.product.id)) //!uncomment later
      // app.controller.appStateControl('cart', addBtn.value, false);
      // window.history.replaceState(null, '', `${window.location.search}#/cart/`);
      // app.router.resolveRoute();
      // app.view.cart.cartTotal.openPopup();
    };
  }
}

export default ProductDetails;
