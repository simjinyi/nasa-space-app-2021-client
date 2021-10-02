import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  return (
    <div className="form-inner">
      <h2>Login Page</h2>
      {error && <div className="text-danger">{"*" + error}</div>}
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <div className="mb-5">
        <button
          onClick={() => {
            login(details);
          }}
        >
          LOGIN
        </button>
      </div>
      <div>
        Didn't have an account?{" "}
        <Link to={{ pathname: "/register" }}>Register now</Link>
      </div>
    </div>
  );
}

export default LoginForm;
