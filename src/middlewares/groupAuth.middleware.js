const { authorizeUserToAccessGroup } = require("../grpc/clients/authClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");

async function groupAuthMiddleware(req, res, next) {
  const token = req.headers.authorization || "";
  const groupId = req.params.group;
  
  if (!token || !groupId) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Token and groupId are required",
    });
  }

  try {
    const authorized = await authGroup(token, groupId);

    if (authorized) {
      return next();
    } else {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: "Unauthorized access to group" });
    }
  } catch (error) {
    return res.status(HTTP_STATUS.GENERIC_ERROR).json({ error: `Internal server error ${error}` });
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
