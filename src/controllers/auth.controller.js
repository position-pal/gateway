const authClient = require("../grpc/clients/authClient");
const HTTP_STATUS = require("./httpStatusCode");

/**
 * Login endpoint: Authenticates the user and returns a JWT token.
 */
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(HTTP_STATUS.BAD_CONTENT).json({
      error: "Username and password are required",
    });
  }

  authClient.authenticate(
    {
      username,
      password,
    },
    (error, response) => {
      if (error) {
        console.error("gRPC Error:", error);
        return res.status(HTTP_STATUS.GENERIC_ERROR).json({
          error: "Internal server error",
        });
      }

      if (response.status && response.status.code === "OK") {
        // Authentication ok
        res.status(HTTP_STATUS.OK).json({
          token: response.token,
        });
      } else {
        // Authentication error
        res.status(HTTP_STATUS.UNAUTHORIZED).json({
          error: response.status?.message || "Invalid credentials",
        });
      }
    },
  );
};

exports.authorize = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(HTTP_STATUS.BAD_CONTENT).json({
      error: "Token is required",
    });
  }
  authClient.authorize(
    {
      token,
    },
    (error, response) => {
      if (error) {
        console.error("gRPC Error:", error);
        return res.status(HTTP_STATUS.GENERIC_ERROR).json({
          error: "Internal server error",
        });
      }

      res.status(HTTP_STATUS.OK).json({
        authorized: response.authorized,
      });
    },
  );
};

exports.authorizeUserToAccessGroup = (req, res) => {
  const { token, groupId } = req.body;

  if (!token || !groupId) {
    return res.status(HTTP_STATUS.BAD_CONTENT).json({
      error: "Token and groupId are required",
    });
  }
  authClient.authorizeUserToAccessGroup(
    {
      token,
      groupId,
    },
    (error, response) => {
      if (error) {
        console.error("gRPC Error:", error);
        return res.status(HTTP_STATUS.GENERIC_ERROR).json({
          error: "Internal server error",
        });
      }

      res.status(HTTP_STATUS.OK).json({
        authorized: response.authorized,
      });
    },
  );
};
