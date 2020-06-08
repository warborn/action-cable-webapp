import React from "react";
import LoginForm from "./components/login-form";
import Wave from "./components/wave";

import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="wave-container">
        <Wave />
      </div>
      <LoginForm
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </div>
  );
}

export default App;
