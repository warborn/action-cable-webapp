import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useWebsocket } from "~hooks/websocket";
import Notification from "~components/notification";

const NotificationsContainer = ({ children }) => {
  const websocket = useWebsocket();

  useEffect(() => {
    if (websocket) {
      const subscription = websocket.subscriptions.create(
        { channel: "NotificationsChannel" },
        {
          received: (data) => {
            toast(<Notification {...data} />);
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
