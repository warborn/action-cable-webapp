import React, { useState } from "react";
import Spinner from "~components/spinner";
import api from "~lib/api";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  let gettingUserData = false;

  if (gettingUserData) {
    return <Spinner />;
  }

  const login = (payload) => {
    api
      .login({ user: payload })
      .then((response) => {
        setUser(response);
      })
      .catch((e) => console.error(e));
  };
  const logout = () => {};

  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
