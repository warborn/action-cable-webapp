import React, { useEffect, useState } from "react";
import ActionCable from "actioncable";

const WebsocketContext = React.createContext();

const WebsocketProvider = (props) => {
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    setWebsocket(ActionCable.createConsumer("ws://localhost:3000/cable"));
  }, []);

  return <WebsocketContext.Provider value={websocket} {...props} />;
};
const useWebsocket = () => React.useContext(WebsocketContext);

export { WebsocketProvider, useWebsocket };
