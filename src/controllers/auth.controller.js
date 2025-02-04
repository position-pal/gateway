const authClient = require("../grpc/clients/authClient");
const { HttpBaseError } = require("../middlewares/errors/errors.utils");
const HTTP_STATUS = require("./httpStatusCode");

/**
 * Login endpoint: Authenticates the user and returns a JWT token.
 */
exports.login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next(new HttpBaseError(HTTP_STATUS.BAD_CONTENT, "Bad content", "Username and password are required"));
  }

  authClient.authenticate(
    {
      username,
      password,
    },
    (error, response) => {
      if (error) {
        next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }

      if (response.status && response.status.code === "OK") {
        // Authentication ok
        res.status(HTTP_STATUS.OK).json({
          token: response.token,
        });
      } else {
        next(new HttpBaseError(HTTP_STATUS.UNAUTHORIZED, "Unauthorized", "Invalid username or password"));
      }
    },
  );
};

exports.authorize = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    next(new HttpBaseError(HTTP_STATUS.BAD_CONTENT, "Bad content", "Token is required"));
  }
  authClient.authorize(
    {
      token,
    },
    (error, response) => {
      if (error) {
        next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }

      res.status(HTTP_STATUS.OK).json({
        authorized: response.authorized,
      });
    },
  );
};

exports.authorizeUserToAccessGroup = (req, res, next) => {
  const { token, groupId } = req.body;

  if (!token || !groupId) {
    next(new HttpBaseError(HTTP_STATUS.BAD_CONTENT, "Bad content", "Token and groupId are required"));
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

      res.status(HTTP_STATUS.OK).json({
        authorized: response.authorized,
      });
    },
  );
};
