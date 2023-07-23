export function checkName(name: string) {
  const template = /^[a-zа-яё]{3,}\s[a-zа-яё]{3,}\D*/gi;
  return template.test(name.toLowerCase());
}

export function checkPhone(phone: string) {
  const template = /^\+\d{9,}/;
  return template.test(phone);
}

export function checkAdress(adress: string) {
  const template = /^[a-zа-яё]{5,}\s[a-zа-яё]{5,}\s[a-zа-яё]{5,}\D*/gi;
  return template.test(adress.toLowerCase());
}

export function checkEmail(email: string) {
  const template = /^[_a-z0-9-+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
  return template.test(email.toLowerCase());
}

export function checkCardNumber(cardNumber: string) {
  const template = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
  return template.test(cardNumber);
}

export function checkCardTerm(valid: string) {
  const template = /^(0[1-9]|1[012])\/\d{2}/;
  return template.test(valid);
}

export function checkCardCVV(cvv: string) {
  const template = /\d{3}/;
  return template.test(cvv);
}
