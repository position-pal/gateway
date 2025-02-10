const WebSocket = require("ws");

async function createWebsocket(endpoint, token) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://localhost:3000/${endpoint}`);
    ws.onopen = () => ws.send(JSON.stringify({ Authorization: `Bearer ${token}` }));
    const messageHandler = (event) => {
      ws.removeEventListener("message", messageHandler);
      if (event.data === "OK") {
        resolve(ws);
      } else {
        reject(new Error(`Unexpected message: ${event.data}`));
      }
    };
    ws.addEventListener("message", messageHandler);
    ws.onerror = (error) => {
      ws.removeEventListener("message", messageHandler);
      reject(new Error(`WebSocket error: ${error.message}`));
    };
    ws.onclose = () => reject(new Error("WebSocket closed before handshake completed"));
  });
}

async function closeWebsocket(ws) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    await ws.close();
  }
}

module.exports = { createWebsocket, closeWebsocket };
