const { AuthController } = require("../controllers/auth.controller");
const { loginSchema, registerSchema } = require("../schemas/auth.schema");

const authRoutes = (fastify, options, done) => {
  fastify.post("/login", {
    schema: loginSchema,
    handler: AuthController.login,
  });

  fastify.post("/register", {
    schema: registerSchema,
    handler: AuthController.register,
  });

  done();
};

module.exports = authRoutes;
