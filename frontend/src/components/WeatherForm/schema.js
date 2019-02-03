import * as Yup from 'yup';

export default Yup.object().shape(
  {
    zip_code: Yup.string().when('city', {
      is: city => !city,
      then: Yup.string()
        .required('Either zip code or city must be provided.')
        .matches(/\d{5}/, {
          message: 'Zip code must be 5 digits.',
        }),
    }),
    city: Yup.string().when('zip_code', {
      is: zip_code => !zip_code,
      then: Yup.string()
        .required('If both are entered, zip code will have priority.')
        .matches(/^[a-z][a-z\s.]+/i, {
          message: 'City must be at least two letters.',
        }),
    }),
  },
  ['zip_code', 'city']
);
