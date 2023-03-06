class UserController {
  getAllUsers(call, callBack) {
    callBack(null, {
      users: [
        {
          username: "x",
          password: "y",
          role: "z",
        },
      ],
    });
  }
}

module.exports = {
  UserController: new UserController(),
};
