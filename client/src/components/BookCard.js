import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookCard ({ book, onUpdate, onDelete }) {
   
    const [bookData, setBookData] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [updatedBookData, setUpdatedBookData] = useState({
        title: '',
        author: '',
        image_url: '',
        description: '',
        publisher: '',
        year_of_publication: '',
        price: '',
    });

    useEffect(() => {
        axios.get(`https://sunny-books-server.onrender.com/books/${book.id}`)
            .then(response => {
                setBookData(response.data);
            })
            .catch(error => console.log(error));
    }, [book.id]);

    const handleDelete = () => {
        axios.delete(`https://sunny-books-server.onrender.com/books/${book.id}`)
            .then(response => {
                if (response.status === 204) {
                    onDelete(book.id);
                    console.log('Book deleted successfully');
                } else {
                    console.log('Failed to delete book');
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleUpdate = event => {
        event.preventDefault();
        axios
          .patch(`https://sunny-books-server.onrender.com/books/${book.id}`, updatedBookData)
          .then(response => {
            // Updating the state
            const updatedBook = response.data;
            onUpdate(updatedBook);
            setIsEditing(false);
          })
          .catch(error => {
            console.log(error);
          });
      };

      const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdatedBookData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.patch(`https://sunny-books-server.onrender.com/books/${book.id}`, updatedBookData)
            .then(response => {
                onUpdate(response.data);
                setIsEditing(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleAddToCart = () => {
        if (!bookData) {
            return;
        }

        const newItem = {
            title: bookData.title,
            price: bookData.price,
            quantity: 1,
        };
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let itemIndex = -1;
        
        // Check if item is already in cart
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === newItem.title) {
                itemIndex = i;
                break;
            }
        }
        
        if (itemIndex === -1) {
            // Item is not in cart, add it
            cart.push(newItem);
        } else {
            // Item is already in cart, update quantity
            cart[itemIndex].quantity++;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Book added to cart successfully');
    };

    return (
        <div className="book-card">
            {bookData && !isEditing && (
                <>
                    <h2>{bookData.title}</h2>
                    <p>Author: {bookData.author}</p>
                    <img src={bookData.image_url} alt="book"/>
                    <p>Description: {bookData.description}</p>
                    <p>Price: {bookData.price}</p>
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                    <button className="update-button" onClick={handleUpdate}>Update</button>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                </>
            
                
            )};
           {isEditing && (
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title:</label>
    <input 
      type="text" 
      id="title" 
      value={updatedBookData.title} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, title: event.target.value})} 
      required 
    />

    <label htmlFor="author">Author:</label>
    <input 
      type="text" 
      id="author" 
      value={updatedBookData.author} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, author: event.target.value})} 
      required 
    />

    <label htmlFor="image_url">Image URL:</label>
    <input 
      type="url" 
      id="image_url" 
      value={updatedBookData.image_url} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, image_url: event.target.value})} 
      required 
    />

    <label htmlFor="description">Description:</label>
    <textarea 
      id="description" 
      value={updatedBookData.description} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, description: event.target.value})} 
      required 
    />

    <label htmlFor="publisher">Publisher:</label>
    <input 
      type="text" 
      id="publisher" 
      value={updatedBookData.publisher} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, publisher: event.target.value})} 
      required 
    />

    <label htmlFor="price">Price:</label>
    <input 
      type="number" 
      id="price" 
      value={updatedBookData.price} 
      onChange={(event) => setUpdatedBookData({...updatedBookData, price: event.target.value})} 
      required 
    />

    <button type="submit" onClick={handleInputChange}>Update Book</button>
    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
  </form>
)}

            </div>


    )


}
export default BookCard