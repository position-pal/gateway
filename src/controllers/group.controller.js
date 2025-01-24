const groupClient = require("../grpc/clients/groupClient");
const HTTP_STATUS = require("./httpStatusCode");

exports.createGroup = (req, res, next) => {
  const groupData = req.body;

  groupClient.createGroup({ group: groupData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.CREATED).json(response.group);
  });
};

exports.getGroup = (req, res, next) => {
  const { id } = req.params;

  groupClient.getGroup({ groupId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json(response.group);
  });
};

exports.updateGroup = (req, res, next) => {
  const { id } = req.params;
  const groupData = req.body;

  groupClient.updateGroup({ groupId: id, group: groupData }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json(response.group);
  });
};

exports.deleteGroup = (req, res, next) => {
  const { id } = req.params;

  groupClient.deleteGroup({ groupId: id }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json({
      message: "Group deleted successfully",
      groupId: response.groupId,
    });
  });
};

exports.addMember = (req, res, next) => {
  const { id } = req.params;
  const user = req.body;

  groupClient.addMember({ groupId: id, user }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json(response.group);
  });
};

exports.removeMember = (req, res, next) => {
  const { id } = req.params;
  const user = req.body;

  groupClient.removeMember({ groupId: id, user }, (error, response) => {
    if (error) {
      return next(error);
    }
    res.status(HTTP_STATUS.OK).json(response.group);
  });
};
