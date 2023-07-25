import { STATE } from '../../state/state';

// change logo colours code start

function getRandomNumber(range: number): number {
  return Math.floor(Math.random() * range);
}

function getRandomColor(): string {
  const BASE = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += BASE[getRandomNumber(BASE.length)];
  }
  return color;
}

function changeLogoColours(): void {
  const svg1: HTMLElement | null = document.getElementById('svg-1');
  const svg5: HTMLElement | null = document.getElementById('svg-5');
  const svg7: HTMLElement | null = document.getElementById('svg-7');

  if (svg1) svg1.style.fill = getRandomColor();
  if (svg5) svg5.style.fill = getRandomColor();
  if (svg7) svg7.style.fill = getRandomColor();
}

setInterval(changeLogoColours, 1000);

// change logo colours code end

console.log('STATE =', STATE);

const cartItem = document.querySelector('.cart-item') as HTMLDivElement;
cartItem.addEventListener(
  'click',
  (e) => {
    if (e.currentTarget === cartItem) {
      console.log('Parent .cart-item CLICK');
      console.log(e);
    }
  },
  true
);
const btn = document.getElementsByName('plus')[0] as HTMLButtonElement;
console.log(btn);
console.log(btn.name);
btn.addEventListener('click', (e) => {
  console.log(e);
});
