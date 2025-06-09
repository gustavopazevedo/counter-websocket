import { useState } from "react";
import "./App.css";
import { Counter } from "./components";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:8080";

function App() {
  const [count, setCount] = useState(0);
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onMessage: (event: MessageEvent) => {
      const message = JSON.parse(event.data);

      if (message.type === "GET_COUNT") {
        sendJsonMessage({ type: "COUNT", count });
      }
    },
  });

  return <Counter count={count} setCount={setCount} />;
}

export default App;
