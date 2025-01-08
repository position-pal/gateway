const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');

const router = express.Router();
expressWs(router);


/*
EXAMPLE MESSAGE
const message = {
      SampledLocation: {
        timestamp: "2024-12-16T15:45:34.789286Z",
        user: user,
        group: group,
        position: {
          latitude: 44.139,
          longitude: 12.243
        }
      }
    };
*/

router.ws('/location/:group/:user', (ws, req) => {
  const { group, user } = req.params;

  const location_ws = new WebSocket(`ws://localhost:5001/group/${group}/${user}`);

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