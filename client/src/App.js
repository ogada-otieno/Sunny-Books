import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

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
      credentials: "same-origin", // or 'same-origin'
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
      </Routes>
    </div>
  );
}

export default App;
