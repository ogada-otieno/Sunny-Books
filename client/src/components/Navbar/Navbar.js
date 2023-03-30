
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
// import "./Navbar.css"


// function Navbar () {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     // perform logout action
//   };

//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Link to="/" className="brand-logo">
//           Sunny Books
//         </Link>

//         <ul className="right">
//           <li><Link to="/">Home</Link></li>
          
//           {isLoggedIn ?
//             <>
//               <li><Link to="/my-account">My Account</Link></li>
//               <li><button onClick={handleLogout}>Logout</button></li>
//             </>
//             :
//             <>
//               <li><Link to="/login">Login</Link></li>
//               <li><Link to="/signup">Signup</Link></li>
//             </>
//           }

//           <li><input type="text" placeholder="Search"/></li>

//           <li><Link to="/books">Books</Link></li>

//           <li className="dropdown">
//           <a href="#">Link Text</a>
//             <ul className="dropdown-menu">
//               <li><Link to="/genre/action">Action</Link></li>
//               <li><Link to="/genre/comedy">Comedy</Link></li>
//               <li><Link to="/genre/drama">Drama</Link></li>
//               <li><Link to="/genre/fantasy">Fantasy</Link></li>
//               <li><Link to="/genre/horror">Horror</Link></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




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
        <Link to="/">Home</Link>
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

