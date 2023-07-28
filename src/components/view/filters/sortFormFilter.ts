import app from '../../../index';
import { SortKind } from '../../../types/types';
import { STATE, DEFAULT_STATE } from '../../state/state';

class SortFormFilter {
  sort: SortKind = DEFAULT_STATE.sortIndex;

  private getState(): void {
    this.sort = STATE.sortIndex;
  }

  private createOptions(): string {
    let string = '';
    const sortOptions = Object.values(SortKind);

    sortOptions.forEach((option) => {
      string += `
      <option value="${option}" ${this.sort === option ? 'selected' : ''}>${option}</option>
      `;
    });

    return string;
  }

  render(): string {
    this.getState();
    return `
      <div class="sort-bar">
        <select name="sort" class="sort-bar__select">
          <option value="sort-title" class="sort-name" disabled selected>Sort options:</option>
          ${this.createOptions()}
        </select>
      </div>
    `;
  }

  listener(): void {
    const selectEl = document.querySelector('.sort-bar__select') as HTMLSelectElement;
    selectEl.onchange = () => app.controller.appStateControl('sort', selectEl.value);
  }
}

export default SortFormFilter;
