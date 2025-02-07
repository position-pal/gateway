const { HttpBaseError } = require("./errors/errors.utils");

function grpcErrorHandler(req, res, next) {
  const status = res.locals.status;

  if (status.code.startsWith("2")) {
    const response = {
      success: true,
      date: new Date(),
      data: res.locals.data,
      code: status.code,
    };
    res.locals.data = response;
    res.locals.code = status.code;
    next();
  } else {
    return next(new HttpBaseError(status.code, "Generic Error", status.message));
  }
}

module.exports = grpcErrorHandler;
