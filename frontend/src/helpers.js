export const titleCase = word => {
  if (word || typeof word === String) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  }
};

export const setUrl = payload => {
  const { zip_code, city, country, unit } = payload;
  const commaCountry = country ? ',' + country : '';
  const KEY = process.env.REACT_APP_WEATHER;
  return city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}${commaCountry}&appid=${KEY}&units=${unit}`
    : `https://api.openweathermap.org/data/2.5/weather?q=${zip_code}${commaCountry}&appid=${KEY}&units=${unit}`;
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

  return zip_code || cityRegex.test(city);
};

export const extractData = data => ({
  weather: data.weather[0].main,
  city: data.name,
  country: data.sys.country,
  temp: data.main.temp,
  minTemp: data.main.temp_min,
  maxTemp: data.main.temp_max,
  humidity: data.main.humidity,
  windSpeed: data.wind.speed,
});

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
