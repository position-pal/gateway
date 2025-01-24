async function ensureWebSocketIsOpen(ws) {
  return new Promise((resolve, reject) => {
    if (ws.readyState === WebSocket.OPEN) {
      resolve();
    }
    ws.addEventListener("open", resolve);
    ws.addEventListener("error", reject);
  });
}

module.exports = { ensureWebSocketIsOpen };
