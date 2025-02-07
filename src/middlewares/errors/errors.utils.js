const {HTTP_STATUS} = require("../../controllers/httpStatusCode");

class HttpBaseError extends Error {
  constructor(code, name, message) {
    super();
    this.code = code;
    this.name = name;
    this.message = message ? message : code.toString();
  }
}

module.exports = HttpBaseError;
