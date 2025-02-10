const { authorizeUserToAccessGroup } = require("../grpc/clients/authClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");
const HttpBaseError = require("./errors/errors.utils");

async function groupAuthMiddleware(req, res, next) {
  const token = req.headers.authorization || "";
  const group = req.params.group || "";
  if (!token || !group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad Request", "Token and groupId are required"));
  }
  try {
    const authorized = await authGroup(token.trim(), group.trim());
    if (authorized) {
      return next();
    } else {
      return next(new HttpBaseError(HTTP_STATUS.UNAUTHORIZED, "Unauthorized", "Unauthorized access to group"));
    }
  } catch (error) {
    return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", `gRPC Error: ${error}`));
  }
}

function authGroup(token, groupId) {
  return new Promise((resolve) => {
    authorizeUserToAccessGroup({ token, groupId }, (err, response) => {
      if (err) {
        return resolve(false);
      }
      resolve(response?.authorized || false);
    });
  });
}

module.exports = { groupAuthMiddleware, authGroup };
