const WebSocket = require("ws");
const { ensureWebSocketIsOpen } = require("../../../src/utils/ws-utils");

async function createWebsocket(endpoint, token) {
  const ws = new WebSocket(`ws://localhost:3000/${endpoint}`);
  await ensureWebSocketIsOpen(ws);
  ws.send(JSON.stringify({ Authorization: `Bearer ${token}` }));
  return ws;
}

async function closeWebsocket(ws) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    await ws.close();
  }
}

module.exports = { createWebsocket, closeWebsocket };
