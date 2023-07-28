import app from '../../../index';
import { Product, DualSlider } from '../../../types/interfaces';
import { DEFAULT_STATE } from '../../state/state';

abstract class DualSliderFilter {
  products: Product[] = DEFAULT_STATE.products;

  constructor(protected sliderData: DualSlider) {}

  protected createSlider(currMin: number, currMax: number): string {
    const { fromInputId, toInputId, fromTextId, toTextId, range, currencySymbol } = this.sliderData;

    return `
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
    `;
  }

  private getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement): [number, number] {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  private getPercentValue(curr: number, min = this.sliderData.range.min, max = this.sliderData.range.max): number {
    return ((curr - min) / (max - min)) * 100;
  }

  protected createBackground(currMin: number, currMax: number, sliderColor: string, rangeColor: string): string {
    return `
    linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${this.getPercentValue(currMin)}%,
      ${rangeColor} ${this.getPercentValue(currMin)}%,
      ${rangeColor} ${this.getPercentValue(currMax)}%, 
      ${sliderColor} ${this.getPercentValue(currMax)}%, 
      ${sliderColor} 100%)`;
  }

  protected fillSlider(
    from: HTMLInputElement,
    to: HTMLInputElement,
    sliderColor: string,
    rangeColor: string,
    controlSlider: HTMLInputElement
  ) {
    // const rangeDistance = +to.max - +to.min;
    const fromPosition = +from.value - +to.min;
    const toPosition = +to.value - +to.min;
    const sliderToFill = controlSlider;
    sliderToFill.style.backgroundImage = this.createBackground(fromPosition, toPosition, sliderColor, rangeColor);
  }

  protected setToggleAccessible(currentTarget: HTMLInputElement) {
    const sliderToToggle = currentTarget;
    if (Number(currentTarget.value) <= 0) {
      sliderToToggle.style.zIndex = '2';
    } else {
      sliderToToggle.style.zIndex = '0';
    }
  }

  listener(): void {
    const fromSlider = document.getElementById(`${this.sliderData.fromInputId}`) as HTMLInputElement;
    const toSlider = document.getElementById(`${this.sliderData.toInputId}`) as HTMLInputElement;
    const fromText = document.getElementById(`${this.sliderData.fromTextId}`) as HTMLDivElement;
    const toText = document.getElementById(`${this.sliderData.toTextId}`) as HTMLDivElement;

    fromSlider.oninput = () => {
      const [from, to] = this.getParsed(fromSlider, toSlider);
      this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#46f0a9', toSlider);
      if (from > to) {
        fromSlider.value = `${to}`;
        fromText.innerText = `${this.sliderData.currencySymbol}${to.toFixed(2)}`;
      } else {
        fromSlider.value = `${from}`;
        fromText.innerText = `${this.sliderData.currencySymbol}${from.toFixed(2)}`;
      }
    };

    fromSlider.onchange = () => {
      this.setSliderState(fromText, toText);
    };

    toSlider.oninput = () => {
      const [from, to] = this.getParsed(fromSlider, toSlider);
      this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#46f0a9', toSlider);
      this.setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = `${to}`;
        toText.innerText = `${this.sliderData.currencySymbol}${to.toFixed(2)}`;
      } else {
        toSlider.value = `${from}`;
        toText.innerText = `${this.sliderData.currencySymbol}${from.toFixed(2)}`;
      }
    };

    toSlider.onchange = () => {
      this.setSliderState(fromText, toText);
    };
  }

  setSliderState(fromText: HTMLElement, toText: HTMLElement): void {
    app.controller.appStateControl(this.sliderData.toInputId, toText.innerText);
    app.controller.appStateControl(this.sliderData.fromInputId, fromText.innerText);
  }
}

export default DualSliderFilter;
