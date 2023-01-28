'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage } from 'formik';

export default function AuthInput({ icon, name, children }) {
  return (
    <div className="form-control">
      <div className="form-input">
        <FontAwesomeIcon
          icon={icon}
          className="form-input-icon"
          width={20}
          height={20}
        />
        {children}
      </div>
      <ErrorMessage
        name={name}
        component="span"
        className="form-control-error"
      />
    </div>
  );
}
