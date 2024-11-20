import React, { useState } from "react";
import cucumber from './assets/cucumber.png'; 
import banana from './assets/banana.jpg';
import kiwi from './assets/kiwi.png';
import orange from './assets/orange.jpg';
import grapes from './assets/grapes.jpg';

const items = [
  { id: 1, name: "Grapes", price: 100.00, image: grapes },
  { id: 2, name: "Oranges", price: 10.00, image: orange },
  { id: 3, name: "Kiwis", price: 20.00, image: kiwi },
  { id: 4, name: "Bananas", price: 10.00, image: banana },
  { id: 5, name: "Cucumbers", price: 20.00, image: cucumber }, 
];

const Grocery = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  const checkout = () => {
    if (paidAmount <= 0) {
      alert("Please enter a valid amount paid.");
      return;
    }
    
    const change = paidAmount - totalPrice;
    if (change < 0) {
      alert("Insufficient payment!");
      return;
    }
    
    setReceipt({ items: cart, totalPrice, paidAmount, change });
    resetCart();
  };

  const resetCart = () => {
    setCart([]);
    setTotalPrice(0);
    setPaidAmount(0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Grocery Shop ni Kikay!</h1>
      <h4>Available Items:</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.image && <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />}
            {item.name} - P{item.price.toFixed(2)}
            <button onClick={() => addItemToCart(item)} style={{ marginLeft: "10px" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h4>Cart Items:</h4>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - P{item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h4>Total Price: P{totalPrice.toFixed(2)}</h4>
      <input
        type="number"
        placeholder="Enter amount paid"
        value={paidAmount}
        onChange={(e) => setPaidAmount(parseFloat(e.target.value) || 0)} // Default to 0 if NaN
        style={{ marginRight: "10px" }}
      />
      <button onClick={checkout}>Checkout</button>

      {receipt && (
        <div style={{ marginTop: "20px" }}>
          <h2>Receipt</h2>
          <h3>Items Purchased:</h3>
          <ul>
            {receipt.items.map((item, index) => (
              <li key={index}>
                {item.name} - P{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total Price: P{receipt.totalPrice.toFixed(2)}</p>
          <p>Amount Paid: P{receipt.paidAmount.toFixed(2)}</p>
          <p>Change: P{receipt.change.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Grocery;