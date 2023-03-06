class AuthController {
  login(call, callBack) {
    console.log(call.request);
    callBack(null, { token: "this is auth service token" });
  }
}

module.exports = {
  AuthController: new AuthController(),
};
