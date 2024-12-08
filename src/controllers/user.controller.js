const userClient = require('../grpc/clients/userClient');

exports.getUser = (req, res, next) => {
  const { id } = req.params;

  userClient.GetUser({ userId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.user);
  });
};

exports.createUser = (req, res, next) => {
  const userData = req.body;

  userClient.CreateUser({ user: userData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(201).json(response.user);
  });
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;

  userClient.UpdateUser({ userId: id, user: userData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response.user);
  });
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;

  userClient.DeleteUser({ userId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json({ message: 'User deleted successfully', userId: response.userId });
  });
};