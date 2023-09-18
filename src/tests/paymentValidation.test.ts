import * as check from '../components/view/paymentPage/paymentValidation';

describe('checkName function', () => {
  test('Validation name1', () => {
    const name = 'Adriano Celentano';
    const result = check.checkName(name);
    expect(result).toBe(true);
  });

  test('Validation name2', () => {
    const name = 'Michael Jordan';
    const result = check.checkName(name);
    expect(result).toBe(true);
  });

  test('Validation name3', () => {
    const name = 'Mr Anderson';
    const result = check.checkName(name);
    expect(result).toBeFalsy();
  });

  test('Validation name4', () => {
    const name = 'Innokenty';
    const result = check.checkName(name);
    expect(result).toBeFalsy();
  });
});

describe('checkPhone function', () => {
  test('Validation phone1', () => {
    const phone = '+79995468852';
    const result = check.checkPhone(phone);
    expect(result).toBe(true);
  });

  test('Validation phone2', () => {
    const phone = '+375333452416';
    const result = check.checkPhone(phone);
    expect(result).toBe(true);
  });

  test('Validation phone3', () => {
    const phone = '+7(928)-357-22-43';
    const result = check.checkPhone(phone);
    expect(result).toBeFalsy();
  });

  test('Validation phone4', () => {
    const phone = '375(29)34-524-16';
    const result = check.checkPhone(phone);
    expect(result).toBeFalsy();
  });
});

describe('checkAddress function', () => {
  test('Validation address1', () => {
    const address = 'Copper Canyon Mexico';
    const result = check.checkAddress(address);
    expect(result).toBe(true);
  });

  test('Validation address2', () => {
    const address = 'Eiffel Tower Paris';
    const result = check.checkAddress(address);
    expect(result).toBe(true);
  });

  test('Validation address3', () => {
    const address = 'New York USA';
    const result = check.checkAddress(address);
    expect(result).toBeFalsy();
  });

  test('Validation address4', () => {
    const address = 'Bermuda Triangle';
    const result = check.checkAddress(address);
    expect(result).toBeFalsy();
  });
});

describe('checkEmail function', () => {
  test('Validation email1', () => {
    const email = 'rolling-scopes-school@gmail.com';
    const result = check.checkEmail(email);
    expect(result).toBe(true);
  });

  test('Validation email2', () => {
    const email = 'jordan_belfort62@gmail.com';
    const result = check.checkEmail(email);
    expect(result).toBe(true);
  });

  test('Validation email3', () => {
    const email = 'rolingvasya.com';
    const result = check.checkEmail(email);
    expect(result).toBeFalsy();
  });

  test('Validation email4', () => {
    const email = 'chepuha';
    const result = check.checkEmail(email);
    expect(result).toBeFalsy();
  });
});

describe('checkCardNumber function', () => {
  test('Validation cardNumber1', () => {
    const cardNumber = '9999 9999 9999 9999';
    const result = check.checkCardNumber(cardNumber);
    expect(result).toBe(true);
  });

  test('Validation cardNumber2', () => {
    const cardNumber = '5948 4564 4566 4566';
    const result = check.checkCardNumber(cardNumber);
    expect(result).toBe(true);
  });

  test('Validation cardNumber3', () => {
    const cardNumber = '456465';
    const result = check.checkCardNumber(cardNumber);
    expect(result).toBeFalsy();
  });

  test('Validation cardNumber4', () => {
    const cardNumber = 'wwwwww';
    const result = check.checkCardNumber(cardNumber);
    expect(result).toBeFalsy();
  });
});

describe('checkCardTerm function', () => {
  test('Validation сardValid1', () => {
    const cardValid = '12/55';
    const result = check.checkCardTerm(cardValid);
    expect(result).toBe(true);
  });

  test('Validation сardValid2', () => {
    const cardValid = '55/58';
    const result = check.checkCardTerm(cardValid);
    expect(result).toBeFalsy();
  });

  test('Validation сardValid3', () => {
    const cardValid = '15/6';
    const result = check.checkCardTerm(cardValid);
    expect(result).toBeFalsy();
  });

  test('Validation сardValid4', () => {
    const cardValid = '3/98';
    const result = check.checkCardTerm(cardValid);
    expect(result).toBeFalsy();
  });
});

describe('checkCardCVV function', () => {
  test('Validation cardCVV1', () => {
    const cardCVV = '123';
    const result = check.checkCardCVV(cardCVV);
    expect(result).toBe(true);
  });

  test('Validation cardCVV2', () => {
    const cardCVV = '999';
    const result = check.checkCardCVV(cardCVV);
    expect(result).toBe(true);
  });

  test('Validation cardCVV3', () => {
    const cardCVV = '12';
    const result = check.checkCardCVV(cardCVV);
    expect(result).toBeFalsy();
  });

  test('Validation cardCVV4', () => {
    const cardCVV = 'www';
    const result = check.checkCardCVV(cardCVV);
    expect(result).toBeFalsy();
  });
});
