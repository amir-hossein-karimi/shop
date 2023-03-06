const loginSchema = {
  tags: ["auth"],
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
  body: {
    type: "object",
    required: ["username", "password"],
    properties: {
      username: {
        type: "string",
        description: "enter your username",
      },
      password: {
        type: "string",
        description: "enter your password",
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
