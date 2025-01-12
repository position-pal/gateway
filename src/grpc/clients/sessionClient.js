const grpc = require('@grpc/grpc-js');
const { trakingProto } = require('../proto');

const sessionClient = new trakingProto.UserSessionService(
  process.env.LOCATION_SERVICE_URL || '"127.0.0.1:8080"',
  grpc.credentials.createInsecure()
);

module.exports = {
  getCurrentSession: (groupId, onData, onEnd) => {
    const call = sessionClient.GetCurrentSession(groupId);
    call.on('data', onData);
    call.on('end', onEnd);
  },
  getCurrentLocation: (userId, callback) => {
    sessionClient.GetCurrentLocation(userId, callback);
  },
  getCurrentState: (userId, callback) => {
    sessionClient.GetCurrentState(userId, callback);
  },
  getCurrentTracking: (userId, callback) => {
    sessionClient.GetCurrentTracking(userId, callback);
  },
};