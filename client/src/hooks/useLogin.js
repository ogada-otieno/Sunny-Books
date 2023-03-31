import { useState } from "react";
import { login } from "../services/webApis";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // login payload
    const loginPayload = {
      email,
      password,
    };

    // hit the endpoint
    try {
      const response = await login(loginPayload);
      // destructure the user & token
      const {
        data: { user },
      } = response;
      // set the user and token to the localstorage
    //   localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // redirect the user to the protected page
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { email, setEmail, password, setPassword, handleLogin };
};
