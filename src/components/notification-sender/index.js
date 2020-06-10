import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { capitalize } from "~lib/utils";

import "./style.css";

const NotificationSender = ({ onSubmit, defaultValue, options }) => {
  const [notificationType, setNotificationType] = useState(defaultValue);

  const handleClick = useCallback(() => {
    onSubmit(notificationType);
  }, [onSubmit, notificationType]);

  return (
    <div className="notification-sender">
      <select
        className="options"
        onChange={(e) => {
          setNotificationType(e.target.value);
        }}
        value={notificationType}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {capitalize(value)}
          </option>
        ))}
      </select>
      <button className="submit" onClick={handleClick}>
        Send Notification
      </button>
    </div>
  );
};

NotificationSender.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NotificationSender;
