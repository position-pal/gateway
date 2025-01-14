const { authorize } = require("../grpc/clients/authClient");
const HTTP_STATUS = require("../controllers/httpStatusCode");

function jwtAuthMiddleware(req, res, next) {
  if (req.path.startsWith("/auth/login")) {
    return next();
  }
  if (req.path.startsWith("/user") && req.method === "POST") {
    return next();
  }
  const token = req.headers.authorization || "";
  authorize({ token }, (err, response) => {
    if (err || !response?.authorized) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ error: "Unauthorized, missing Authorization" });
    }
    next();
  });
}

module.exports = jwtAuthMiddleware;
