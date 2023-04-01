import { useState, useEffect } from "react";
import axios from "axios";
import BooksDetails from "./BooksDetails";
import "./book.css";

function Book() {
  const [books, setBooks] = useState([]);

  const API = "https://example-data.draftbit.com/books?_limit=20";

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BooksDetails key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Book;
