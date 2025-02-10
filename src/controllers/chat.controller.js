const chatClient = require("../grpc/clients/chatClient");
const { HTTP_STATUS } = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.getLastMessages = (req, res, next) => {
  const { group_id, client_id, number_of_messages } = req.body;
  const request = { group_id, client_id, number_of_messages };
  if (!group_id || !client_id || !number_of_messages) {
    return next(
      new HttpBaseError(
        HTTP_STATUS.BAD_REQUEST,
        "Bad content",
        "group_id, client_id and number_of_messages are required",
      ),
    );
  }
  chatClient.retrieveLastMessages(request, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.NOT_FOUND, "Not found", "Messages not found"));
    }
    res.locals.status = response.status;
    res.locals.data = response.messages;
    next();
  });
};
