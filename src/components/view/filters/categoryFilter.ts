import app from '../../../index';
import { CategoryFilterData } from '../../../types/types';
import { STATE } from '../../state/state';
import CheckboxFilter from './checkboxFilter';

const categoryFilterData: CategoryFilterData[] = [
  ['category', 'decorative-plants', 'Decorative leafy plants', 6],
  ['category', 'blooming-flowers', 'Blooming indoor flowers', 6],
  ['category', 'palm-trees', 'Palm trees, large plants', 6],
  ['category', 'ferns', 'Ferns', 6],
  ['category', 'cacti', 'Cacti and succulents', 6],
  ['category', 'lianas', 'Lianas', 6],
];

class CategoryFilter extends CheckboxFilter {
  getFindCount(category: string): number {
    return this.products.filter((prod) => prod.category === category).length;
  }

  render(): string {
    this.getFilterState(STATE.filters.category);
    return `
    <div class="filters__filter-container">
      <h3 class="filters__filter-title">Category</h3>
      <div class="filters__filter-list">
        ${categoryFilterData.reduce((acc, data) => acc + this.createCategory(...data), '')}
      </div>
    </div>
    `;
  }

  listener(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox-category');
    inputs.forEach((el) => el.addEventListener('input', () => app.controller.appStateControl('category', el.id)));
  }
}

export default CategoryFilter;
