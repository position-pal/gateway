const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const loadProto = (file) => {
  const packageDefinition = protoLoader.loadSync(path.join(__dirname, file), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  return grpc.loadPackageDefinition(packageDefinition);
};

module.exports = {
  userProto: loadProto("user.proto"),
  authProto: loadProto("auth.proto"),
  groupProto: loadProto("group.proto"),
  chatProto: loadProto("chat_service.proto"),
  notificationTokenProto: loadProto("tokens.proto"),
  trakingProto: loadProto("tracking.proto"),
};
