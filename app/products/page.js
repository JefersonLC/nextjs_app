import '../../styles/ProductsPage.css';
import { getProducts } from '../../services/api';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            className="card-image"
            src={product.photo.replace('localhost', '192.168.0.8')}
            alt={'Producto: ' + product.name}
          />
          <div className="card-body">
            <h5 className="card-body-title">{product.name}</h5>
            <div className="card-body-info">
              <span>Stock: {product.stock}</span>
              <span>Precio: S/. {product.price}</span>
              <span>Categoria: {product.category.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
