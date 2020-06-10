import React from "react";
import PropTypes from "prop-types";
import { AuthProvider } from "./context/auth-context";
import { UserProvider } from "./context/user-context";
import { WebsocketProvider } from "./context/websocket-context";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <WebsocketProvider>
        <UserProvider>{children}</UserProvider>
      </WebsocketProvider>
    </AuthProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default AppProviders;
