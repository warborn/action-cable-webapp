import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" defaultValue="" id="email" required />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          defaultValue=""
          id="password"
          required
        />
      </div>
      <button type="submit" className="submit">
        Log In
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
