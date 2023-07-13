// import { app } from '../../../index';
import { Product, DualSlider } from '../../../types/interfaces';
import { DEFAULT_STATE } from '../../state/state';

abstract class DualSliderFilter {
  products: Product[] = DEFAULT_STATE.products;

  constructor(protected sliderData: DualSlider) {}

  protected createSlider(currMin: number, currMax: number): string {
    const { fromInputId, toInputId, fromTextId, toTextId, range, currencySymbol } = this.sliderData;

    return `
    <div class="filters__filter-container">
      <h3 class="filters__filter-title">Price</h3>
      <div class="filters__filter-min-max">
        <div id="${fromTextId}" ${currMin === 0 ? 'style="display: none;"' : ''}>${currencySymbol}${currMin}</div>
        <span> ${currMin === 0 ? 'Products Not Found' : '⟷'} </span>
        <div id="${toTextId}" ${currMin === 0 ? 'style="display: none;"' : ''}>${currencySymbol}${currMax}</div>
      </div>
      <div class="filters__range">
        <input type="range" id="${fromInputId}" min="${range.min}" max="${range.max}" value="${
      currMin > 0 ? currMin : range.min
    }" />
        <input type="range" id="${toInputId}" min="${range.min}" max="${range.max}" value="${
      currMax > 0 ? currMax : range.min
    }" />
      </div>
    </div>
    `;
  }

  private getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement): [number, number] {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }
}

export default DualSliderFilter;
