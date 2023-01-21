import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/modules/Alert.module.css';
import { useLoginStore } from '../store/loginStore';
import { useEffect } from 'react';

export default function Alert({ message }) {
  useEffect(() => {
    setTimeout(() => {
      removeError();
    }, 3500);
  }, []);

  const { removeError } = useLoginStore();
  return (
    <div className={style.divAlert}>
      <span className={style.divIcon}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <p className={style.divMessage}>{message}</p>
      <div onClick={removeError} className={style.divButton}>
        <button className={style.button}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
