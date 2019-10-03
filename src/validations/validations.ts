const ERROR_MESSAGES = {
  INVALID_EMAIL: "Email указан неверно",
  INVALID_FORMAT: "Нужно указать фамилию и имя",
  INVALID_PHONE: "Неверный формат номера телефона"
};

export const validateEmail = (email: string): string => {
  // eslint-disable-next-line
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isMatchRegExp = emailRegExp.test(email.toLowerCase());

  if (!isMatchRegExp) return ERROR_MESSAGES.INVALID_EMAIL;

  return "";
};

export const validateFirstNameAndLastName = (name: string): string => {
  // eslint-disable-next-line
  const namesRegExp = /^[a-zа-я\-]+ [a-zа-я\-]+$/;
  const isMatchRegexp = namesRegExp.test(name.toLowerCase());

  if (!isMatchRegexp) return ERROR_MESSAGES.INVALID_FORMAT;

  return "";
};

/**
 * Ориентировано на российские мобильные + городские с кодом из 3 цифр (например, Москва).
 * https://habr.com/ru/post/110731/
 * @param phoneNumber
 */
export const validatePhoneNumber = (phoneNumber: string): string => {
  // eslint-disable-next-line
  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  const errorMessage = ERROR_MESSAGES.INVALID_PHONE;

  if (!phoneNumber) return errorMessage;
  if (!regExp.test(phoneNumber)) return errorMessage;

  return "";
};
