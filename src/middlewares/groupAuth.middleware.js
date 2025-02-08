const { authorizeUserToAccessGroup } = require("../grpc/clients/authClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");

function groupAuthMiddleware(req, res, next) {
  const token = req.headers.authorization || "";
  const groupId = req.params.group;

  if (!token || !groupId) {
    return res.status(HTTP_STATUS.BAD_CONTENT).json({
      error: "Token and groupId are required",
    });
  }
  authGroup(token, groupId).then((authorized) => {
    if (authorized) {
      return next();
    } else {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: "Unauthorized access to group" });
    }
  });
}

async function authGroup(token, groupId) {
  await authorizeUserToAccessGroup({ token, groupId }, (err, response) => {
    return !(err || !response?.authorized);
  });
}

module.exports = { groupAuthMiddleware, authGroup };
