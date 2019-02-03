import { ZIP_REGEX } from 'constant';

const validateZip = zip => ZIP_REGEX.test(zip);

export const titleCase = word => {
  if (word || typeof word === String) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  }
};

export const setUrl = payload => {
  const { zip_code, city, country, unit } = payload;
  const KEY = process.env.WEATHER;
  return validateZip
    ? `https://api.openweathermap.org/data/2.5/weather?q=${zip_code},${country}&appid=${KEY}&units=${unit}`
    : `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=${unit}`;
};

export const urlFriendly = text => text.replace(/\s+/gi, '').toLowerCase();

export const suffixAsync = actionType => {
  // return type: capitalized strings
  const TYPE = actionType.toUpperCase();
  const REQUEST = TYPE + '_REQUEST';
  const SUCCESS = TYPE + '_SUCCESS';
  const FAILURE = TYPE + '_FAILURE';
  return [REQUEST, SUCCESS, FAILURE];
};

export const validateZipAndCity = payload => {
  const { zip_code, city } = payload;
  const cityRegex = /[a-z][a-z\s.]+/i;

  return validateZip(zip_code) || cityRegex.test(city);
};

// Handled by Formik/Yup
// export const validateRegister = fieldsObj => {
//   const { email, password, confirm } = fieldsObj;
//   // regex will allow something as simple as 'a@a.a'
//   const errors = [];
//   if (!email) errors.push('A valid email is required.');
//   if (!password) errors.push('Password required.');
//   if (!confirm) errors.push('Password confirmation required.');
//   if (password.length < 6)
//     errors.push('Password length must be at least 6 characters..');
//   if (password !== confirm)
//     errors.push('Entered password does not match confirmation password.');
//   if (!EMAIL_REGEX.test(email)) errors.push('Please enter a valid email.');
//   return errors;
// };
