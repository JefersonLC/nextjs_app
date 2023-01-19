import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field } from 'formik';

export default function AuthInput({ icon, name, type, placeholder }) {
  return (
    <div className="form-control">
      <div className="form-input">
        <FontAwesomeIcon
          icon={icon}
          className="form-input-icon"
          width={20}
          height={20}
        />
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      </div>
      <ErrorMessage
        name={name}
        component="span"
        className="form-control-error"
      />
    </div>
  );
}
