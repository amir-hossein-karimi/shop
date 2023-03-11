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
  "user.proto"
);

// load proto
const userProto = protoLoader.loadSync(protoPath);

// get proto package with gRPC
const { userPackage } = grpc.loadPackageDefinition(userProto);

const app = (services) => {
  // create a gRPC server
  const server = new grpc.Server();

  // add services to proto services
  server.addService(userPackage.UserService.service, services);

  // bind url and ServerCredentials and callBack
  server.bindAsync(
    SERVICE_URLS.USER,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        return console.log("grpc user service error", err.message);
      }
      console.log("user services run on", port);
      // start server is errors are clear
      server.start();
    }
  );
};

module.exports = app;
