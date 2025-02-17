const grpc = require("@grpc/grpc-js");
const { trakingProto } = require("../proto");

const sessionClient = new trakingProto.UserSessionService(
  process.env.LOCATION_SERVICE_GRPC_URL || "127.0.0.1:50052",
  grpc.credentials.createInsecure(),
);

module.exports = {
  getCurrentSession: (groupId, onData, onEnd, onError) => {
    const call = sessionClient.GetCurrentSession(groupId);
    call.on("data", onData);
    call.on("end", onEnd);
    call.on("error", onError);
  },
  getCurrentLocation: (scope, callback) => {
    sessionClient.GetCurrentLocation(scope, callback);
  },
  getCurrentState: (scope, callback) => {
    sessionClient.GetCurrentState(scope, callback);
  },
  getCurrentTracking: (scope, callback) => {
    sessionClient.GetCurrentTracking(scope, callback);
  },
};
