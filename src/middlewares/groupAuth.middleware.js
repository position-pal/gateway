const { authorizeUserToAccessGroup } = require("../grpc/clients/authClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");
const HttpBaseError = require("./errors/errors.utils");

async function groupAuthMiddleware(req, res, next) {
  const token = req.headers.authorization || "";
  const group = req.params.group;

  console.log("params: ", req.params)
  console.log(`token: ${token}`)
  console.log("groupId: ", group)
  if (!token || !group) {
    next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad Request", "Token and groupId are required"));
  }

  try {
    const authorized = await authGroup(token, group);

    if (authorized) {
      next();
    } else {
      next(new HttpBaseError(HTTP_STATUS.UNAUTHORIZED, "Unauthorized" ,"Unauthorized access to group"));
    }
  } catch (error) {
    next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error" ,"gRPC Error"));
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
