const WebSocket = require("ws");
const { ensureWebSocketIsOpen } = require("../../../src/utils/ws-utils");

async function createWebsocket(endpoint) {
  const ws = new WebSocket(`ws://localhost:3000/${endpoint}`);
  await ensureWebSocketIsOpen(ws);
  return ws;
}

async function closeWebsocket(ws) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    await ws.close();
  }
}

module.exports = { createWebsocket, closeWebsocket };
