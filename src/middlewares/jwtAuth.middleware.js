const { authorize } = require("../grpc/clients/authClient");
const { HTTP_STATUS } = require("../controllers/httpStatusCode");
const HttpBaseError = require("./errors/errors.utils");

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
      return next(new HttpBaseError(HTTP_STATUS.UNAUTHORIZED, "Unauthorized" ,"missing Authorization"));
    }
    return next();
  });
}

module.exports = jwtAuthMiddleware;
