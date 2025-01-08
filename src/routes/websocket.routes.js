const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');
require('dotenv').config();

const LOCATION_SERVICE_URL = process.env.LOCATION_SERVICE_URL || "localhost:8080";
const LOCATION_SERVICE_API_VERSION = process.env.LOCATION_SERVICE_API_VERSION || "v1";
const router = express.Router();
expressWs(router);

/*
EXAMPLE MESSAGE
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

router.ws('/location/:group/:user', (ws, req) => {
  const { group, user } = req.params;

  const location_ws = new WebSocket(`ws://${LOCATION_SERVICE_URL}/${LOCATION_SERVICE_API_VERSION}/group/${group}/${user}`);

  // Forward messages from client to location_ws
  ws.on('message', (msg) => {
    location_ws.send(msg);
  });

  // Forward messages from location_ws to client
  location_ws.on('message', (msg) => {
    ws.send(msg);
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  ws.on('close', () => {
    location_ws.close();
    console.log('WebSocket connection closed');
  });
});

module.exports = router;