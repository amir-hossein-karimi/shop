const { authClient } = require("../connections/auth.client");
const { userClient } = require("../connections/user.client");
const ApiError = require("../errors/apiError");

class AuthController {
  login(req, reply) {
    authClient.login(req.body, (error, { token }) => {
      if (error) {
        console.log(error);
        throw new ApiError(500, "internal server error");
      } else {
        reply.send({
          success: true,
          statusCode: 200,
          data: {
            token,
          },
        });
      }
    });
  }

  register(req, reply) {
    userClient.getAllUsers(null, (error, data) => {
      if (error) {
        console.log(error);
        throw new ApiError(500, "internal server error");
      } else {
        console.log(data);
        reply.send({
          success: true,
          statusCode: 200,
          data: {
            message: "user create successfully",
          },
        });
      }
    });
  }
}

module.exports = {
  AuthController: new AuthController(),
};
