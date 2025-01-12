const sessionClient = require('../grpc/clients/sessionClient');

exports.getCurrentSession = (req, res, next) => {
  const groupId = { value: req.params.group }; 
  let sessions = [];
  sessionClient.getCurrentSession(
    groupId,
    (response) => sessions.push(response.session),
    () => res.json({ sessions })
  );
};

exports.getCurrentLocation = (req, res, next) => {
  const userId = { username: req.params.user };
  sessionClient.getCurrentLocation(userId, (error, response) => {
    if (error) return next(error);
    res.json(response);
  });
};

exports.getCurrentState = (req, res, next) => {
  const userId = { username: req.params.user };
  sessionClient.getCurrentState(userId, (error, response) => {
    if (error) return next(error);
    res.json(response);
  });
};

exports.getCurrentTracking = (req, res, next) => {
  const userId = { username: req.params.user };
  sessionClient.getCurrentTracking(userId, (error, response) => {
    if (error) return next(error);
    res.json(response);
  });
};