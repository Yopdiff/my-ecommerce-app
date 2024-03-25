import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';

function ProductList({ addToCart }) {
  return (
    <div>
      {product.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
