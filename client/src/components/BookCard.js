import React, {useEffect, useState} from 'react';


function BookCard ({book, is_admin}) {

    const [bookData, setBookData] = useState('');

    useEffect(() => {
        fetch('https://api.npoint.io/c455d61b015acccebcad/data/3')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));

    }, [book]);

    const handleDelete = () => {
        fetch('https://api.npoint.io/c455d61b015acccebcad/data/', {
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
                title: bookData.title,
                author: bookData.author,
                image_url: bookData.image_url,
                description: bookData.description,
                publisher: bookData.publisher,
                year_of_publication: bookData.year_of_publication,
                price: bookData.price,
            }),
        })
        // .then((response) => {
        //     if (response.ok) {
        //         //updating the state

        //         return response.json();
        //     } else {
        //         //error condition 

        //         return response.json().then((data) => {
        //             throw new Error(data.error);

        //         });
        //     }
        // })
        // .then((updatedBook) => {
        //     this.props.onUpdate(updatedBook); 
        // })
        // .catch((error) => {
        //     //other errors
        //     console.log(error);
        // })
    }
            
    


    return (
        <div className="book-card">
            {bookData && (
                <>
                <h2>{bookData.title}</h2>
                <p>Author: {bookData.author}</p>
                <img src={bookData.image_url} alt={bookData.title}/>
                <p>Description: {bookData.description}</p>
                <p>Price: {bookData.price}</p>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                <button className="update-button" onClick={handleUpdate}>Update</button>
                </>
            
                
            )}
        </div>
    )



}
export default BookCard