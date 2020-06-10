import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./style.css";

const Notification = ({ icon, type, message }) => {
  return (
    <div className="notification">
      {icon ? (
        <div className={cx("icon-container", `-${type}`)}>{icon}</div>
      ) : null}
      <div className="message">{message}</div>
    </div>
  );
};

Notification.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  icon: null,
};

export default Notification;
