import app from '../../../index';
import { STATE, DEFAULT_STATE } from '../../state/state';

class SearchFilter {
  search: string = DEFAULT_STATE.filters.search;

  private getState(): void {
    this.search = STATE.filters.search;
  }

  render(): string {
    this.getState();
    return `
      <div class="sort-products__search-bar">
        <input type="search" class="search-bar__input ${
          this.search !== '' ? 'search-active' : ''
        }" placeholder="Search product" ${this.search ? `value="${this.search}"` : ''} />
      </div>
    `;
  }

  listener(): void {
    const el = document.querySelector('.search-bar__input') as HTMLInputElement;
    if (this.search !== '') {
      el.focus();
      el.selectionStart = el.value.length;
    }
    el.oninput = () => app.controller.appStateControl('search', el.value);
  }
}

export default SearchFilter;
