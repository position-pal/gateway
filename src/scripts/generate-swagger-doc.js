const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = require("../config/swagger");

const swaggerSpec = swaggerJsdoc(swaggerOptions.options);

fs.writeFileSync("./swagger-output.json", JSON.stringify(swaggerSpec, null, 2), "utf-8");
console.log("Swagger documentation generated and saved to swagger-output.json");
