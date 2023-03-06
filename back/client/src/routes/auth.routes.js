const authRoutes = (fastify, options, done) => {
  fastify.get("/login", {
    handler: (req, reply) => {
      reply.send("this is auth login test");
    },
  });

  done();
};

module.exports = authRoutes;
