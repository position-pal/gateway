const sessionClient = require("../grpc/clients/sessionClient");
const { HTTP_STATUS, getHttpStatusCode } = require("./httpStatusCode");
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
      const code = getHttpStatusCode(response.status.code);
      if (code !== HTTP_STATUS.OK) {
        return next();
      }
      sessions.push(response.session);
    },
    () => {
      res.locals.status = { code: "OK" };
      res.locals.data = { sessions };
      return next();
    },
    (error) => next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", `gRPC Error: ${error}`)),
  );
};

const getScope = (req) => ({
  group: { value: req.params.group },
  user: { value: req.params.user },
});

const handleSessionRequest = (method, req, res, next) => {
  const scope = getScope(req);
  if (!scope.user.value || !scope.group.value) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User and Group IDs are required"));
  }
  sessionClient[method](scope, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", `gRPC Error: ${error}`));
    }
    res.locals.status = response.status;
    res.locals.data = response;
    return next();
  });
};

exports.getCurrentLocation = (req, res, next) => handleSessionRequest("getCurrentLocation", req, res, next);
exports.getCurrentState = (req, res, next) => handleSessionRequest("getCurrentState", req, res, next);
exports.getCurrentTracking = (req, res, next) => handleSessionRequest("getCurrentTracking", req, res, next);
