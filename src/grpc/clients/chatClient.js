const grpc = require('@grpc/grpc-js');
const { chatProto } = require('../proto');

const chatClient = new chatProto.chatservice.ChatService(
  process.env.CHAT_SERVICE_URL || 'localhost:5052',
  grpc.credentials.createInsecure()
);

module.exports = {
  retrieveLastMessages: (request, callback) => {
    chatClient.RetrieveLastMessages(request, callback);
  },
};