import '../../styles/AuthPage.css'

export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className='form-container'>
        {children}
      </div>
    </div>
  );
}
