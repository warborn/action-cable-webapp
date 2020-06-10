import { useEffect } from "react";
import { useWebsocket } from "~hooks/websocket";
import PropTypes from "prop-types";

const NotificationsContainer = ({ children }) => {
  const websocket = useWebsocket();

  useEffect(() => {
    if (websocket) {
      const subscription = websocket.subscriptions.create(
        { channel: "NotificationsChannel" },
        {
          received: (data) => {
            console.log("Notification received: ", data);
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
