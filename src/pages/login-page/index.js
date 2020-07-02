import React from "react";
import LoginForm from "~components/login-form";
import Wave from "~components/wave";
import { useAuth } from "../../app/context/auth-context";

import "./style.css";

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <div className="login-page">
      <div className="wave-container">
        <Wave />
      </div>
      <LoginForm onSubmit={login} />
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
