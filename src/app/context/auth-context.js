import React from "react";
import Spinner from "~components/spinner";
import api from "~lib/api";
import { useAuthedUser } from "~hooks/user";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [authedUser, { loading }, setAuthedUser] = useAuthedUser();

  if (loading) {
    return <Spinner />;
  }

  const login = (payload) => {
    api
      .login({ user: payload })
      .then((response) => {
        setAuthedUser(response);
      })
      .catch((e) => console.error(e));
  };
  const logout = () => {
    api
      .logout()
      .then(() => setAuthedUser(null))
      .catch((e) => console.error(e));
  };

  return (
    <AuthContext.Provider
      value={{ user: authedUser, login, logout }}
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
