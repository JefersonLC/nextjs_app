'use client';

export default function Products({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
}
