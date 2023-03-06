const { default: fastify } = require("fastify");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const { serverPort } = require("./constants");
const baseRoutes = require("./routes");

const app = fastify({ logger: true });

class Server {
  constructor() {
    this.configServer();
    this.configSwagger();
    this.configRoutes();
    this.configErrors();
  }

  async configServer() {
    app
      .listen({ port: serverPort })
      .then(() => {
        app.log.info(`server run on port ${serverPort}`);
      })
      .catch((err) => {
        app.log.error(err);
        process.exit(1);
      });
  }

  configSwagger() {
    app.register(fastifySwagger, {
      swagger: {
        info: {
          title: "authentication system",
        },
        securityDefinitions: {
          apiKey: {
            type: "apiKey",
            in: "header",
            name: "token",
          },
        },
        security: [
          {
            apiKey: [],
          },
        ],
      },
    });

    app.register(fastifySwaggerUi, {
      prefix: "/apis",
    });
  }

  configRoutes() {
    app.register(baseRoutes);
  }

  configErrors() {
    app.setErrorHandler((error, request, reply) => {
      reply.status(error?.statusCode || 500).send({
        success: false,
        status: error?.statusCode || 500,
        message: error?.message || "internal error",
      });
    });
  }
}

module.exports = Server;
