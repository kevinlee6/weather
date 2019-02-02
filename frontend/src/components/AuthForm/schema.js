import * as Yup from 'yup';

// could probably create base schema and inherit from it

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .max(254, 'Can not exceed 254 characters')
    .email('Must be valid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .max(254, 'Can not exceed 254 characters')
    .email('Must be valid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  password_confirmation: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});
