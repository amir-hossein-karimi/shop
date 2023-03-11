const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { clientUrl } = require("../constants");

const protoPath = path.join(__dirname, "..", "..", "..", "proto", "user.proto");

const userProto = protoLoader.loadSync(protoPath);
const { userPackage } = grpc.loadPackageDefinition(userProto);

const userClient = new userPackage.UserService(
  "localhost:5002",
  grpc.credentials.createInsecure()
);

module.exports = {
  userClient,
};
