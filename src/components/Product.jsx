import React from 'react';

// Product component to display a single product
function Product({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3> 
      <p>${product.price}</p> 
      <button onClick={() => addToCart(product)}>Add to Cart</button> 
    </div>
  );
}

export default Product;
