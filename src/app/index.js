import React from "react";
import LoginPage from "~pages/login-page";
import { useAuth } from "~hooks/user";
import AuthenticatedApp from "./authenticated-app";

import "./style.css";

function App() {
  const { user } = useAuth();

  return user ? <AuthenticatedApp /> : <LoginPage />;
}

export default App;
