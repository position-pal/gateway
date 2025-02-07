const groupClient = require("../grpc/clients/groupClient");
const {HTTP_STATUS} = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.createGroup = (req, res, next) => {
  const groupData = req.body;
  if (!groupData.name || !groupData.owner) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group name and owner are required"));
  }

  groupClient.createGroup({ group: groupData }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};

exports.getGroup = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }

  groupClient.getGroup({ groupId: id }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};

exports.updateGroup = (req, res, next) => {
  const { id } = req.params;
  const groupData = req.body;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!groupData) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group data is required"));
  }

  groupClient.updateGroup({ groupId: id, group: groupData }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};

exports.deleteGroup = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }

  groupClient.deleteGroup({ groupId: id }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = {
      message: "Group deleted successfully",
      groupId: response.groupId,
    };
    next();
  });
};

exports.addMember = (req, res, next) => {
  const { id } = req.params;
  const user = req.body;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!user || !user.id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User data is required"));
  }

  groupClient.addMember({ groupId: id, user }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};

exports.removeMember = (req, res, next) => {
  const { id } = req.params;
  const user = req.body;
  if (!id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!user || !user.id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User data is required"));
  }

  groupClient.removeMember({ groupId: id, user }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};
