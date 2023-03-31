import React, { useState } from 'react';
import "./cart.css"

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (title, author, price) => {
    setItems([...items, { title, author, price, quantity: 1 }]);
    setTotal(total + price);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    const removedItem = newItems.splice(index, 1)[0];
    setItems(newItems);
    setTotal(total - removedItem.price * removedItem.quantity);
  };

  const updateQuantity = (index, quantity) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
    setTotal(
      newItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(index, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}>Total:</td>
              <td>${total.toFixed(2)}</td>
              <td>
                <button onClick={() => setItems([])}>Clear Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <h2>Books</h2>
      <ul>
        <li>
          <strong>Title:</strong> "The Great Gatsby"
          <button onClick={() => addItem("The Great Gatsby", "F. Scott Fitzgerald", 9.99)}>Add to Cart</button>
        </li>
        <li>
          <strong>Title:</strong> "To Kill a Mockingbird"
          <button onClick={() => addItem("To Kill a Mockingbird", "Harper Lee", 7.99)}>Add to Cart</button>
          <button>Continue Shopping</button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
