# Counter + WebSocket
This project is a code challenge and uses React with Vite and WebSocket to sync the server it the counter component and updated the counter on each second.

## How to run this project
### Running the WebSocket server
1. In the root directory run `node server.js`. Keep it running while the Vite is running too.

### Running the React / Vite
1. In the root directory run `npm run dev` and check the port that was assigned, usually is `http://localhost:5173/`

### Things to improve / add
1. Better UI (I focused on the whole functionality)
2. Handle errors for the WebSocket server and the React app
3. Implementation of a wss server to be secure
4. Dictionary with all message keys as a single source of truth
5. Add some king of authentication and have a state for the user

### Screen Recording URL
https://www.loom.com/share/dc50c8f7f96549c482864e2504ca8945?sid=e743fa9b-1c08-40e4-a860-9fb33be4d727

#### Thanks

