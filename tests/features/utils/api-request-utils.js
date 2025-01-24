const request = require("supertest");
const { expect } = require("chai");
const gatewayEndpoint = "127.0.0.1:3000";

async function expectSuccessfulResponse(route, expectedBody) {
  await request(gatewayEndpoint)
    .get(route)
    .expect(200)
    .expect((res) => {
      Object.entries(expectedBody).forEach(([key, value]) => {
        expect(res.body[key]).to.deep.equal(value);
      });
    });
}

module.exports = { expectSuccessfulResponse };
