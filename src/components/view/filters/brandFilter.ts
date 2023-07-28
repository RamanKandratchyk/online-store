import app from '../../../index';
import { BrandFilterData } from '../../../types/types';
import { STATE } from '../../state/state';
import CheckboxFilter from './checkboxFilter';

const brandFilterData: BrandFilterData[] = [
  ['brand', 'greenish', 'Greenish', 6],
  ['brand', 'little-green', 'Little Green', 6],
  ['brand', 'garden-world', 'Garden World', 6],
  ['brand', 'spring-rose', 'Spring Rose Souq', 6],
  ['brand', 'willoway-nurseries', 'Willoway Nurseries', 6],
  ['brand', 'plant-depot', 'Plant Depot', 6],
];

class BrandFilter extends CheckboxFilter {
  getFindCount(brand: string): number {
    return this.products.filter((prod) => prod.brand === brand).length;
  }

  render(): string {
    this.getFilterState(STATE.filters.brand);
    return `
    <div class="filters__filter-container">
      <h3 class="filters__filter-title">Brand</h3>
      <div class="filters__filter-list">
        ${brandFilterData.reduce((acc, data) => acc + this.createCategory(...data), '')}
      </div>
    </div>
    `;
  }

  listener(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox-brand');
    inputs.forEach((el) => el.addEventListener('input', () => app.controller.appStateControl('brand', el.value)));
  }
}

export default BrandFilter;
