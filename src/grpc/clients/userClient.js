const grpc = require('@grpc/grpc-js');
const { userProto } = require('../proto');

const userClient = new userProto.UserService(
  process.env.USER_SERVICE_URL || 'localhost:50051',
  grpc.credentials.createInsecure()
);

module.exports = {
  createUser: (user, callback) => {
    userClient.CreateUser(user, callback);
  },
  getUser: (userId, callback) => {
    userClient.GetUser(userId, callback);
  },
  updateUser: (userId, user, callback) => {
    userClient.UpdateUser(userId, user, callback);
  },
  deleteUser: (userId, callback) => {
    userClient.DeleteUser(userId, callback);
  },
};