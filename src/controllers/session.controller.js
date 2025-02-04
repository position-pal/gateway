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
    (response) => sessions.push(response.session),
    (error) => {
      if (error) {
        return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
      }
      res.json({ sessions });
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
    res.json(response);
  });
};

exports.startSession = (req, res, next) => handleSessionRequest("startSession", req, res, next);
exports.endSession = (req, res, next) => handleSessionRequest("endSession", req, res, next);
exports.getSession = (req, res, next) => handleSessionRequest("getSession", req, res, next);
