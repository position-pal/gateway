const express = require("express");
const expressWs = require("express-ws");
const routes = require("./routes");
const cors = require("cors");
const websocketRoutes = require("./routes/websocket.routes");
const jwtAuth = require("./middlewares/jwtAuth.middleware");
const defaultErrorHandler = require("./middlewares/error.middleware");
const grpcErrorHandler = require("./middlewares/grpcError.middleware");
const defaultResponseHandler = require("./middlewares/response.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = require("./config/swagger");

const app = express();
expressWs(app);

app.use(express.json());
app.use(cors());

const swaggerSpec = swaggerJsdoc(swaggerOptions.options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", jwtAuth);
app.use("/api", routes);
app.use("/ws", websocketRoutes);

app.use(grpcErrorHandler);

app.use(defaultResponseHandler);

app.use(defaultErrorHandler);

module.exports = app;
