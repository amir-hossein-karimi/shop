const { AuthController } = require("../controllers/auth.controller");
const { loginSchema, loginPreHandlers } = require("../schemas/auth.schema");

const authRoutes = (fastify, options, done) => {
  fastify.post("/login", {
    schema: loginSchema,
    preHandler: loginPreHandlers,
    handler: AuthController.login,
  });

  done();
};

module.exports = authRoutes;
