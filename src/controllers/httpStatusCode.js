const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  GENERIC_ERROR: 500,
};

function getHttpStatusCode(status) {
  if (status instanceof Number) return status;
  return HTTP_STATUS[status] ? HTTP_STATUS[status] : HTTP_STATUS.GENERIC_ERROR;
}

module.exports = {HTTP_STATUS, getHttpStatusCode};
