// import { app } from '../../../index';
import { STATE } from '../../state/state';
import * as paymentValidation from './paymentValidation';
import { RegExpCallBack } from '../../../types/types';
import cardsLogoUrls from '../../../data/cardsLogo';

class PaymentPage {
  isFormValid = false;

  render() {
    return `
      <div class="buy-modal-window">
        <div class="modal-content">
          <form action="" class="modal-form">
            <div class="person-details">
              <h2 class="person-details__title">Personal details</h2>
              <div class="form-item person-name">
                <input type="text" class="form-item__input" name="name-input" placeholder="Name" />
              </div>
              <div class="form-item phone-number">
                <input type="tel" class="form-item__input" name="phone-input" placeholder="Phone number" />
              </div>
              <div class="form-item person-address">
                <input type="text" class="form-item__input" name="address-input" placeholder="Delivery address" />
              </div>
              <div class="form-item person-email">
                <input type="email" class="form-item__input" name="email-input" placeholder="E-mail" />
              </div>
            </div  

            <div class="card-details">
              <h2 class="card-details__title">Credit card details</h2>
              <div class="card-data">
                <div class="card-number">
                  <img src="${cardsLogoUrls.noLogo}" alt="no card logo" class="card-logo" />
                  <input
                    type="text"
                    class="card-number__input"
                    name="card-number-input"
                    maxlength="19"
                    placeholder="Card number"
                  />
                </div

                <div class="other-card-data">
                  <div class="valid-data">
                    VALID:
                    <input
                        type="text"
                        class="valid-data__input"
                        name="card-term-input"
                        maxlength="5"
                        placeholder="Valid Thru"
                      />
                  </div>
                  <div class="cvv-data">
                    CVV:
                    <input
                        type="text"
                        class="valid-data__input"
                        name="card-cvv-input"
                        maxlength="3"
                        placeholder="Code"
                      />
                  </div>
                </div>
              </div>
            </div  
            <button class="card-submit-button" type="submit">CONFIRM</button>
          </form>
        </div>
      </div>
    `;
  }

  createError(input: HTMLInputElement) {
    // const errorDiv = document.createElement('div');
    // errorDiv.classList.add('error-msg');
    // errorDiv.textContent = 'error';
    input.insertAdjacentHTML('afterend', '<div class="error-msg">error</div>');
  }

  removeError(input: HTMLInputElement) {
    const parent = input.parentNode as HTMLInputElement;
    const errorDiv = parent.querySelector('.error-msg') as HTMLDivElement;
    if (errorDiv) errorDiv.remove();
  }

  setError(input: HTMLInputElement, cb: RegExpCallBack<string>, setTrue = false) {
    if (!cb(input.value)) {
      this.removeError(input);
      input.classList.add('error');
      this.createError(input);
      this.isFormValid = false;
    } else {
      this.removeError(input);
      input.classList.remove('error');

      if (setTrue) this.isFormValid = true;
    }
  }

  createCardError(input: HTMLInputElement) {
    const parent = document.querySelector('.card-details') as HTMLElement;

    switch (input.name) {
      case 'card-number-input':
        parent.insertAdjacentHTML(
          'beforeend',
          `<div id="${this.getErrorId(input.name)} class="card-err"">Card number - error</div>`
        );
        break;
      case 'card-term-input':
        parent.insertAdjacentHTML(
          'beforeend',
          `<div id="${this.getErrorId(input.name)} class="card-err">Card valid thru - error</div>`
        );
        break;
      case 'card-cvv-input':
        parent.insertAdjacentHTML(
          'beforeend',
          `<div id="${this.getErrorId(input.name)} class="card-err"">Card CVV - error</div>`
        );
        break;
      default:
    }
  }

  setCardError(input: HTMLInputElement, cb: RegExpCallBack<string>, setTrue = false) {
    const errorDiv: HTMLElement | null = document.getElementById(this.getErrorId(input.name));

    if (!cb(input.value)) {
      if (!errorDiv) {
        this.createCardError(input);
      }
      input.classList.add('error');
      this.isFormValid = false;
    } else {
      errorDiv?.remove();
      input.classList.remove('error');
      if (setTrue) this.isFormValid = true;
    }
  }

  private getErrorId(inputName: string): string {
    const res: string[] = inputName.split('-');
    res.pop();
    res.push('error');
    return res.join('-');
  }

  closePaymentPage(event: Event, paymentPage: HTMLElement) {
    const modalContent = document.querySelector('.modal-content') as HTMLDivElement;
    const withinModalContent = event.composedPath().includes(modalContent);
    if (!withinModalContent) paymentPage.remove();
  }

  setListeners(): void {
    const paymentForm = document.querySelector('.modal-form') as HTMLInputElement;
    const paymentFormName = document.querySelector('[name="name-input"]') as HTMLInputElement;
    const paymentFormPhone = document.querySelector('[name="phone-input"]') as HTMLInputElement;
    const paymentFormAddress = document.querySelector('[name="address-input"]') as HTMLInputElement;
    const paymentFormEmail = document.querySelector('[name="email-input"]') as HTMLInputElement;
    const paymentFormCardNumber = document.querySelector('[name="card-number-input"]') as HTMLInputElement;
    const paymentFormCardTerm = document.querySelector('[name="card-term-input"]') as HTMLInputElement;
    const paymentFormCardCVV = document.querySelector('[name="card-cvv-input"]') as HTMLInputElement;

    const inputData: [HTMLInputElement, RegExpCallBack<string>][] = [
      [paymentFormName, paymentValidation.checkName],
      [paymentFormPhone, paymentValidation.checkPhone],
      [paymentFormAddress, paymentValidation.checkAddress],
      [paymentFormEmail, paymentValidation.checkEmail],
    ];

    paymentForm.onsubmit = (event) => {
      event.preventDefault();

      inputData.forEach(([input, cb]) => this.setError(input, cb));

      this.setCardError(paymentFormCardNumber, paymentValidation.checkCardNumber);

      this.setCardError(paymentFormCardTerm, paymentValidation.checkCardTerm);

      this.setCardError(paymentFormCardCVV, paymentValidation.checkCardCVV);

      if (this.isFormValid) {
        // const mainCart = document.querySelector('.main-cart') as HTMLElement; //!uncomment later
        STATE.cartProducts = [];
        // mainCart.innerHTML = app.view.cart.render(); //!uncomment later
        // app.controller.setHeaderCart(); //!uncomment later
        window.location.href = '#/';
      }
    };

    inputData.forEach(([input, cb]) => {
      const inputToHandle = input;
      inputToHandle.oninput = () => this.setError(input, cb, true);
    });

    paymentFormCardNumber.oninput = (event) => {
      const paymentFormCardImg = document.querySelector('.card-logo') as HTMLImageElement;
      const target = event.target as HTMLInputElement;
      const workedTargetValue: RegExpMatchArray | null = target.value.replace(/\s/g, '').match(/\d{4}|\d{1,3}/g);
      if (workedTargetValue) target.value = workedTargetValue.join(' ');

      switch (target.value.split('')[0]) {
        case '1':
          paymentFormCardImg.src = cardsLogoUrls.jcb;
          break;
        case '2':
          paymentFormCardImg.src = cardsLogoUrls.unionPay;
          break;
        case '3':
          paymentFormCardImg.src = cardsLogoUrls.americanExpress;
          break;
        case '4':
          paymentFormCardImg.src = cardsLogoUrls.visa;
          break;
        case '5':
          paymentFormCardImg.src = cardsLogoUrls.mastercard;
          break;
        default:
          paymentFormCardImg.src = cardsLogoUrls.noLogo;
      }

      this.setCardError(target, paymentValidation.checkCardNumber, true);

      if (Number.isNaN(+target.value.replace(/\s/g, ''))) target.value = target.value.slice(0, -1);
    };

    paymentFormCardTerm.oninput = (event) => {
      const target = event.target as HTMLInputElement;

      if (target.value.length > 2) {
        const workedTargetValue: RegExpMatchArray | null = target.value.replace(/\//g, '').match(/\d{2}|\d/g);
        if (workedTargetValue) target.value = workedTargetValue.join(' ');
      }

      if (Number.isNaN(+target.value.replace(/\s/g, '').replace(/\//g, ''))) target.value = target.value.slice(0, -1);

      this.setCardError(target, paymentValidation.checkCardTerm, true);
    };

    paymentFormCardCVV.oninput = (event) => {
      const target = event.target as HTMLInputElement;
      this.setCardError(target, paymentValidation.checkCardCVV, true);

      if (Number.isNaN(+target.value)) target.value = target.value.slice(0, -1);
    };

    const paymentPage = document.querySelector('.buy-modal-window') as HTMLDivElement;
    paymentPage.onmousedown = (event) => {
      this.closePaymentPage(event, paymentPage);
    };

    paymentPage.ontouchstart = (event) => {
      this.closePaymentPage(event, paymentPage);
    };
  }
}

export default PaymentPage;
