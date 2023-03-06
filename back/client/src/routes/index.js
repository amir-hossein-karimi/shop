const authRoutes = require("./auth.routes");

const baseRoutes = (fastify, options, done) => {
  fastify.register(authRoutes, { prefix: "/auth" });

  done();
};

module.exports = baseRoutes;
