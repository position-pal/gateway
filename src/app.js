const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Global Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Middleware for error management
app.use(errorHandler);

module.exports = app;