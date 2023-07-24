import { CartPromocodeState } from '../../../types/interfaces';

class CartPromocode {
  renderAdd(data: CartPromocodeState[]) {
    let html = '';
    let innerHtml = '';

    data.forEach((el) => {
      innerHtml += `
      <div class="applied-promo">
        ${el.name} -${el.discount}% -
        <button id="${el.id}" class="code-drop-button">DROP</button>
      </div>
      `;
    });

    html = `
      ${data.length > 0 ? '<h3 class="appl-codes__title">Applied codes</h3>' : ''}
      ${innerHtml}
    `;
    return html;
  }

  renderPreview(data: CartPromocodeState) {
    return `
      ${data.name} -${data.discount}%
      <button class="code-drop-button">ADD</button>
    `;
  }
}

export default CartPromocode;
