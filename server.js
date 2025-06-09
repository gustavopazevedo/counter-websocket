import http from "http";
import { v4 as uuidv4 } from "uuid";
import { WebSocketServer } from "ws";

const server = http.createServer();
const wss = new WebSocketServer({ server });

const connections = {};
const port = 8080;
const users = {};

const handleMessage = (message, uuid) => {
  const user = users[uuid];

  console.log(message);

  if (!user) return;

  user.count = message.count;

  console.log(user);
};

wss.on("connection", (connection) => {
  const uuid = uuidv4();
  connections[uuid] = connection;
  users[uuid] = { id: uuid, count: 0 };

  console.log(`User connected: ${uuid}`);

  const interval = setInterval(() => {
    if (connection.readyState === WebSocket.OPEN) {
      connection.send(JSON.stringify({ type: "GET_COUNT" }));
    }
  }, 1000);

  connection.on("message", (message) =>
    handleMessage(JSON.parse(message.toString()), uuid)
  );
  connection.on("close", () => {
    clearInterval(interval);

    delete connections[uuid];
    delete users[uuid];

    console.log(`User disconnected: ${uuid}`);
  });
});

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
