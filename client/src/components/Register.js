import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

function Register() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="reg">
      {currentForm === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default Register;
