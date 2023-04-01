import React from "react";
import "./book.css";

function BooksDetails({ book }) {
  return (
    <div>
      <head>
        <title>{book.title}</title>
      </head>

      <body>
        <div class="wrapper">
          <div class="product-img">
            <img
              src={book.image_url}
              style={{ height: "420", width: "327" }}
              alt={book.title}
            />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>{book.title}</h1>
              <h2>by {book.authors}</h2>
              <p>{book.description}</p>
            </div>
            <div class="product-price-btn">
              <p>
                <span>{book.num_pages}</span>Ksh
              </p>
              <button type="button">buy now</button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default BooksDetails;
