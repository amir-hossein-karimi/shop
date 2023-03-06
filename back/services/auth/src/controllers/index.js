class AuthController {
  login(call, callBack) {
    callBack(null, { token: "this is auth service token" });
  }
}

module.exports = {
  AuthController: new AuthController(),
};
