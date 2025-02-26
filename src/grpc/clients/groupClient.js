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
  updateGroup: (updateGroup, callback) => {
    groupClient.UpdateGroup(updateGroup, callback);
  },
  deleteGroup: (groupId, callback) => {
    groupClient.DeleteGroup(groupId, callback);
  },
  addMember: (addMember, callback) => {
    groupClient.AddMember(addMember, callback);
  },
  removeMember: (removeMember, callback) => {
    groupClient.RemoveMember(removeMember, callback);
  },
  getGroupsByEmail: (email, callback) => {
    groupClient.GetGroupsByEmail(email, callback);
  },
};
