import React, { useState, useEffect } from 'react';
import { products } from './data/products'; 
import './App.css'; 

function App() {
  // State for the cart
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')); 
    return savedCart || []; 
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // State for the product list
  const [productsList, setProductsList] = useState(products);



  // Add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Adjust the quantity of a product in the cart
  const adjustQuantity = (id, amount) => {
    if (amount < 0) {
      const product = cart.find((item) => item.id === id);
      if (product.quantity + amount < 0) {
        // Prevent negative quantities
        alert('Quantity cannot be negative. Please remove the item from the cart instead.');
        return;
      }
    }
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
    );
  };

 

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      <h1>Simple E-Commerce Cart</h1>
      <div className="search-sort-container">
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search products" />
      </div>
      {productsList.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="products-container">
          {productsList.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <h2>Cart</h2>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} - ${item.price} x {item.quantity}
                </span>
                <div className="cart-buttons">
                  <button onClick={() => adjustQuantity(item.id, -1)}>-</button>
                  <button onClick={() => adjustQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
