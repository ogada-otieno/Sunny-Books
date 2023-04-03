import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      }
    });
  }

  return (
    <div>
      <form className="login" onSubmit={handleLogin}>
        <div>
          <h3>Log In</h3>

          <label>Email address:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button>Log in</button>
        </div>
        <div>
          <Link to="/register">Don't have an account? Sign up</Link> 
        </div>
      </form>
    </div>
  );
};

export default Login;
