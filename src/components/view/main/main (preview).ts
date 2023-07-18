import PRODUCTS from '../../../data/products';

// dual range price slider code start

const priceFromSlider = document.getElementById('price-from') as HTMLInputElement;
const priceToSlider = document.getElementById('price-to') as HTMLInputElement;
const priceFromText = document.getElementById('price-from-text') as HTMLDivElement;
const priceToText = document.getElementById('price-to-text') as HTMLDivElement;

function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement): [number, number] {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(
  from: HTMLInputElement,
  to: HTMLInputElement,
  sliderColor: string,
  rangeColor: string,
  controlSlider: HTMLInputElement
) {
  const rangeDistance = +to.max - +to.min;
  const fromPosition = +from.value - +to.min;
  const toPosition = +to.value - +to.min;
  const sliderToFill = controlSlider;
  sliderToFill.style.backgroundImage = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget: HTMLInputElement) {
  const sliderToToggle = currentTarget;
  if (Number(currentTarget.value) <= 0) {
    sliderToToggle.style.zIndex = '2';
  } else {
    sliderToToggle.style.zIndex = '0';
  }
}

function controlPriceFromSlider(fromSliderVar: HTMLInputElement, toSliderVar: HTMLInputElement) {
  const [from, to] = getParsed(fromSliderVar, toSliderVar);
  fillSlider(fromSliderVar, toSliderVar, '#C6C6C6', '#46f0a9', priceToSlider);
  if (from > to) {
    priceFromSlider.value = `${to}`;
    priceFromText.innerText = `€${to.toFixed(2)}`;
  } else {
    priceFromSlider.value = `${from}`;
    priceFromText.innerText = `€${from.toFixed(2)}`;
  }
}

function controlPriceToSlider(fromSliderVar: HTMLInputElement, toSliderVar: HTMLInputElement) {
  const [from, to] = getParsed(fromSliderVar, toSliderVar);
  fillSlider(fromSliderVar, toSliderVar, '#C6C6C6', '#46f0a9', priceToSlider);
  setToggleAccessible(toSliderVar);
  if (from <= to) {
    priceToSlider.value = `${to}`;
    priceToText.innerText = `€${to.toFixed(2)}`;
  } else {
    priceToSlider.value = `${from}`;
    priceToText.innerText = `€${from.toFixed(2)}`;
  }
}

fillSlider(priceFromSlider, priceToSlider, '#C6C6C6', '#25daa5', priceToSlider);
setToggleAccessible(priceToSlider);

priceFromSlider.oninput = () => controlPriceFromSlider(priceFromSlider, priceToSlider);
priceToSlider.oninput = () => controlPriceToSlider(priceFromSlider, priceToSlider);

// dual range price slider code end

// dual range stock slider code start

const stockFromSlider = document.getElementById('stock-from') as HTMLInputElement;
const stockToSlider = document.getElementById('stock-to') as HTMLInputElement;
const stockFromText = document.getElementById('stock-from-text') as HTMLDivElement;
const stockToText = document.getElementById('stock-to-text') as HTMLDivElement;

function controlStockFromSlider(fromSliderVar: HTMLInputElement, toSliderVar: HTMLInputElement) {
  const [from, to] = getParsed(fromSliderVar, toSliderVar);
  fillSlider(fromSliderVar, toSliderVar, '#C6C6C6', '#46f0a9', stockToSlider);
  if (from > to) {
    stockFromSlider.value = `${to}`;
    stockFromText.innerText = `${to}`;
  } else {
    stockFromSlider.value = `${from}`;
    stockFromText.innerText = `${from}`;
  }
}

function controlStockToSlider(fromSliderVar: HTMLInputElement, toSliderVar: HTMLInputElement) {
  const [from, to] = getParsed(fromSliderVar, toSliderVar);
  fillSlider(fromSliderVar, toSliderVar, '#C6C6C6', '#46f0a9', stockToSlider);
  setToggleAccessible(toSliderVar);
  if (from <= to) {
    stockToSlider.value = `${to}`;
    stockToText.innerText = `${to}`;
  } else {
    stockToSlider.value = `${from}`;
    stockToText.innerText = `${from}`;
  }
}

fillSlider(stockFromSlider, stockToSlider, '#C6C6C6', '#25daa5', stockToSlider);
setToggleAccessible(stockToSlider);

stockFromSlider.oninput = () => controlStockFromSlider(stockFromSlider, stockToSlider);
stockToSlider.oninput = () => controlStockToSlider(stockFromSlider, stockToSlider);

// dual range stock slider code end

// products tiles (small) render code start

/* const productsItems = document.querySelector('.products-items') as HTMLDivElement;
productsItems.innerHTML = '';

PRODUCTS.forEach((prod) => {
  productsItems.innerHTML += `
    <div class="item-tile small-tile">
      <div class="product-item">
        <div class="item-wrapper" style="background-image: url(${prod.thumbnail})">
          <div class="item-text">
            <div class="item-title">${prod.title}</div>
          </div>
          <div class="item-buttons">
            <button class="item-button-add">ADD TO CARD</button>
            <button class="item-button">DETAILS</button>
          </div>
        </div>
      </div>
    </div>
`;
}); */

// products tiles (small) render code end

// products tiles (big) render code start

const productsItems = document.querySelector('.products-items') as HTMLDivElement;
productsItems.innerHTML = '';

PRODUCTS.forEach((prod) => {
  productsItems.innerHTML += `
    <div class="item-tile big-tile">
      <div class="product-item">
        <div class="item-wrapper" style="background-image: url(${prod.thumbnail})">
          <a href="#" class="item-text">
            <div class="item-title">${prod.title}</div>
            <div class="item-info">
              <div class="item-info__list">
                <p class="item-info__list-item">
                  <span class="list-item__title">Category:</span>
                  ${prod.category}
                </p>
                <p class="item-info__list-item">
                  <span class="list-item__title">Brand:</span>
                  ${prod.brand}
                </p>
                <p class="item-info__list-item">
                  <span class="list-item__title">Price:</span>
                  €${prod.price.toFixed(2)}
                </p>
                <p class="item-info__list-item">
                  <span class="list-item__title">Discount:</span>
                  ${prod.discountPercentage}%
                </p>
                <p class="item-info__list-item">
                  <span class="list-item__title">Rating:</span>
                  ${prod.rating}
                </p>
                <p class="item-info__list-item">
                  <span class="list-item__title">Stock:</span>
                  ${prod.stock}
                </p>
              </div>
            </div>
          </a>
          <div class="item-buttons">
            <button class="item-button-add">ADD TO CARD</button>
            <a href="#">
              <button class="item-button">DETAILS</button>
            </a>
          </div>
        </div>
      </div>
    </div>
`;
});

// products tiles (big) render code end
