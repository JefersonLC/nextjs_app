import '../../styles/ProductsPage.css';
import { getProducts } from '../../services/api';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className=".card">
          <div>
            <img src={product.photo} width={100} height={100} alt="xd" />
          </div>
          <div className="card-body">
            <h5 className="card-body-title">{product.name}</h5>
            <div className="card-body-info">
              <span>Stock: {product.stock}</span>
              <span>Precio: S/. {product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
