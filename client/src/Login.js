import React, { useState } from 'react';
import  './style.css'





const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPasswordClick = () => {
    // handle reset password logic here
  };

  const handleSignUpClick = () => {
    // handle sign-up redirect logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Log In</button>
      <a href="#" onClick={handleResetPasswordClick}>
        Reset Password
      </a>
      <a href="#" onClick={handleSignUpClick}>
        Sign Up
      </a>
    </form>
  );
};

export default Login;