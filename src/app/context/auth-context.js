import React, { useState } from "react";
import Spinner from "~components/spinner";
import api from "~lib/api";
import { useAuthedUser } from "~hooks/user";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [authedUser, { loading }] = useAuthedUser();
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (loading) {
    return <Spinner />;
  }

  const login = (payload) => {
    api
      .login({ user: payload })
      .then((response) => {
        setLoggedInUser(response);
      })
      .catch((e) => console.error(e));
  };
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{ user: loggedInUser || authedUser, login, logout }}
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
