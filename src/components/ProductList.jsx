import React from 'react';
import Product from './Product'; // Import the Product component

// ProductList component to display a list of products
function ProductList({ products, addToCart }) {
  return (
    <div className="products-container">
      <h2>Products</h2> {/* Heading for the product list */}
      {products.map((product) => (
        <Product
          key={product.id} // Unique key for each product
          product={product} // Pass product data to the Product component
          addToCart={addToCart} // Pass the addToCart function
        />
      ))}
    </div>
  );
}

export default ProductList;