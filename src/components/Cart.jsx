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
            <button onClick={() => removeFromCart(item.id)}>Remove</button> 
            <button onClick={() => adjustQuantity(item.id, 1)}>+</button> 
            <button onClick={() => adjustQuantity(item.id, -1)}>-</button> 
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3> 
    </div>
  );
}

export default Cart;
