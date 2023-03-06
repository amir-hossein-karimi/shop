const app = require("./src/config/server");
const { UserController } = require("./src/controller");

app({
  getAllUsers: UserController.getAllUsers,
});
