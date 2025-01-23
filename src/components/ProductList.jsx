import React from 'react';
import Product from './Product'; 

// ProductList component to display a list of products
function ProductList({ products, addToCart }) {
  return (
    <div className="products-container">
      <h2>Products</h2> 
      {products.map((product) => (
        <Product
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;
