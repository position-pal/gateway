const grpc = require('@grpc/grpc-js');
const { userProto } = require('../proto');

const client = new userProto.UserService(
  process.env.USER_SERVICE_URL || 'localhost:50051',
  grpc.credentials.createInsecure()
);

module.exports = client;