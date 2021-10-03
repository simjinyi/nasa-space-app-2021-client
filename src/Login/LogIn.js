import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import "./style.scss";

function LoginIn() {
  const history = useHistory();
  const [error, setError] = useState("");

  const login = async (details) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });

    const msg = await res.json();
    if (res.status === 200) {
      localStorage.setItem("token", msg.token);
      history.push("/landing");
    } else {
      setError(msg.error);
    }
  };

  //https://www.youtube.com/watch?v=tiAlSpyWIDs
  return (
    <div className="main-container">
      <div className="form">
        <LoginForm login={login} error={error} />
      </div>
    </div>
  );
}

export default LoginIn;
