import React from 'react';

// Component to display the cart and total price
function Cart({ cart, removeFromCart, adjustQuantity, totalPrice }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Remove item button */}
            <button onClick={() => adjustQuantity(item.id, 1)}>+</button> {/* Increase quantity button */}
            <button onClick={() => adjustQuantity(item.id, -1)}>-</button> {/* Decrease quantity button */}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3> {/* Display total price of items in the cart */}
    </div>
  );
}

export default Cart;
