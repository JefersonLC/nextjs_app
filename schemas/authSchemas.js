import * as Yup from 'yup';

const email = Yup.string()
  .email('Incorrect email')
  .max(50, 'Too long')
  .required('Email is required');
const password = Yup.string()
  .min(8, 'Too short')
  .required('Password is required');

export const loginSchema = Yup.object().shape({
  email,
  password,
});

export const registerSchema = Yup.object().shape({});
