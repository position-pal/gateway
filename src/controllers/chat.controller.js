const chatClient = require("../grpc/clients/chatClient");
const { HTTP_STATUS } = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

const getScope = (req) => ({
  group: req.params.group,
  number_of_messages: req.params.num,
});

exports.getLastMessages = (req, res, next) => {
  const scope = getScope(req);

  const group_id = scope.group;
  const number_of_messages = scope.number_of_messages;

  const request = { group_id, number_of_messages };

  if (!group_id || !number_of_messages) {
    return next(
      new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "group_id and number_of_messages are required"),
    );
  }
  chatClient.retrieveLastMessages(request, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.NOT_FOUND, "Not found", `Error retrieve messages ${error}`));
    }
    res.locals.status = response.status;
    res.locals.data = response.messages;
    return next();
  });
};
