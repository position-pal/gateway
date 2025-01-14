const chatClient = require('../grpc/clients/chatClient');
const HTTP_STATUS = require('./httpStatusCode');

exports.getLastMessages = (req, res, next) => {
  const { group_id, client_id, number_of_messages } = req.body;
  const request = { group_id, client_id, number_of_messages };

  chatClient.retrieveLastMessages(request, (error, response) => {
    if (error) return next(error);
    res.status(HTTP_STATUS.OK).json(response.messages);
  });
};
