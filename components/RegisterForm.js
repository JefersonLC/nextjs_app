'use client';

import { Form, Formik, Field } from 'formik';
import {
  faUser,
  faUserPlus,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { registerSchema } from '../schemas/authSchemas';
import AuthInput from './AuthInput';
import { useState, useRef } from 'react';

const registerValues = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  repeat_password: '',
  image: null,
};

const registerInputs = [
  {
    icon: faUser,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
  },
  {
    icon: faUserPlus,
    name: 'lastname',
    type: 'text',
    placeholder: 'Lastname',
  },
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
  {
    icon: faLock,
    name: 'repeat_password',
    type: 'password',
    placeholder: 'Confirm password',
  }
];

export default function RegisterForm() {
  let first = useRef()
  return (
    <Formik
      initialValues={registerValues}
      // validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(first.current.files);
      }}
    >
      <Form className="form" encType="multiplat/form-data">
        {/* {registerInputs.map((input, index) => (
          <AuthInput
            key={index}
            icon={input.icon}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))} */}
        <input ref={first} name='image' type='file' />
        <div className="form-control form-help">
          <p>Are you already registered?</p>
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
      </Form>
    </Formik>
  );
}
