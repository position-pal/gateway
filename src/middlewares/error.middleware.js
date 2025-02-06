const { HttpBaseError } = require("./errors/errors.utils");
const HTTP_STATUS = require("../controllers/httpStatusCode");

// eslint-disable-next-line no-unused-vars
function defaultErrorHandler(err, req, res, next) {
  const response = {
    success: false,
    date: new Date(),
    code: HTTP_STATUS.GENERIC_ERROR,
    error: {
      name: err.name,
      message: err.message,
    },
  };

  if (err instanceof HttpBaseError) {
    response.code = err.code;
    response.error.name = err.name;
    response.error.message = err.message;
    response.error.type = err.type;
  }

  res.status(response.code);
  return res.send(response);
}

module.exports = { defaultErrorHandler };
