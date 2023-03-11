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

  createUser(call, callBack) {
    const { username, password } = call.request;

    console.log({ username, password });

    callBack(null, {
      success: true,
    });
  }

  getOneUser() {}

  updateUser() {}

  deleteUser() {}
}

module.exports = {
  UserController: new UserController(),
};
