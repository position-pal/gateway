const WebSocket = require("ws");

async function ensureWebSocketIsOpen(ws) {
  return new Promise((resolve, reject) => {
    if (ws.readyState === WebSocket.OPEN) {
      return resolve();
    }
    ws.addEventListener("open", resolve);
    ws.addEventListener("error", (error) => reject(new Error(`WebSocket error: ${error.message}`)));
    ws.addEventListener("close", () => reject(new Error("WebSocket is closed or closing.")));
  });
}

module.exports = { ensureWebSocketIsOpen };
