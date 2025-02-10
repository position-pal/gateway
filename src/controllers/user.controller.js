const userClient = require("../grpc/clients/userClient");
const { HTTP_STATUS } = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.getUser = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "User ID is required"));
  }
  userClient.getUser({ userId: id }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.user;
    return next();
  });
};

exports.createUser = (req, res, next) => {
  const user = req.body;
  if (!user.userData || !user.userData.name || !user.userData.email) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "User data with name and email is required"));
  }
  userClient.createUser({ user: user }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.user;
    return next();
  });
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "User ID is required"));
  }
  if (!userData) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "User data is required"));
  }
  userClient.updateUser({ userId: id, user: userData }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.user;
    return next();
  });
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad content", "User ID is required"));
  }
  userClient.deleteUser({ userId: id }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = { message: "User deleted successfully", userId: response.userId };
    return next();
  });
};
