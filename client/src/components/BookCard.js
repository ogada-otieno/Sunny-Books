import React, {useEffect, useState} from 'react';


function BookCard ({book, onUpdate}) {

    const [bookData, setBookData] = useState('');

    useEffect(() => {
        fetch('https://sunny-books-server.onrender.com/books/:id')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));

    }, [book]);

    const handleDelete = () => {
        fetch('', {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok) {
                //update UI to delete BookCard

                console.log('Book Deleted Successfully');
            } else {
                console.log('Failed to Delete Book');
            }
        })
        .catch(error => {
            console.log(error);

        });

    };

    const handleUpdate = () => {
        fetch('', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: bookData.id,
                title: bookData.title,
                author: bookData.author,
                image_url: bookData.image_url,
                description: bookData.description,
                publisher: bookData.publisher,
                year_of_publication: bookData.year_of_publication,
                price: bookData.price,
            }),
        })
        .then((response) => {
            if (response.ok) {
                //updating the state
                
                return response.json();
            } else {
                //error condition 

                return response.json().then((data) => {
                    throw new Error(data.error);

                });
            }
        })
        .then((updatedBook) => {
            onUpdate(updatedBook); 
        })
        .catch((error) => {
            //other errors
            console.log(error);
        })
    }

    const handleAddToCart = () => {
        const newItem = {
          title: bookData.title,
          price: bookData.price,
          quantity: 1
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
            {bookData && (
                <>
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <img src={book.image_url} alt={book.title}/>
                <p>Description: {book.description}</p>
                <p>Price: {book.price}</p>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                <button className="update-button" onClick={handleUpdate}>Update</button>
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                </>
            
                
            )}
        </div>
    )



}
export default BookCard