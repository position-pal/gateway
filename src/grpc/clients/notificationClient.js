const grpc = require("@grpc/grpc-js");
const { notificationTokenProto } = require("../proto");

const notificationClient = new notificationTokenProto.UsersTokensService(
  process.env.NOTIFICATION_SERVICE_GRPC_URL || "localhost:50051",
  grpc.credentials.createInsecure(),
);

module.exports = {
  registerToken: (userToken, callback) => {
    notificationClient.Register(userToken, callback);
  },
  invalidateToken: (userToken, callback) => {
    notificationClient.Invalidate(userToken, callback);
  },
};
