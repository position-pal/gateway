const sessionClient = require("../grpc/clients/sessionClient");
const HTTP_STATUS = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.getCurrentSession = (req, res, next) => {
  const groupId = req.params.group;
  if (!groupId) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }

  let sessions = [];
  sessionClient.getCurrentSession(
    { value: groupId },
    (response) => {
      sessions.push(response.session);
      res.locals.status = response.status;
    },
    (error) => {
      if (error) {
        return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }
      res.locals.data = { sessions };
      next();
    },
  );
};

const getScope = (req) => ({
  user: { username: req.params.user },
  group: { value: req.params.group },
});

const handleSessionRequest = (method, req, res, next) => {
  const scope = getScope(req);
  if (!scope.user.username || !scope.group.value) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User and Group IDs are required"));
  }

  sessionClient[method](scope, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response;
    next();
  });
};

exports.getCurrentLocation = (req, res, next) => handleSessionRequest("getCurrentLocation", req, res, next);
exports.getCurrentState = (req, res, next) => handleSessionRequest("getCurrentState", req, res, next);
exports.getCurrentTracking = (req, res, next) => handleSessionRequest("getCurrentTracking", req, res, next);
