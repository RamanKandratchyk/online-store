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
                    <input type="text" class="valid-data__input" maxlength="5" placeholder="Valid Thru" />
                  </div>
                  <div class="cvv-data">
                    CVV:
                    <input type="text" class="valid-data__input" maxlength="3" placeholder="Code" />
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
}

export default PaymentPage;
// console.log(str.match(/\d{4}|\d{1,3}/g).join(' '));
