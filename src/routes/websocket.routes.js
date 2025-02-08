const express = require("express");
const expressWs = require("express-ws");
const WebSocket = require("ws");
const { ensureWebSocketIsOpen } = require("../utils/ws-utils");
const { authGroup } = require("../middlewares/groupAuth.middleware");
require("dotenv").config();

const LOCATION_HTTP_URL = process.env.LOCATION_SERVICE_HTTP_URL || "127.0.0.1:8080";
const LOCATION_API_VERSION = process.env.LOCATION_SERVICE_API_VERSION || "v1";

const CHAT_HTTP_URL = process.env.CHAT_SERVICE_HTTP_URL || "127.0.0.1:8081";
const CHAT_API_VERSION = process.env.CHAT_SERVICE_API_VERSION || "v1";

const router = express.Router();
expressWs(router);

router.ws("/location/:group/:user", (ws, req) => {
  const { group, user } = req.params;
  let location_ws = null;

  // Forward messages from client to location_ws
  ws.on("message", async (msg) => {
    //verify if message contains authorization token
    if (location_ws === null) {
      console.log("Verifying authorization");
      if (!msg.includes("Authorization")) {
        console.log("no auth given");
        ws.send("Unauthorized");
        ws.close();
        return;
      } else {
        //get token from json
        const token = JSON.parse(msg).Authorization;
        console.log(token);
        //verify if user is authorized to access group
        if (!(await authGroup(token, group))) {
          console.log("Unauthorized");
          ws.send("Unauthorized");
          ws.close();
          return;
        } else {
          location_ws = new WebSocket(`ws://${LOCATION_HTTP_URL}/${LOCATION_API_VERSION}/location/${group}/${user}`);
        }
      }
    }
    try {
      await ensureWebSocketIsOpen(location_ws);
      location_ws.send(msg);
    } catch (error) {
      console.error("Error sending message to location_ws:", error);
    }
  });

  // Forward messages from location_ws to client
  location_ws.on("message", (msg) => {
    ws.send(msg);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  ws.on("close", () => {
    if (location_ws.readyState === WebSocket.OPEN) {
      location_ws.close();
      console.log("WebSocket connection closed");
    }
  });
});

router.ws("/chat/:group/:user", (ws, req) => {
  const { group, user } = req.params;

  let chat_ws = null;

  // Forward messages from client to chat_ws
  ws.on("message", async (msg) => {
    //verify if message contains authorization token
    if (chat_ws === null) {
      if (!msg.includes("Authorization")) {
        ws.send("Unauthorized");
        ws.close();
        return;
      } else {
        //get token from json
        const token = JSON.parse(msg).Authorization;
        //verify if user is authorized to access group
        if (!(await authGroup(token, group))) {
          ws.send("Unauthorized");
          ws.close();
          return;
        } else {
          chat_ws = new WebSocket(`ws://${CHAT_HTTP_URL}/${CHAT_API_VERSION}/messages/${group}?user=${user}`);
        }
      }
    }

    try {
      await ensureWebSocketIsOpen(chat_ws);
      chat_ws.send(msg);
    } catch (error) {
      console.error("Error sending message to location_ws:", error);
    }
  });

  // Forward messages from chat_ws to client
  chat_ws.on("message", async (msg) => {
    try {
      await ensureWebSocketIsOpen(chat_ws);
      ws.send(msg);
    } catch (error) {
      console.error("Error sending message to chat_ws:", error);
    }
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  ws.on("close", () => {
    if (chat_ws.readyState === WebSocket.OPEN) {
      chat_ws.close();
      console.log("WebSocket connection closed");
    }
  });
});

module.exports = router;
