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

router.ws("/location/:group/:user", (clientWs, req) => {
  const { group, user } = req.params;
  let locationWs = null;
  let authenticated = false;

  const initLocationWebSocket = () => {
    const backendUrl = `ws://${LOCATION_HTTP_URL}/${LOCATION_API_VERSION}/group/${group}/${user}`;
    locationWs = new WebSocket(backendUrl);
    locationWs.on("message", (msg) => {
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(msg);
      }
    });
    locationWs.on("error", (error) => {
      console.error("Error on location service WebSocket:", error);
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send("Location service error");
      }
    });
    locationWs.on("close", () => {
      console.log("Location service WebSocket connection closed");
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.close();
      }
    });
  };

  clientWs.on("message", async (msg) => {
    if (!authenticated) {
      try {
        const data = JSON.parse(msg);
        const token = data.Authorization;
        if (!token) {
          clientWs.send("Unauthorized");
          return clientWs.close();
        }
        const isAuthorized = await authGroup(token, group);
        if (!isAuthorized) {
          clientWs.send("Unauthorized");
          return clientWs.close();
        }
        authenticated = true;
        console.log("Authenticated");
        initLocationWebSocket(msg);
        clientWs.send("OK");
      } catch (error) {
        console.error("Error processing authentication message:", error);
        clientWs.send("Invalid authentication message");
        return clientWs.close();
      }
    } else {
      console.log("Seems authenticated");
      // Forward subsequent messages to the location service backend
      if (locationWs) {
        try {
          console.log("Sending to location service" + msg);
          await ensureWebSocketIsOpen(locationWs);
          locationWs.send(msg);
        } catch (error) {
          console.error("Error sending message to location service:", error);
        }
      }
    }
  });

  clientWs.on("error", (error) => console.error("Client WebSocket error on location endpoint:", error));
  clientWs.on("close", () => {
    if (locationWs && locationWs.readyState === WebSocket.OPEN) {
      locationWs.close();
      console.log("Client closed connection; location service WebSocket closed");
    }
  });
});

router.ws("/chat/:group/:user", (clientWs, req) => {
  const { group, user } = req.params;
  let chatWs = null;
  let authenticated = false;

  /**
   * Initializes the backend WebSocket connection to the chat service.
   * @param {string} initialMsg - The initial message (authentication message) from the client.
   */
  const initChatWebSocket = () => {
    const backendUrl = `ws://${CHAT_HTTP_URL}/${CHAT_API_VERSION}/messages/${group}?user=${user}`;
    chatWs = new WebSocket(backendUrl);

    // Register event listener after creating the backend WebSocket connection
    chatWs.on("open", () => {
      console.log(`Connected to chat service at ${backendUrl}`);
      // Optionally, you may forward the initial message if required:
      // chatWs.send(initialMsg);
    });

    // Forward messages from the backend to the client
    chatWs.on("message", (msg) => {
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(msg);
      }
    });

    // Log errors on the backend connection and notify the client if needed
    chatWs.on("error", (error) => {
      console.error("Error on chat service WebSocket:", error);
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send("Chat service error");
      }
    });

    // Close the client connection if the backend connection is closed
    chatWs.on("close", () => {
      console.log("Chat service WebSocket connection closed");
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.close();
      }
    });
  };

  // Handle messages from the client
  clientWs.on("message", async (msg) => {
    if (!authenticated) {
      // Process the first message as the authentication message
      try {
        const data = JSON.parse(msg);
        const token = data.Authorization;
        if (!token) {
          clientWs.send("Unauthorized");
          return clientWs.close();
        }
        // Verify if the user is authorized to access the specified group
        const isAuthorized = await authGroup(token, group);
        if (!isAuthorized) {
          clientWs.send("Unauthorized");
          return clientWs.close();
        }
        // Authentication succeeded; mark as authenticated and initialize the backend connection
        authenticated = true;
        initChatWebSocket(msg);
      } catch (error) {
        console.error("Error processing authentication message:", error);
        clientWs.send("Invalid authentication message");
        return clientWs.close();
      }
    } else {
      // Forward subsequent messages to the chat service backend
      if (chatWs) {
        try {
          await ensureWebSocketIsOpen(chatWs);
          chatWs.send(msg);
        } catch (error) {
          console.error("Error sending message to chat service:", error);
        }
      }
    }
  });

  // Handle client WebSocket errors
  clientWs.on("error", (error) => {
    console.error("Client WebSocket error on chat endpoint:", error);
  });

  // When the client connection is closed, close the backend connection if it is open
  clientWs.on("close", () => {
    if (chatWs && chatWs.readyState === WebSocket.OPEN) {
      chatWs.close();
      console.log("Client closed connection; chat service WebSocket closed");
    }
  });
});

module.exports = router;
