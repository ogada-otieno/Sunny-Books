
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAuthenticated, logoutUser }) {
  const [showGenres, setShowGenres] = useState(false);

  const handleGenresClick = () => {
    setShowGenres(!showGenres);
  };

  const handleLogoutClick = () => {
    logoutUser();
  };

  const genres = ['Mystery', 'Romance', 'Science Fiction', 'Fantasy', 'Horror'];

  return (
    <nav className="navbar">
      <div className="navbar__section">
        <Link to="/">Sunnybooks</Link>
        {isAuthenticated && <Link to="/my-account">My Account</Link>}
        <button onClick={handleGenresClick}>Genres</button>
        {showGenres && (
          <ul className="navbar__genres">
            {genres.map((genre) => (
              <li key={genre}>
                <Link to={`/genre/${genre}`}>{genre}</Link>
              </li>
            ))}
          </ul>
        )}
        <Link to="/books">Books</Link>
      </div>
      <div className="navbar__section">
        {isAuthenticated ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default Navbar;

