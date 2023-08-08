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

  protected createCategory(category: string, categoryId: string, categoryTitle: string, count: number): string {
    return `
    <div class="checkbox-line">
      <input id="${categoryId}" type="checkbox" ${this.isChecked(categoryId) ? 'checked' : ''}
      ${this.getFindCount(categoryId) === 0 ? ' disabled' : ''} class="checkbox-${category}" />
      <label class="filters__filter-label" for="${categoryId}">${categoryTitle}</label>
      <span class="filters__filter-number">(${this.getFindCount(categoryId)}/${count})</span>
      </div>
    `;
  }
}

export default CheckboxFilter;
