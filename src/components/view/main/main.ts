// import { app } from '../../../index';
import { STATE } from '../../state/state';
import CategoryFilter from '../filters/categoryFilter';
import BrandFilter from '../filters/brandFilter';
import { PriceFilter, priceFilterData } from '../filters/priceFilter';
import { StockFilter, stockFilterData } from '../filters/stockFilter';
import SortFormFilter from '../filters/sortFormFilter';
import SearchFilter from '../filters/searchFilter';
import ProductCards from './productCards';

class Main {
  categoryFilter: CategoryFilter = new CategoryFilter(STATE.filters.category);

  brandFilter: BrandFilter = new BrandFilter(STATE.filters.brand);

  priceFilter: PriceFilter = new PriceFilter(priceFilterData);

  stockFilter: StockFilter = new StockFilter(stockFilterData);

  sortFormFilter: SortFormFilter = new SortFormFilter();

  searchFilter: SearchFilter = new SearchFilter();

  productCards: ProductCards = new ProductCards();

  render(): string {
    return `
      <section class="main-container">
        <aside class="filters">
          <div class="filters__buttons">
            <button class="filters__buttons-button">Reset Filters</button>
            <button class="filters__buttons-button">Copy Link</button>
          </div>
    
          ${this.categoryFilter.render()}
    
          ${this.brandFilter.render()}
    
          ${this.priceFilter.render()}

          ${this.stockFilter.render()}
        </aside>
    
        <section class="products">
          <div class="sort-products">
            ${this.sortFormFilter.render()}
    
            <div class="sort-products__stat">
              Found:
              <span class="stat-text">${STATE.products.length}</span>
            </div>
    
            ${this.searchFilter.render()}
    
            <div class="sort-products__view-mode">
              <div class="small-v active-mode">
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
                <div class="small-v-dot">.</div>
              </div>
              <div class="big-v">
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
                <div class="big-v-dot">.</div>
              </div>
            </div>
          </div>
    
          <!-- small tile -->
          <!-- <div class="products-items">
            <div class="item-tile">
              <div class="product-item">
                <div class="item-wrapper">
                  <div class="item-text">
                    <div class="item-title">Spathiphyllum</div>
                  </div>
                  <div class="item-buttons">
                    <button class="item-button">ADD TO CARD</button>
                    <button class="item-button">DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
    
          <!-- big tile -->
          <div class="products-items">
            <div class="item-tile big-tile">
              <div class="product-item">
                <div class="item-wrapper">
                  <div class="item-text">
                    <div class="item-title">Spathiphyllum</div>
                    <div class="item-info">
                      <div class="item-info__list">
                        <p class="item-info__list-item">
                          <span class="list-item__title">Category:</span>
                          Decorative leafy plants
                        </p>
                        <p class="item-info__list-item">
                          <span class="list-item__title">Brand:</span>
                          Greenish
                        </p>
                        <p class="item-info__list-item">
                          <span class="list-item__title">Price:</span>
                          €20.00
                        </p>
                        <p class="item-info__list-item">
                          <span class="list-item__title">Discount:</span>
                          10%
                        </p>
                        <p class="item-info__list-item">
                          <span class="list-item__title">Rating:</span>
                          4.75
                        </p>
                        <p class="item-info__list-item">
                          <span class="list-item__title">Stock:</span>
                          15
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item-buttons">
                    <button class="item-button">ADD TO CARD</button>
                    <button class="item-button">DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    `;
  }
}

export default Main;
