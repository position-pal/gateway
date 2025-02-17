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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", jwtAuth);
app.use("/api", routes);
app.use("/ws", websocketRoutes);

app.use(grpcErrorHandler);

app.use(defaultResponseHandler);

app.use(defaultErrorHandler);

module.exports = app;
