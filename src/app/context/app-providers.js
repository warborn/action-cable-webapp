import React from "react";
import PropTypes from "prop-types";
import { AuthProvider } from "./auth-context";

const AppProviders = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

AppProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default AppProviders;
