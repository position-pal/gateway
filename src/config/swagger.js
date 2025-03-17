module.exports = {
  options: {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Gateway API",
        version: "1.0.0",
        description: "Position Pal Gateway API",
      },
    },
    apis: ["./src/routes/*.js"],
  },
};
