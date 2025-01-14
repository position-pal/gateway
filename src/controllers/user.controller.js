const userClient = require("../grpc/clients/userClient");
const HTTP_STATUS = require("./httpStatusCode");

exports.getUser = (req, res, next) => {
  const { id } = req.params;

  userClient.getUser({ userId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.CREATED).json(response.user);
  });
};

exports.createUser = (req, res, next) => {
  const userData = req.body;

  userClient.createUser({ user: userData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.CREATED).json(response.user);
  });
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;

  userClient.updateUser({ userId: id, user: userData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json(response.user);
  });
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;

  userClient.deleteUser({ userId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json({ message: "User deleted successfully", userId: response.userId });
  });
};
