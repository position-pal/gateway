const notificationClient = require("../grpc/clients/notificationClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.registerToken = (req, res, next) => {
  const { user, token } = req.body;
  if (!user || !token) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User and token are required"));
  }
  notificationClient.registerToken({ user, token }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", `gRPC Error: ${error}`));
    }
    res.locals.status = response.status;
    res.locals.data = { message: "Token successfully registered" };
    return next();
  });
};

exports.invalidateToken = (req, res, next) => {
  const { user, token } = req.body;
  if (!user || !token) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User and token are required"));
  }
  notificationClient.invalidateToken({ user, token }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = { message: "Token successfully invalidated" };
    return next();
  });
};
