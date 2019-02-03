import * as Yup from 'yup';

export default Yup.object({
  zip_code: Yup.string().matches(/\d{5}/),
  city: Yup.string().matches(/^[a-z][a-z\s.]+/i),
}).test(
  'at-least-one',
  'You must provide either zip code or city.',
  value => value.zip_code || value.city
);
