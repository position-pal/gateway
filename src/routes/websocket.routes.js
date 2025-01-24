const express = require("express");
const expressWs = require("express-ws");
const WebSocket = require("ws");
require("dotenv").config();

const LOCATION_SERVICE_URL = process.env.LOCATION_SERVICE_URL || "127.0.0.1:8080";
const LOCATION_SERVICE_API_VERSION = process.env.LOCATION_SERVICE_API_VERSION || "v1";

const CHAT_SERVICE_URL = process.env.CHAT_SERVICE_URL || "127.0.0.1:8081";
const CHAT_SERVICE_API_VERSION = process.env.CHAT_SERVICE_API_VERSION || "v1";
const router = express.Router();
expressWs(router);

/*
EXAMPLE MESSAGE FOR LOCATION SERVICE
const message = {
  "SampledLocation":{
    "timestamp":"2024-12-22T10:40:18.967675Z",
    "user":"luke",
    "group":"astro",
    "position":{
      "latitude":44.487912,
      "longitude":11.32885
    }
  }
}
*/

router.ws("/location/:group/:user", (ws, req) => {
  const { group, user } = req.params;

  const location_ws = new WebSocket(
    `ws://${LOCATION_SERVICE_URL}/${LOCATION_SERVICE_API_VERSION}/group/${group}/${user}`,
  );

  // Forward messages from client to location_ws
  ws.on("message", (msg) => {
    location_ws.send(msg);
  });

  // Forward messages from location_ws to client
  location_ws.on("message", (msg) => {
    ws.send(msg);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  ws.on("close", () => {
    location_ws.close();
    console.log("WebSocket connection closed");
  });
});

router.ws("/chat/:group/:user", (ws, req) => {
  const { group, user } = req.params;

  const chat_ws = new WebSocket(
    `ws://${CHAT_SERVICE_URL}/${CHAT_SERVICE_API_VERSION}/messages/${group}?user=${user}`,
  );

  // Forward messages from client to chat_ws
  ws.on("message", (msg) => {
    chat_ws.send(msg);
  });

  // Forward messages from chat_ws to client
  chat_ws.on("message", (msg) => {
    ws.send(msg);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  ws.on("close", () => {
    chat_ws.close();
    console.log("WebSocket connection closed");
  });
});

module.exports = router;
