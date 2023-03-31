import React from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <h1>Sunny Books</h1>
      
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
