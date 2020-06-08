import React from "react";
import LoginForm from "./components/login-form";

function App() {
  return (
    <div className="app">
      <LoginForm
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </div>
  );
}

export default App;
