import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const style = { color: "black", fontSize: "1.5em" };
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <div className="navigate">
          <Link to="/">Home</Link>
          <Link to="/books">Buy Books</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <FaShoppingCart style={style} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
