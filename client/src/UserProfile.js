import React, { useState } from 'react';

function UserProfile() {
  // Initialize state for user data


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [books, setBooks] = useState([]);

  // Handler functions for updating user data
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const newBook = event.target.elements.book.value;
    setBooks([...books, newBook]);
    event.target.reset();
  };

  // Render the user profile form
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        
        <div>
          <label htmlFor="book">Add Book:</label>
          <input type="text" id="book" />
          <button onClick={handleAddBook}>Add</button>
        </div>
      </form>
      <div>
        <h3>Books Purchased:</h3>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
