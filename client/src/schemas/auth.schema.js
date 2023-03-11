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
            refreshToken: {
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

const registerSchema = {
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
            message: {
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

module.exports = {
  loginSchema,
  registerSchema,
};
