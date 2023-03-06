const app = require("./src/config/server");
const { AuthController } = require("./src/controller");

app({
  login: AuthController.login,
});
