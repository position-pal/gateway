const express = require('express');
const expressWs = require('express-ws');
const routes = require('./routes');
const websocketRoutes = require('./routes/websocket.routes'); // Import the WebSocket routes
const errorHandler = require('./middlewares/errorHandler');
const jwtAuth = require('./middlewares/jwtAuth');

const app = express();
expressWs(app); // Add this line to enable WebSocket support

// Global Middleware
app.use(express.json());

// Routes
app.use('/api', jwtAuth);
app.use('/api', routes);
app.use('/ws', websocketRoutes); // Use the WebSocket routes

// Middleware for error management
app.use(errorHandler);

module.exports = app;
