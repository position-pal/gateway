const express = require("express");
const expressWs = require("express-ws");
const routes = require("./routes");
const websocketRoutes = require("./routes/websocket.routes");
const jwtAuth = require("./middlewares/jwtAuth");

const app = express();
expressWs(app);

app.use(express.json());

app.use("/api", jwtAuth);
app.use("/api", routes);
app.use("/ws", websocketRoutes);

module.exports = app;
