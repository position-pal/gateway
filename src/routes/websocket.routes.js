const express = require("express");
const expressWs = require("express-ws");
const WebSocket = require("ws");
const { ensureWebSocketIsOpen } = require("../utils/ws-utils");
const { authGroup } = require("../middlewares/groupAuth.middleware");
require("dotenv").config();

const router = express.Router();
expressWs(router);

const config = {
  location: {
    url: process.env.LOCATION_SERVICE_HTTP_URL || "127.0.0.1:8080",
    version: process.env.LOCATION_SERVICE_API_VERSION || "v1",
    getPath: (group, user) => `/group/${group}/${user}`,
  },
  chat: {
    url: process.env.CHAT_SERVICE_HTTP_URL || "127.0.0.1:8081",
    version: process.env.CHAT_SERVICE_API_VERSION || "v1",
    getPath: (group, user) => `/messages/${group}?user=${user}`,
  },
};

router.ws("/location/:group/:user", (clientWs, req) => {
  const handler = new WebSocketHandler("location", req.params.group, req.params.user, config.location);
  handler.setupClientHandlers(clientWs);
});

router.ws("/chat/:group/:user", (clientWs, req) => {
  const handler = new WebSocketHandler("chat", req.params.group, req.params.user, config.chat);
  handler.setupClientHandlers(clientWs);
});

class WebSocketHandler {
  constructor(service, group, user, config) {
    Object.assign(this, { service, group, user, config, authenticated: false });
  }

  setupClientHandlers(clientWs) {
    clientWs.on("message", (msg) => this.handleMessage(msg, clientWs));
    clientWs.on("error", (error) => console.error(`Client WebSocket error on ${this.service} endpoint:`, error));
    clientWs.on("close", () => this.safeClose(this.serviceWs));
  }

  async handleMessage(msg, clientWs) {
    if (!this.authenticated) {
      const success = await this.handleAuthentication(msg, clientWs);
      if (success) {
        this.initServiceWebSocket(clientWs);
        await ensureWebSocketIsOpen(this.serviceWs);
        this.safeSend(clientWs, "OK");
      }
    } else {
      this.safeSend(this.serviceWs, msg);
    }
  }

  async handleAuthentication(msg, clientWs) {
    try {
      const { Authorization: token } = JSON.parse(msg);
      if (!token || !(await authGroup(token, this.group))) {
        throw new Error("Unauthorized");
      }
      this.authenticated = true;
      return true;
    } catch (error) {
      this.handleError(clientWs, `${this.service} authentication error:`, error);
      return false;
    }
  }

  initServiceWebSocket(clientWs) {
    try {
      this.serviceWs = new WebSocket(this.getBackendUrl());
      this.serviceWs.on("message", (msg) => this.safeSend(clientWs, msg));
      this.serviceWs.on("error", (error) =>
        this.handleError(clientWs, `${this.service} service WebSocket error:`, error),
      );
      this.serviceWs.on("close", () => this.safeClose(clientWs));
    } catch (error) {
      this.handleError(clientWs, `${this.service} service WebSocket initialization error:`, error);
    }
  }

  getBackendUrl() {
    const { url, version, getPath } = this.config;
    return `ws://${url}/${version}${getPath(this.group, this.user)}`;
  }

  safeSend(ws, msg) {
    try {
      if (ws?.readyState === WebSocket.OPEN) {
        ws.send(msg);
      }
    } catch (error) {
      this.handleError(ws, "WebSocket send error:", error);
    }
  }

  safeClose(ws) {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.close();
    }
  }

  handleError(ws, logMessage, error) {
    console.error(logMessage, error);
    this.safeSend(ws, error.message || "An error occurred");
    this.safeClose(ws);
  }
}

module.exports = router;
