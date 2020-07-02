import React, { useEffect, useState } from "react";
import ActionCable from "actioncable";
import { getToken } from "~lib/local-storage";

const WebsocketContext = React.createContext();

const getWebsocketUrl = () => {
  const token = getToken();

  if (!token) return process.env.REACT_APP_WEBSOCKET_URL;

  return `${process.env.REACT_APP_WEBSOCKET_URL}?Authorization=${token}`;
};

const WebsocketProvider = (props) => {
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    const URL = getWebsocketUrl();
    setWebsocket(ActionCable.createConsumer(URL));
  }, []);

  return <WebsocketContext.Provider value={websocket} {...props} />;
};
const useWebsocket = () => React.useContext(WebsocketContext);

export { WebsocketProvider, useWebsocket };
