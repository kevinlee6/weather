import * as Yup from 'yup';

export default Yup.object().shape({
  query: Yup.string()
    .min(2)
    .required('Either city or zip code must be provided.'),
  country: Yup.string().min(2),
});
