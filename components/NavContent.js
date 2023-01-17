'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from '../styles/modules/NavContent.module.css';

export default function NavContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        setVisible(false);
      }
    });
  });

  return (
    <>
      <button onClick={() => setVisible(!visible)} className={style.button}>
        <FontAwesomeIcon icon={faBars} className={style.icon} />
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
