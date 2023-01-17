'use client';

import Image from 'next/image'
import style from '../styles/modules/CardProduct.module.css'

export default function CardProduct({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={style.card}>
          <div>
            <Image src="/dasdsadsd" width={100} height={100} alt="xd"/>
          </div>
          <div className={style.body}>
            <h5 className={style.h5}>{product.name}</h5>
            <div className={style.div}>
              <span>Stock: {product.stock}</span>
              <span>Precio: S/. {product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
