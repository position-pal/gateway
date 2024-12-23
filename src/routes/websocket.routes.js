const express = require('express');
const expressWs = require('express-ws');

const router = express.Router();
expressWs(router); // Initialize express-ws with the router

router.ws('/group/:group/:user', (ws, req) => {
  const { group, user } = req.params;

  ws.on('open', () => {
    const message = {
      SampledLocation: {
        timestamp: "2024-12-16T15:45:34.789286Z",
        user: user,
        position: {
          latitude: 44.139,
          longitude: 12.243
        }
      }
    };

    ws.send(JSON.stringify(message));
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