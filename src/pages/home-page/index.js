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
  return (
    <div className="content">
      <div className="notification-sender">
        <select className="options">
          <option value="1">Alert</option>
          <option value="2">Activity</option>
          <option value="3">Download</option>
        </select>
        <button className="submit">Send Notification</button>
      </div>
    </div>
  );
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
