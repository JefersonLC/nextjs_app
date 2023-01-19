import * as Yup from 'yup';

// Properties
const name = Yup.string().max(20, 'Too long').required('Name is required');

const lastname = Yup.string()
  .max(20, 'Too long')
  .required('Lastname is required');

const email = Yup.string()
  .email('Incorrect email')
  .max(50, 'Too long')
  .required('Email is required');

const password = Yup.string()
  .min(8, 'Too short')
  .required('Password is required');

const repeat_password = Yup.string()
  .equals([Yup.ref('password')], 'Passwords do not match')
  .required('Password confirmation required');

// Schemas
export const loginSchema = Yup.object().shape({
  email,
  password,
});

export const registerSchema = Yup.object().shape({
  name,
  lastname,
  email,
  password,
  repeat_password,
});
