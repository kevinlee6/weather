export const SIGN_IN = 'signin';
export const REGISTER = 'register';
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
