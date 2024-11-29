const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Carica il proto
const authProtoPath = path.resolve(__dirname, '../proto/auth.proto');
const packageDefinition = protoLoader.loadSync(authProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const authProto = grpc.loadPackageDefinition(packageDefinition);

// Configura il client gRPC per AuthService
const authClient = new authProto.AuthService(
  process.env.USER_SERVICE_URL || 'localhost:50051',
  grpc.credentials.createInsecure()
);

module.exports = {
  authenticate: (credentials, callback) => {
    authClient.Authenticate(credentials, callback);
  },
  authorize: (token, callback) => {
    authClient.Authorize({ token }, callback);
  },
};