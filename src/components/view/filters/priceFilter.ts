import { DualSlider } from '../../../types/interfaces';
import DualSliderFilter from './dualSliderFilter';
import { STATE, minPrice, maxPrice } from '../../state/state';

export const priceFilterData: DualSlider = {
  range: {
    min: minPrice,
    max: maxPrice,
  },
  fromTextId: 'price-from-text',
  toTextId: 'price-to-text',
  fromInputId: 'price-from',
  toInputId: 'price-to',
  rangePadding: 2,
  currencySymbol: '€',
  toFixedNumber: 2,
};

export class PriceFilter extends DualSliderFilter {
  private getState(): void {
    this.products = STATE.products.sort((a, b) => a.price - b.price);
    console.log('this.products =', this.products);
  }

  render(): string {
    this.getState();
    const currMin: number = this.products.length > 0 ? this.products[0].price : 0;
    console.log('currMin =', currMin);
    const currMax: number = this.products.length > 0 ? this.products[this.products.length - 1].price : 0;
    console.log('currMax =', currMax);
    return `
    <div class="filters__filter-container">
      <h3 class="filters__filter-title">Price</h3>
        ${this.createSlider(currMin, currMax)}
    </div>
    `;
  }
}
