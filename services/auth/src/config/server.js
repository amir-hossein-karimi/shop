const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const { serviceUrl } = require("../../../constants");
const { AuthController } = require("../controllers");

// create proto path
const protoPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "proto",
  "auth.proto"
);

// load proto
const authProto = protoLoader.loadSync(protoPath);

// get proto package with gRPC
const { authPackage } = grpc.loadPackageDefinition(authProto);

const app = () => {
  // create a gRPC server
  const server = new grpc.Server();

  // add services to proto services
  server.addService(authPackage.AuthService.service, {
    login: AuthController.login,
  });

  // bind url and ServerCredentials and callBack
  server.bindAsync(
    serviceUrl,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        return console.log("grpc auth service error", err.message);
      }
      console.log("auth services run on", port);
      // start server is errors are clear
      server.start();
    }
  );
};

module.exports = app;