import React from "react";
import { useUser } from "~hooks/user";

const AuthenticatedApp = () => {
  const user = useUser();
  return <div>Logged In as {user.email}!</div>;
};

export default AuthenticatedApp;
