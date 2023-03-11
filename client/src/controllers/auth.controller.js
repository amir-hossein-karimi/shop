const { authClient } = require("../connections/auth.client");
const { userClient } = require("../connections/user.client");
const ApiError = require("../errors/apiError");

class AuthController {
  login(req, reply) {
    authClient.login(req.body, (error, data) => {
      if (error) {
        console.log(error);
        throw new ApiError(500, "internal server error");
      } else {
        reply.send({
          success: true,
          statusCode: 200,
          data: {
            token: data?.token,
            refreshToken: data?.refreshToken,
          },
        });
      }
    });
  }

  register(req, reply) {
    const { username, password } = req.body;

    userClient.createUser(
      { username, password, role: "USER" },
      (error, data) => {
        if (error && !data.success) {
          console.log("error", error);
          throw new ApiError(500, "internal server error");
        } else {
          reply.send({
            success: true,
            statusCode: 201,
            data: {
              message: "user create successfully",
            },
          });
        }
      }
    );
  }
}

module.exports = {
  AuthController: new AuthController(),
};
