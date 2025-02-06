const express = require("express");
const expressWs = require("express-ws");
const routes = require("./routes");
const websocketRoutes = require("./routes/websocket.routes");
const jwtAuth = require("./middlewares/jwtAuth.middleware");
const defaultErrorHandler = require("./middlewares/error.middleware");
const grpcErrorHandler = require("./middlewares/grpcError.middleware");
const defaultResponseHandler = require("./middlewares/response.middleware");

const app = express();
expressWs(app);

app.use(express.json());

app.use("/api", jwtAuth);
app.use("/api", routes);
app.use("/ws", websocketRoutes);

app.use(grpcErrorHandler);

app.use(defaultResponseHandler);

app.use(defaultErrorHandler);

module.exports = app;
