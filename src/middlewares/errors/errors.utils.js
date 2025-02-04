const HTTP_STATUS = require("../../controllers/httpStatusCode");

class HttpBaseError {
  constructor(code, name, message, stack, type) {
    this.code = code;
    this.name = name;
    this.message = message ? message : code.toString();
    if (stack) {
      this.stack = stack;
    }
    this.type = type ? type : HTTP_STATUS.GENERIC_ERROR;
  }
}

module.exports = { HttpBaseError };
