const { createJWT } = require("../utils/jwt");

class AuthController {
  login(call, callBack) {
    const { username } = call.request;

    const userToken = createJWT({ username });
    const userRefreshToken = createJWT({ username }, true);

    callBack(null, { token: userToken, refreshToken: userRefreshToken });
  }
}

module.exports = {
  AuthController: new AuthController(),
};
