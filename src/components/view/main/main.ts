// import { app } from '../../../index';
import { STATE } from '../../state/state';
import CategoryFilter from '../filters/categoryFilter';
import BrandFilter from '../filters/brandFilter';
import { PriceFilter, priceFilterData } from '../filters/priceFilter';
import { StockFilter, stockFilterData } from '../filters/stockFilter';
import SortFormFilter from '../filters/sortFormFilter';
import SearchFilter from '../filters/searchFilter';
import ProductCards from './productCards';
import DotsRender from './dotsRender';

class Main {
  categoryFilter: CategoryFilter = new CategoryFilter(STATE.filters.category);

  brandFilter: BrandFilter = new BrandFilter(STATE.filters.brand);

  priceFilter: PriceFilter = new PriceFilter(priceFilterData);

  stockFilter: StockFilter = new StockFilter(stockFilterData);

  sortFormFilter: SortFormFilter = new SortFormFilter();

  searchFilter: SearchFilter = new SearchFilter();

  productCards: ProductCards = new ProductCards();

  dots: DotsRender = new DotsRender();

  render(): string {
    document.getElementsByTagName('main')[0].setAttribute('class', 'main');

    return `
      <section class="main-container">
        <aside class="filters">
          <div class="filters__buttons">
            <button id="reset-filters-btn" class="filters__buttons-button">Reset Filters</button>
            <button id="copy-link-btn" class="filters__buttons-button">Copy Link</button>
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
                ${this.dots.renderSmallDots()}
              </div>
              <div class="big-v">
                ${this.dots.renderBigDots()}
              </div>
            </div>
          </div>
    
          <div class="products-items">
            ${STATE.products.length === 0 ? '<span class="no-results">No results</span>' : ''}
            ${STATE.sortView === 'bigTile' ? this.productCards.renderBigTiles() : this.productCards.renderSmallTiles()}
          </div>
        </section>
      </section>
    `;
  }

  setListeners(): void {
    this.categoryFilter.listener();
    this.brandFilter.listener();
    this.priceFilter.listener();
    this.stockFilter.listener();
    this.sortFormFilter.listener();
    this.searchFilter.listener();
    this.productCards.listener();

    // const resBtn = document.getElementById('reset-filters-btn') as HTMLButtonElement; //! uncomment later
    // resBtn.onclick = () => {
    //   app.controller.resetFilters();
    // };

    // const copyBtn = document.getElementById('copy-link-btn') as HTMLButtonElement;
    // copyBtn.onclick = (e) => {
    //   app.controller.copyToClipboard(e);
    // };

    // const smallTileBtn = document.querySelector('.small-v') as HTMLElement;
    // smallTileBtn.onclick = () => app.controller.appStateControl('sortView', 'smallTile');

    // const bigTileBtn = document.querySelector('.big-v') as HTMLElement;
    // bigTileBtn.onclick = () => app.controller.appStateControl('sortView', 'bigTile');
  }
}

export default Main;
