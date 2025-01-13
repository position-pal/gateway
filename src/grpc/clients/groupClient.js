const grpc = require("@grpc/grpc-js");
const { groupProto } = require("../proto");

const groupClient = new groupProto.GroupService(
  process.env.USER_SERVICE_URL || "localhost:50051",
  grpc.credentials.createInsecure(),
);

module.exports = {
  createGroup: (group, callback) => {
    groupClient.CreateGroup(group, callback);
  },
  getGroup: (groupId, callback) => {
    groupClient.GetGroup(groupId, callback);
  },
  updateGroup: (groupId, group, callback) => {
    groupClient.UpdateGroup(groupId, group, callback);
  },
  deleteGroup: (groupId, callback) => {
    groupClient.DeleteGroup(groupId, callback);
  },
  addMember: (groupId, user, callback) => {
    groupClient.AddMember(groupId, user, callback);
  },
  removeMember: (groupId, user, callback) => {
    groupClient.RemoveMember(groupId, user, callback);
  },
};
