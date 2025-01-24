const sessionClient = require("../grpc/clients/sessionClient");

exports.getCurrentSession = (req, res) => {
  const groupId = { value: req.params.group };
  let sessions = [];
  sessionClient.getCurrentSession(
    groupId,
    (response) => sessions.push(response.session),
    () => res.json({ sessions }),
  );
};

const getScope = (req) => ({
  user: { username: req.params.user },
  group: { value: req.params.group },
});

const handleSessionRequest = (method, req, res, next) => {
  const scope = getScope(req);
  sessionClient[method](scope, (error, response) => {
    if (error) return next(error);
    res.json(response);
  });
};

exports.getCurrentLocation = (req, res, next) =>
  handleSessionRequest("getCurrentLocation", req, res, next);

exports.getCurrentState = (req, res, next) =>
  handleSessionRequest("getCurrentState", req, res, next);

exports.getCurrentTracking = (req, res, next) =>
  handleSessionRequest("getCurrentTracking", req, res, next);
