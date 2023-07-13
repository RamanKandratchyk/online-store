import { Product } from '../../../types/interfaces';
import { STATE, DEFAULT_STATE } from '../../state/state';

abstract class CheckboxFilter {
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

  protected createCategory(category: string, id: string, innerText: string, count: number): string {
    return `
    <div class="checkbox-line">
      <input id="${id}" type="checkbox" ${this.isChecked(id) ? 'checked' : ''}
      ${this.getFindCount(id) === 0 ? ' disabled' : ''} class="checkbox-${category}" />
      <label class="filters__filter-label" for="${id}">${innerText}</label>
      <span class="filters__filter-number">(${this.getFindCount(id)}/${count})</span>
      </div>
    `;
  }
}

export default CheckboxFilter;
