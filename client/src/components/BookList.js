import React, { useEffect, useState} from 'react';
import BookCard from './BookCard';

function BookList () {
    const [bookData, setBookData] = useState([]);


    useEffect(() => {
        fetch('https://api.npoint.io/c455d61b015acccebcad/data/')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));
    }, []);


return (
    <div className="book-list-container">
        <div className="book-cards">
            {bookData.map((book) => (
                <div className="book-card" key={book.id}>
                    <BookCard 
                    key={book.id}
                    book={book}
                    />
                </div>
            ))}
        </div>
    </div>
)
};

export default BookList