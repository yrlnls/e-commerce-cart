// src/components/Product.jsx
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
