const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { SERVICE_URLS } = require("../../../services/constants");

const protoPath = path.join(__dirname, "..", "..", "..", "proto", "user.proto");

const userProto = protoLoader.loadSync(protoPath);
const { userPackage } = grpc.loadPackageDefinition(userProto);

const userClient = new userPackage.UserService(
  SERVICE_URLS.USER,
  grpc.credentials.createInsecure()
);

module.exports = {
  userClient,
};
