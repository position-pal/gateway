const HttpBaseError = require("./errors/errors.utils");

function defaultResponseHandler(req, res, next) {
  const data = res.locals.data;
  const code = res.locals.code;
  if (data === undefined || code === undefined) {
    return next(new HttpBaseError("The route doesn't exist"));
  }
  const response = {
    success: true,
    date: new Date(),
    data: data.data,
    code: code,
  };
  res.status(response.code);
  return res.send(response);
}

module.exports = defaultResponseHandler;
