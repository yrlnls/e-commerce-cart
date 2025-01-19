// src/components/ProductList.jsx
import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
