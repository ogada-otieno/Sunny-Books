import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Register from "./pages/Register";
import Checkout from "./pages/checkout/Checkout";
import BookDetails from "./pages/BookDetails/BookDetails";
import Confirmation from "./pages/checkout/Confirmation";
import Navbar from "./pages/global/Navbar";
import CartMenu from "./pages/global/CartMenu";
import Footer from "./pages/global/Footer";

// starts each page you navigate to at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login user
    fetch("/me", {
      method: "GET",
      // credentials: "same-origin", // or 'same-origin'
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((user) => {
            sessionStorage.setItem("user", user);
            setUser(user);
          })
          .catch((err) => console.log(err));
      }
    });
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <div className="app">
      <Navbar user={user} onLogout={handleLogout} />
      <ScrollToTop />
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login setUser onLogin={handleLogin} />}
        />
        <Route
          exact
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route
          exact
          path="/"
          element={<Home user={user} onLogout={handleLogout} />}
        />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout/success" element={<Confirmation />} />
        <Route exact path="book/:BookId" element={<BookDetails />} />
      </Routes>
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;
