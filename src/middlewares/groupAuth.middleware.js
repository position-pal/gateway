const { authorizeUserToAccessGroup } = require("../grpc/clients/authClient");
const {HTTP_STATUS} = require("../controllers/httpStatusCode");

function groupAuthMiddleware(req, res, next) {
  const token = req.headers.authorization || "";
  const groupId = req.params.group;

  if (!token || !groupId) {
    return res.status(HTTP_STATUS.BAD_CONTENT).json({
      error: "Token and groupId are required",
    });
  }

  authorizeUserToAccessGroup({ token, groupId }, (err, response) => {
    if (err || !response?.authorized) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: "Unauthorized access to group" });
    }
    next();
  });
}

module.exports = groupAuthMiddleware;
