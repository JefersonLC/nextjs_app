import CardProduct from '../../components/CardProduct';
import '../../styles/ProductsPage.css';

async function getProducts() {
  const res = await fetch(
    'https://ts-api-kqij.onrender.com/api/store/products'
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
      <CardProduct products={products} />
    </div>
  );
}
