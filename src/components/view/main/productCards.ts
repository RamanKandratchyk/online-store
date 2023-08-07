import app from '../../../index';
import { Product } from '../../../types/interfaces';
import { STATE, DEFAULT_STATE } from '../../state/state';
import { SortKind } from '../../../types/types';

class ProductCards {
  products: Product[] = DEFAULT_STATE.products;

  sortKind: SortKind = DEFAULT_STATE.sortIndex;

  getState(): void {
    this.products = STATE.products;
    this.sortKind = STATE.sortIndex;
    switch (this.sortKind) {
      case SortKind.titleAsc:
        this.products.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case SortKind.titleDesc:
        this.products.sort((a, b) => (a.title > b.title ? -1 : 1));
        break;
      case SortKind.priceAsc:
        this.products.sort((a, b) => a.price - b.price);
        break;
      case SortKind.priceDesc:
        this.products.sort((a, b) => b.price - a.price);
        break;
      case SortKind.ratingAsc:
        this.products.sort((a, b) => a.rating - b.rating);
        break;
      case SortKind.ratingDesc:
        this.products.sort((a, b) => b.rating - a.rating);
        break;
      case SortKind.discountAsc:
        this.products.sort((a, b) => a.discountPercentage - b.discountPercentage);
        break;
      case SortKind.discountDesc:
        this.products.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      default:
        this.products.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }

  renderSmallTiles(): string {
    this.getState();
    let smallTilesHTML = '';

    this.products.forEach((prod) => {
      smallTilesHTML += `
        <div class="item-tile small-tile">
          <div class="product-item">
            <div class="item-wrapper" style="background-image: url(${prod.thumbnail})">
              <a href="${window.location.search}#/id/${prod.id}/" class="item-text">
                <div class="item-title">${prod.title}</div>
              </a>
              <div class="item-buttons">
                <button class="item-button-add" value="${prod.id}">
                ${STATE.cartProducts.find((item) => item.id === prod.id) ? 'REMOVE' : 'ADD TO CART'}
                </button>
                <a class="details-btn-href" href="${window.location.search}#/id/${prod.id}/">
                  <button class="item-button">DETAILS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    return smallTilesHTML;
  }

  renderBigTiles(): string {
    this.getState();
    let bigTilesHTML = '';

    this.products.forEach((prod) => {
      bigTilesHTML += `
        <div class="item-tile big-tile">
          <div class="product-item">
            <div class="item-wrapper" style="background-image: url(${prod.thumbnail})">
              <a href="${window.location.search}#/id/${prod.id}/" class="item-text">
                <div class="item-title">${prod.title}</div>
                <div class="item-info">
                  <div class="item-info__list">
                    <p class="item-info__list-item">
                      <span class="list-item__title">Category:</span>
                      ${prod.category}
                    </p>
                    <p class="item-info__list-item">
                      <span class="list-item__title">Brand:</span>
                      ${prod.brand}
                    </p>
                    <p class="item-info__list-item">
                      <span class="list-item__title">Price:</span>
                      €${prod.price.toFixed(2)}
                    </p>
                    <p class="item-info__list-item">
                      <span class="list-item__title">Discount:</span>
                      ${prod.discountPercentage}%
                    </p>
                    <p class="item-info__list-item">
                      <span class="list-item__title">Rating:</span>
                      ${prod.rating}
                    </p>
                    <p class="item-info__list-item">
                      <span class="list-item__title">Stock:</span>
                      ${prod.stock}
                    </p>
                  </div>
                </div>
              </a>
              <div class="item-buttons">
                <button class="item-button-add" value="${prod.id}">
                ${STATE.cartProducts.find((item) => item.id === prod.id) ? 'REMOVE' : 'ADD TO CART'}
                </button>
                <a href="${window.location.search}#/id/${prod.id}/">
                  <button class="item-button">DETAILS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    return bigTilesHTML;
  }

  listener(): void {
    const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.item-button-add');
    btns.forEach((btn) => btn.addEventListener('click', () => app.controller.appStateControl('cart', btn.value)));
  }
}

export default ProductCards;
