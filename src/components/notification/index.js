import React from "react";
import PropTypes from "prop-types";

const Notification = ({ closeToast, type, message }) => {
  return (
    <div className="notification">
      <p>
        {type}:{message}
      </p>
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

Notification.propTypes = {
  closeToast: PropTypes.func,
  message: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  closeToast: () => {},
};

export default Notification;
