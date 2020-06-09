import React from "react";
import PropTypes from "prop-types";
import { AuthProvider } from "./context/auth-context";
import { UserProvider } from "./context/user-context";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default AppProviders;
