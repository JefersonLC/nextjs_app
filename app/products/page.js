import Products from '../../components/Products';

async function getProducts() {
  const res = await fetch(
    'https://ts-api-kqij.onrender.com/api/store/products'
  );
  const products = await res.json();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <Products products={products} />
    </div>
  );
}
