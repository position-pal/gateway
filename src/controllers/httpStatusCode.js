const HTTP_STATUS = {
  OK: 200, // Success
  BAD_CONTENT: 400, // Bad Request
  CONFLICT: 409, // Conflict
  WRONG_CREDENTIALS: 401, // Unauthorized
  NOT_FOUND: 404, // Not Found
  GENERIC_ERROR: 500, // Internal Server Error
};

module.exports = HTTP_STATUS;
