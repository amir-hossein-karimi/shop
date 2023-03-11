const app = require("./src/config/server");
const { UserController } = require("./src/controller");

app({
  getAllUsers: UserController.getAllUsers,
  createUser: UserController.createUser,
  getOneUser: UserController.getOneUser,
  updateUser: UserController.updateUser,
  deleteUser: UserController.deleteUser,
});
