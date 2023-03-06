const { authClient } = require("../connections/auth.client");
const ApiError = require("../errors/apiError");

class AuthController {
  login(req, reply) {
    authClient.login(
      {
        username: "amir",
        password: "test",
      },
      (error, { token }) => {
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
      }
    );
  }

  register(req, reply) {
    reply.send("this is register");
  }
}

module.exports = {
  AuthController: new AuthController(),
};
