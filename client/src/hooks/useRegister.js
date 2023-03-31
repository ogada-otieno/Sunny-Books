import { useState } from "react";
import { register } from "../services/webApis";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    const registerPayload = {
      name,
      password,
      email,
    //   password_confirmation: passwordConfirmation
    };

    try {
      // hit the register service
      // use a promise to handle the response
      const response = await register(registerPayload);

      // get the data object

      const { data } = response;

      if (data) {
        // redirect the user to login screen
        navigate("/");
        // reset the registration fields
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  };
};