const groupClient = require("../grpc/clients/groupClient");
const { HTTP_STATUS } = require("./httpStatusCode");
const HttpBaseError = require("../middlewares/errors/errors.utils");

exports.createGroup = (req, res, next) => {
  const groupData = req.body;
  if (!groupData.name || !groupData.createdBy) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group name and owner are required"));
  }
  groupClient.createGroup({ group: groupData }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    return next();
  });
};

exports.getGroup = (req, res, next) => {
  const { group } = req.params;
  if (!group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  groupClient.getGroup({ groupId: group }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    return next();
  });
};

exports.updateGroup = (req, res, next) => {
  const { group } = req.params;
  const groupData = req.body;
  if (!group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!groupData) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group data is required"));
  }
  groupClient.updateGroup({ groupId: group, group: groupData }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    return next();
  });
};

exports.deleteGroup = (req, res, next) => {
  const { group } = req.params;
  if (!group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  groupClient.deleteGroup({ groupId: group }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = {
      message: "Group deleted successfully",
      groupId: response.groupId,
    };
    return next();
  });
};

exports.addMember = (req, res, next) => {
  const { group } = req.params;
  const user = req.body;
  if (!group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!user || !user.id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User data is required"));
  }
  groupClient.addMember({ groupId: group, user: user }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    return next();
  });
};

exports.removeMember = (req, res, next) => {
  const { group } = req.params;
  const user = req.body;
  if (!group) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "Group ID is required"));
  }
  if (!user || !user.id) {
    return next(new HttpBaseError(HTTP_STATUS.BAD_REQUEST, "Bad request", "User data is required"));
  }
  groupClient.removeMember({ groupId: group, user: user }, (error, response) => {
    if (error) {
      return next(new HttpBaseError(HTTP_STATUS.GENERIC_ERROR, "Internal server error", "gRPC Error"));
    }
    res.locals.status = response.status;
    res.locals.data = response.group;
    next();
  });
};
