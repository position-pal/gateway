const authClient = require("../grpc/clients/authClient");
const HttpBaseError = require("../middlewares/errors/errors.utils");
const { HTTP_STATUS } = require("./httpStatusCode");

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Email and password are required"));
  }
  authClient.authenticate({ email, password }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = { token: response.token };
    return next();
  });
};

exports.authorize = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Token is required"));
  }
  authClient.authorize({ token }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = { authorized: response.authorized };
    return next();
  });
};

exports.authorizeUserToAccessGroup = (req, res, next) => {
  const token = req.token;
  const groupId = req.group;
  if (!token || !groupId) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Token and groupId are required"));
  }
  authClient.authorizeUserToAccessGroup({ token, groupId }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = {
      authorized: response.authorized,
    };
    return next();
  });
};
