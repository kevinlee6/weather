export const SIGN_IN = 'SIGN_IN';
export const REGISTER = 'REGISTER';
export const EMAIL_REGEX = /.+@.+\..+/;
export const QUERY = 'query';
export const APPJSON = 'application/json';
export const IMPERIAL = 'imperial';
export const METRIC = 'metric';

export const UNITS = {
  [IMPERIAL]: {
    TEMP: '°F',
    WIND: 'mph',
  },
  [METRIC]: {
    TEMP: '°C',
    WIND: 'm/s',
  },
};

export const WEATHER = {
  SUNNY: 'sunny',
  RAIN: 'rain',
  CLOUDS: 'clouds',
  THUNDERSTORM: 'thunderstorm',
  MIST: 'mist',
};
