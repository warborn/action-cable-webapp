import React from "react";
import HomePage from "~pages/home-page";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AuthenticatedApp = () => {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={false} />
    </>
  );
};

export default AuthenticatedApp;
