const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { SERVICE_URLS } = require("../../../services/constants");

const protoPath = path.join(__dirname, "..", "..", "..", "proto", "auth.proto");

const authProto = protoLoader.loadSync(protoPath);
const { authPackage } = grpc.loadPackageDefinition(authProto);

const authClient = new authPackage.AuthService(
  SERVICE_URLS.AUTH,
  grpc.credentials.createInsecure()
);

module.exports = {
  authClient,
};
