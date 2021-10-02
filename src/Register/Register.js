import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Register() {
  const history = useHistory();
  const [error, setError] = useState("");

  const register = async (details) => {
    if (details.password.length < 4) {
      setError("Password needs to be at least 4 characters long!");
    } else if (details.name.length === 0 || details.email.length === 0) {
      setError("Name and email cannot be empty");
    } else {
      await axios.post("http://localhost:8080/register", details);
      history.push("/Landing");
    }
  };

  return (
    <div className="main-container">
      <div className="form">
        <RegisterForm register={register} error={error} />
      </div>
    </div>
  );
}
export default Register;
