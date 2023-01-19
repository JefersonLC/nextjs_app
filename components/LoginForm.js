'use client';

import { Form, Formik } from 'formik';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { loginSchema } from '../schemas/authSchemas';
import AuthInput from './AuthInput';

const loginValues = {
  email: '',
  password: '',
};

const loginInputs = [
  {
    icon: faEnvelope,
    name: 'email',
    type: 'text',
    placeholder: 'Email',
  },
  {
    icon: faLock,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];

export default function LoginForm() {
  return (
    <Formik
      initialValues={loginValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="form">
        {loginInputs.map((input, index) => (
          <AuthInput
            key={index}
            icon={input.icon}
            name={input.name}
            type={input.name}
            placeholder={input.placeholder}
          />
        ))}
        <div className="form-control form-help">
          <p>Yo don't have an account?</p>
          <p>Don't remember your password?</p>
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </Form>
    </Formik>
  );
}
