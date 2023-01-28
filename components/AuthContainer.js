'use client'

import { useLoginStore } from '../store/loginStore';
import Alert from './Alert';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthContainer({ isLogin }) {
  const { error } = useLoginStore();
  return (
    <>
      {error && <Alert message={error} />}
      <div className="form-container">
        <div className="form-header">{isLogin ? 'LOGIN' : 'REGISTER'}</div>
        <div className="form-body">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </>
  );
}
