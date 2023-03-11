const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const { SERVICE_URLS } = require("../../../constants");

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

const app = (services) => {
  // create a gRPC server
  const server = new grpc.Server();

  // add services to proto services
  server.addService(authPackage.AuthService.service, services);

  // bind url and ServerCredentials and callBack
  server.bindAsync(
    SERVICE_URLS.AUTH,
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
