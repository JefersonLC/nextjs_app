'use client';

import { Form, Formik, Field } from 'formik';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { loginSchema } from '../schemas/authSchemas';
import AuthInput from './AuthInput';
import { useLoginStore } from '../store/loginStore';
import { loginUser } from '../services/api';

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
    isField: true,
  },
  {
    icon: faLock,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    isField: true,
  },
];

export default function LoginForm() {
  const { setError } = useLoginStore();

  return (
    <Formik
      initialValues={loginValues}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        try {
          await loginUser(values);
        } catch (err) {
          const message = err.toString();
          setError(message);
        }
      }}
    >
      <Form className="form">
        {loginInputs.map((input, index) => (
          <AuthInput key={index} icon={input.icon} name={input.name}>
            {input.isField ? (
              <Field
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                className="input"
              />
            ) : (
              <input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                className="input"
              />
            )}
          </AuthInput>
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
