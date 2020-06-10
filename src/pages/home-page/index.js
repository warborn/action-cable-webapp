import React from "react";
import { useAuth } from "~hooks/user";
import NotificationSender from "~components/notification-sender";
import NotificationsContainer from "~containers/notifications-container";
import api from "~lib/api";

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
      <NotificationSender
        onSubmit={(type) => {
          api.post("/notifications", { notification: { type } });
        }}
      />
    </div>
  );
};

const HomePage = () => {
  return (
    <NotificationsContainer>
      <div className="home-page">
        <Header />
        <Content />
      </div>
    </NotificationsContainer>
  );
};

export default HomePage;
