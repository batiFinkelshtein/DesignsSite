import React, { useState } from 'react';
import "../css/orderForm.css"
const OrderForm = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    console.log(`הזמנה של ${quantity} יחידות של ${item.description}`);
  };

  return (
    <div className="order-form">
      <h2>{item.description}</h2>
      <img src={item.original} alt={item.description} />
      <p>מחיר: {item.price}₪</p>
      <label>כמות:</label>
      <input 
        type="number" 
        value={quantity} 
        min="1" 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <button onClick={handleOrder}>הזמן עכשיו</button>
    </div>
  );
};

export default OrderForm;
