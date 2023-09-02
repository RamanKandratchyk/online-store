import { DualSlider } from '../../../types/interfaces';
import DualSliderFilter from './dualSliderFilter';
import { STATE, minStock, maxStock } from '../../state/state';

export const stockFilterData: DualSlider = {
  range: {
    min: minStock,
    max: maxStock,
  },
  fromTextId: 'stock-from-text',
  toTextId: 'stock-to-text',
  fromInputId: 'stock-from',
  toInputId: 'stock-to',
  rangePadding: 1,
  currencySymbol: '',
  toFixedNumber: 0,
};

export class StockFilter extends DualSliderFilter {
  private getState(): void {
    this.products = STATE.products.sort((a, b) => a.stock - b.stock);
  }

  render(): string {
    this.getState();
    const currMin: number = this.products.length > 0 ? this.products[0].stock : 0;
    const currMax: number = this.products.length > 0 ? this.products[this.products.length - 1].stock : 0;
    return `
    <div class="filters__filter-container">
      <h3 class="filters__filter-title">Stock</h3>
        ${this.createSlider(currMin, currMax)}
    </div>
    `;
  }
}
