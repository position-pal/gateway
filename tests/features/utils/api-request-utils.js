const request = require("supertest");
const { expect } = require("chai");
const axios = require("axios");

const gatewayEndpoint = "http://127.0.0.1:3000";

async function expectSuccessfulRequest(
  method,
  route,
  token,
  requestBody = {},
  expectedResponseCode,
  expectedResponseBody,
) {
  let req = request(gatewayEndpoint)[method](route).set("Authorization", `Bearer ${token}`);
  if (method === "post") {
    req = req.send(requestBody);
  }
  await req.expect(expectedResponseCode).expect((res) => {
    Object.entries(expectedResponseBody).forEach(([key, value]) => {
      expect(res.body[key]).to.deep.equal(value);
    });
  });
}

async function expectSuccessfulGetRequest(route, token, expectedResponseBody) {
  await expectSuccessfulRequest("get", route, token, {}, 200, expectedResponseBody);
}

async function expectSuccessfulPostRequest(route, token, requestBody, expectedResponseCode, expectedResponseBody) {
  await expectSuccessfulRequest("post", route, token, requestBody, expectedResponseCode, expectedResponseBody);
}

async function fetchSuccessfulRequest(method, route, token, requestBody = {}) {
  const config = {
    method,
    url: `${gatewayEndpoint}/${route}`,
    headers: { Authorization: `Bearer ${token}` },
    data: method === "post" ? requestBody : undefined,
  };
  const response = await axios(config);
  return response.data;
}

async function fetchSuccessfulPostRequest(route, token, requestBody) {
  return await fetchSuccessfulRequest("post", route, token, requestBody);
}

module.exports = { expectSuccessfulGetRequest, expectSuccessfulPostRequest, fetchSuccessfulPostRequest };
