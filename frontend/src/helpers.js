import { IMPERIAL, METRIC } from './constant';

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

// convert block built with separation of logic
const convertCtoF = temp => Math.round(temp * 1.8 + 32);
const convertFtoC = temp => Math.round((temp - 32) * (5 / 9));
const convertTemp = (temp, unit) =>
  unit === IMPERIAL ? convertCtoF(temp) : convertFtoC(temp);

const convertMPHtoMS = wind => Math.round(wind * 0.44704);
const convertMStoMPH = wind => Math.round(wind * 2.23694);
const convertSpeed = (wind, unit) =>
  unit === IMPERIAL ? convertMPHtoMS(wind) : convertMStoMPH(wind);

export const convertUnitsInState = (state, unit) => {
  let { temp, windSpeed } = state;
  const newTemp = { ...temp };
  for (const k in newTemp) {
    const v = newTemp[k];
    newTemp[k] = newTemp[k] && convertTemp(v, unit);
  }
  windSpeed = windSpeed && convertSpeed(windSpeed, unit);
  return {
    ...state,
    temp: { ...newTemp },
    windSpeed,
  };
};

export const extractData = data => ({
  location: {
    city: data.name,
    country: data.sys.country,
  },
  weather: data.weather[0].main,
  humidity: data.main.humidity,
  windSpeed: Math.round(data.wind.speed),
  temp: {
    min: Math.round(data.main.temp_min),
    max: Math.round(data.main.temp_max),
    cur: Math.round(data.main.temp),
  },
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
