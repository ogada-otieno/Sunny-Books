import React, { useState } from 'react';

function UserProfile() {
  // Initialize state for user data


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newBook, setNewBook] = useState('');
  const [books, setBooks] = useState([]);

  // Handler functions for updating user data
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBookChange =(event) => {
    setNewBook(event.target.value);
  }

  const handleAddBook = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook('')
  };

  // Render the user profile form
  return (
    <div className='purchase'>
      <h2>Buy a Book</h2>
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
          <input type="text" id="book" value={newBook} onChange={handleBookChange}/>
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
