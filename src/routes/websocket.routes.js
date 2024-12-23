const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');

const router = express.Router();
expressWs(router); // Initialize express-ws with the router

router.ws('/group/:group/:user', (ws, req) => {
  const { group, user } = req.params;

  const location_ws = new WebSocket("ws://localhost:5001/group/"+group+"/"+user);

  ws.on('open', () => {
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

    location_ws.send(JSON.stringify(message));
  });

  ws.on('message', (msg) => {
    console.log('Received message:', msg);
    // Handle the received message here
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

module.exports = router;