import Image from 'next/image'
import '../../styles/ProductsPage.css';

async function getProducts() {
  const res = await fetch(
    'https://ts-api-kqij.onrender.com/api/store/products',
    { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className='.card'>
          <div>
            <Image src="/dasdsadsd" width={100} height={100} alt="xd"/>
          </div>
          <div className='card-body'>
            <h5 className='card-body-title'>{product.name}</h5>
            <div className='card-body-info'>
              <span>Stock: {product.stock}</span>
              <span>Precio: S/. {product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
