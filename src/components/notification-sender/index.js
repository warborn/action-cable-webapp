import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { capitalize } from "~lib/utils";

import "./style.css";

const DEFAULT_OPTION = "alert";
const OPTIONS = ["alert", "activity", "download"];

const NotificationSender = ({ onSubmit }) => {
  const [notificationType, setNotificationType] = useState(DEFAULT_OPTION);

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
        {OPTIONS.map((value) => (
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
