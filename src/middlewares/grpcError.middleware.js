const HttpBaseError = require("./errors/errors.utils");
const { getHttpStatusCode } = require("../controllers/httpStatusCode");

function grpcErrorHandler(req, res, next) {
  const status = res.locals.status;
  const statusCode = getHttpStatusCode(status.code);

  if (String(statusCode).startsWith("2")) {
    res.locals.data = {
      success: true,
      date: new Date(),
      data: res.locals.data,
      code: statusCode,
    };
    res.locals.code = statusCode;
    next();
  } else {
    return next(new HttpBaseError(statusCode, "Generic Error", status.message));
  }
}

module.exports = grpcErrorHandler;
