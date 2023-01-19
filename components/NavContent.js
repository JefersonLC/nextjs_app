'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from '../styles/modules/NavContent.module.css';

export default function NavContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      const maxWidth = 992;
      if (window.innerWidth >= maxWidth) {
        setVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button onClick={() => setVisible(!visible)} className={style.button}>
        <FontAwesomeIcon
          icon={faBars}
          width={20}
          height={20}
          className={style.icon}
        />
      </button>
      <div className={style.div + ' ' + (visible ? style.show : '')}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link
              href="/"
              className={style.a}
              onClick={() => setVisible(false)}
            >
              Home
            </Link>
          </li>
          <li className={style.li}>
            <Link
              href="/products"
              className={style.a}
              onClick={() => setVisible(false)}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
