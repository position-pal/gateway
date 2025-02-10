const authClient = require("../grpc/clients/authClient");
const HttpBaseError = require("../middlewares/errors/errors.utils");
const { HTTP_STATUS } = require("./httpStatusCode");

/**
 * Login endpoint: Authenticates the user and returns a JWT token.
 */
exports.login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Email and password are required"));
  }
  authClient.authenticate(
    {
      email,
      password,
    },
    (error, response) => {
      if (error) {
        next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }
      res.locals.status = response.status;
      res.locals.data = { token: response.token };
      next();
    },
  );
};

exports.authorize = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Token is required"));
  }
  authClient.authorize({ token }, (error, response) => {
      if (error) {
        next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }
      res.locals.status = response.status;
      res.locals.data = {
        authorized: response.authorized,
      };
      next();
    },
  );
};

exports.authorizeUserToAccessGroup = (req, res, next) => {
  const token = req.token;
  const groupId = req.group;
  if (!token || !groupId) {
    next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Inside Controller: Token and groupId are required"));
  }
  authClient.authorizeUserToAccessGroup(
    {
      token,
      groupId,
    },
    (error, response) => {
      if (error) {
        next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }
      res.locals.status = response.status;
      res.locals.data = {
        authorized: response.authorized,
      };
      next();
    },
  );
};
