import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useWebsocket } from "~hooks/websocket";
import Notification from "~components/notification";
import { NOTIFICATION_TYPES_ICONS } from "~containers/constants";

const NotificationsContainer = ({ children }) => {
  const websocket = useWebsocket();

  useEffect(() => {
    if (websocket) {
      const subscription = websocket.subscriptions.create(
        { channel: "NotificationsChannel" },
        {
          received: (data) => {
            const Icon = NOTIFICATION_TYPES_ICONS[data.type];
            toast(<Notification {...data} icon={<Icon />} />);
          },
        }
      );

      return () => {
        websocket.subscriptions.remove(subscription);
      };
    }
  }, [websocket]);

  return children;
};

NotificationsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationsContainer;
