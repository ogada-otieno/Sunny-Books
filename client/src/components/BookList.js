import React, { useEffect, useState} from 'react';
//import BookCard from './BookCard';

function BookList () {
    const [bookData, setBookData] = useState([]);


    useEffect(() => {
        fetch('https://api.npoint.io/c455d61b015acccebcad/data/')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));
    }, []);

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
    <div className="book-list-container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {bookData.map((book) => (
                <div className='col mb-3 mt-5'>
                    <div className='card'>
                        <div className="card d-flex-row" key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <img src={book.image_url} alt={book.title}/>
                        <p>Price: {book.price}</p>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                        {/* <BookCard 
                        key={book.id}
                        book={book}
                        /> */}
                     </div>
                    </div>

                </div>
                
            ))}
        </div>
    </div>
)
};

export default BookList