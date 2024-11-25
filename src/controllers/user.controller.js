const userClient = require('../grpc/clients/userClient');

exports.getUser = (req, res, next) => {
  const { id } = req.params;

  userClient.GetUser({ id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(200).json(response);
  });
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;

  userClient.CreateUser({ name, email }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(201).json(response);
  });
};