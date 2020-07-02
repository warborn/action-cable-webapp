import React from "react";
import LoginPage from "~pages/login-page";
import { useAuth } from "~hooks/user";
import AuthenticatedApp from "./authenticated-app";
import { WebsocketProvider } from "./context/websocket-context";

import "./style.css";

function App() {
  const { user } = useAuth();

  return user ? (
    <WebsocketProvider>
      <AuthenticatedApp />{" "}
    </WebsocketProvider>
  ) : (
    <LoginPage />
  );
}

export default App;
