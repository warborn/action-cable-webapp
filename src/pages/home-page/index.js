import React from "react";
import { useAuth } from "~hooks/user";

import "./style.css";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <div className="user">Hi {user.email}!</div>
      <button className="logout btn-small" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

const Content = () => {
  return <div className="content">hello world</div>;
};

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
