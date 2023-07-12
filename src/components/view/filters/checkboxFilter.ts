import { Product } from '../../../types/interfaces';
import { STATE, DEFAULT_STATE } from '../../state/state';

export abstract class CheckboxFilter {
  filters: string[];

  products: Product[];

  constructor(statFilters: string[]) {
    this.filters = statFilters;
    this.products = DEFAULT_STATE.products;
  }

  protected getFilterState(statFilters: string[]): void {
    this.filters = statFilters;
    this.products = STATE.products;
  }

  protected isChecked(value: string): boolean {
    return this.filters.includes(value);
  }

  abstract getFindCount(value: string): number;

  protected createCategory(id: string, forValue: string, innerText: string, count: number): string {
    return `
    <div class="checkbox-line">
      <input id="${id}" type="checkbox" ${this.isChecked(id) ? 'checked' : ''}
      ${this.getFindCount(id) === 0 ? ' disabled' : ''}/>
      <label class="filters__filter-label" for="${forValue}">${innerText}</label>
      <span class="filters__filter-number">(${this.getFindCount(id)}/${count})</span>
      </div>
    `;
  }
}

export default CheckboxFilter;
