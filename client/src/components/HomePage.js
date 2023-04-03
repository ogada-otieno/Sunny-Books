import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/031a9968ffebe81bd777/data/")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="home-content">
      <h2 className="home-title">Welcome to Sunny Books</h2>
    <div id="carouselExample" className="carousel slide">
        <Link to="/books">
      <button className = "btn-danger" type="button">View Books
        </button>
        </Link>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={item.index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={item.cover} className="d-block w-100" alt={item.quote} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default HomePage;