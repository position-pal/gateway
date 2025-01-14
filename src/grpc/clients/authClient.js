const grpc = require("@grpc/grpc-js");
const { authProto } = require("../proto");

const authClient = new authProto.AuthService(
  process.env.USER_SERVICE_URL || "localhost:50051",
  grpc.credentials.createInsecure(),
);

module.exports = {
  authenticate: (credentials, callback) => {
    authClient.Authenticate(credentials, callback);
  },
  authorize: (token, callback) => {
    authClient.Authorize(token, callback);
  },
};
