import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ register, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  return (
    <div className="form-inner">
      <h2>Register Form</h2>
      {error && <div className="text-danger">{"*" + error}</div>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
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
        <button className="" onClick={() => register(details)}>
          REGISTER
        </button>
      </div>
      <div>
        Already have an account?{" "}
        <Link to={{ pathname: "/login" }}>Login now</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
