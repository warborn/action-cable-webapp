import React from "react";
import LoginForm from "./components/login-form";
import Wave from "./components/wave";
import api from "./lib/api";

import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="wave-container">
        <Wave />
      </div>
      <LoginForm
        onSubmit={(values) => {
          api
            .login({ user: values })
            .then((response) => {
              console.log(response);
            })
            .catch((e) => console.error(e));
        }}
      />
    </div>
  );
}

export default App;
