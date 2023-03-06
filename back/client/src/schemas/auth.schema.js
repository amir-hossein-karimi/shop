const loginSchema = {
  response: {
    200: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        statusCode: {
          type: "integer",
        },
        data: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
          },
        },
      },
    },
  },
};

const loginPreHandlers = [
  (req, reply, next) => {
    console.log("first pre handler");
    next();
  },
  (req, reply, next) => {
    console.log("second pre handler");
    next();
  },
];

module.exports = {
  loginSchema,
  loginPreHandlers,
};
