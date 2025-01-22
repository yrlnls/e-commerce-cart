import React from 'react';

// Product component to display a single product
function Product({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3> {/* Display product name */}
      <p>${product.price}</p> {/* Display product price */}
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to cart button */}
    </div>
  );
}

export default Product;
