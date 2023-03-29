import React, {useEffect, useState} from 'react';


function BookCard ({book, is_admin}) {

    const [bookData, setBookData] = useState('');

    useEffect(() => {
        fetch('https://api.npoint.io/c455d61b015acccebcad/data/1')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));

    }, [book]);


    return (
        <div className="book-card">
            {bookData && (
                <>
                <h2>{bookData.title}</h2>
                <p>Author: {bookData.author}</p>
                <img src={bookData.image_url} alt={bookData.title}/>
                <p>Description: {bookData.description}</p>
                <p>Price: {bookData.price}</p>
                </>
            
                
            )}
        </div>
    )



}
export default BookCard