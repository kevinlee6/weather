import * as Yup from 'yup';

export default Yup.object().shape(
  {
    zip_code: Yup.string().when('city', {
      is: city => !city,
      then: Yup.string().required('Either city or zip code must be provided.'),
    }),
    city: Yup.string().when('zip_code', {
      is: zip_code => !zip_code,
      then: Yup.string()
        .required('Either city or zip code must be provided.')
        .matches(/^[a-z][a-z\s.]+/i, {
          message: 'City must be at least two letters.',
        }),
    }),
  },
  ['zip_code', 'city']
);
