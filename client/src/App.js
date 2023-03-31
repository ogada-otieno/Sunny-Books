import './style.css';
import SignUp from "./SignUp";
import { Routes, Route } from 'react-router-dom'
import Login from "./Login";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Purchase Book" element={<UserProfile />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
