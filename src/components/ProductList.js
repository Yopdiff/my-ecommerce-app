import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
        // <div key={product.id}>
        // <h2>{product.name}</h2>
        // <p>{product.description}</p>
        // <p>${product.price}</p>
        // <button onClick={() => addToCart(product)}>Add to Cart</button>
        // </div>
      ))}
    </div>
  );
}

export default ProductList;
