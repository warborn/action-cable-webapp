import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./style.css";

const NotificationContent = ({ content }) => (
  <div className="content">
    {Object.entries(content).map(([key, value]) => (
      <div className={cx("entry", `-${key}`)} key={key}>
        {value}
      </div>
    ))}
  </div>
);

const Notification = ({ icon, type, message, content }) => {
  return (
    <div className="notification">
      {icon ? (
        <div className={cx("icon-container", `-${type}`)}>{icon}</div>
      ) : null}
      <div className="body">
        <div className="message">{message}</div>

        {content ? <NotificationContent content={content} /> : null}
      </div>
    </div>
  );
};

Notification.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  content: PropTypes.object,
};

Notification.defaultProps = {
  icon: null,
  content: null,
};

export default Notification;
