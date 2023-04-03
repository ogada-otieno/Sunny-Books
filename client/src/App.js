import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Register from "./pages/Register";
import Checkout from "./pages/checkout/Checkout";
import BookDetails from "./pages/BookDetails/BookDetails";
import Confirmation from "./pages/checkout/Confirmation";
import Navbar from "./pages/global/Navbar";
import CartMenu from "./pages/global/CartMenu";
import Footer from "./pages/global/Footer";
import NotFound from "./pages/global/NotFound";
import PrivateRoutes from "./components/PrivateRoutes";

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
        {/* <Route exact element={<PrivateRoutes user={user} />}>
          <Route exact path="/checkout/success" element={<Confirmation />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Route> */}

        <Route
          exact
          path="/login"
          element={
            !user ? (
              <Login setUser onLogin={handleLogin} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            !user ? (
              <Register onRegister={handleRegister} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          exact
          path="/"
          element={<Home user={user} />}
        />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout/success" element={<Confirmation />} />
        <Route exact path="book/:bookId" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CartMenu user={user} />
      <Footer />
    </div>
  );
}

export default App;
