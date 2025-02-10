const WebSocket = require("ws");
const { ensureWebSocketIsOpen } = require("../../../src/utils/ws-utils");

async function createWebsocket(endpoint, token) {
  const ws = new WebSocket(`ws://localhost:3000/${endpoint}`);
  return new Promise((resolve, reject) => {
    ws.onopen = () => ws.send(JSON.stringify({ Authorization: `Bearer ${token}` }));
    const messageHandler = (event) => {
      if (event.data === "OK") {
        ws.removeEventListener("message", messageHandler);
        resolve(ws);
      } else {
        ws.removeEventListener("message", messageHandler);
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
