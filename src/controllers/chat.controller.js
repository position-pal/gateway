const chatClient = require('../grpc/clients/chatClient');

exports.getLastMessages = (req, res, next) => {
  const { group_id, client_id, number_of_messages } = req.query;
  const request = { group_id, client_id, number_of_messages };

  chatClient.retrieveLastMessages(request, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response.messages);
  });
};