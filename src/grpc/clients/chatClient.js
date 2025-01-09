const grpc = require('@grpc/grpc-js');
const { chatProto } = require('../proto');

const chatClient = new chatProto.ChatService(
  process.env.CHAT_SERVICE_URL || 'localhost:50052',
  grpc.credentials.createInsecure()
);

module.exports = {
  retrieveLastMessages: (request, callback) => {
    chatClient.RetrieveLastMessages(request, callback);
  },
};