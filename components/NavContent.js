'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from '../styles/modules/NavContent.module.css';

export default function NavContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      const maxWidth = 992;
      if (window.innerWidth >= maxWidth) {
        setIsVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      setIsLoading(false);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)} className={style.button}>
        <FontAwesomeIcon
          icon={faBars}
          width={20}
          height={20}
          className={style.icon}
        />
      </button>
      <div className={style.div + ' ' + (isVisible ? style.show : '')}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link
              href="/"
              className={style.a}
              onClick={() => setIsVisible(false)}
            >
              Home
            </Link>
          </li>
          <li className={style.li}>
            <Link
              href="/products"
              className={style.a}
              onClick={() => setIsVisible(false)}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
