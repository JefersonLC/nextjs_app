'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginSchema } from '../schemas/authSchemas';

const loginValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  return (
    <Formik
      initialValues={loginValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field name="email" />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
