const request = require("supertest");
const { expect } = require("chai");
const axios = require("axios");

const gatewayEndpoint = "http://127.0.0.1:3000";

async function expectSuccessfulRequest(
  method,
  route,
  token,
  expectedResponseCode,
  expectedResponseBody,
  requestBody = {},
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

/**
 * Expect a successful GET request to the gateway.
 * @param route The route of the request.
 * @param token The token to use for the request. Can be empty.
 * @param expectedResponseBody The expected response body.
 * @returns a promise that resolves successfully if the request is successful and the response matches the expected one.
 */
async function expectSuccessfulGetRequest(route, token, expectedResponseBody) {
  await expectSuccessfulRequest("get", route, token, 200, expectedResponseBody, {});
}

/**
 * Expect a successful POST request to the gateway.
 * @param route The route of the request.
 * @param token The token to use for the request. Can be empty.
 * @param requestBody The request body.
 * @param expectedResponseCode The expected response code.
 * @param expectedResponseBody The expected response body.
 * @returns a promise that resolves successfully if the request is successful and the response matches the expected one.
 */
async function expectSuccessfulPostRequest(route, token, requestBody, expectedResponseCode, expectedResponseBody) {
  await expectSuccessfulRequest("post", route, token, expectedResponseCode, expectedResponseBody, requestBody);
}

async function fetchSuccessfulRequest(method, route, token, requestBody = {}) {
  const config = {
    method,
    url: `${gatewayEndpoint}/${route}`,
    headers: { Authorization: `Bearer ${token}` },
    data: method === "post" || method === "put" ? requestBody : undefined,
  };
  const response = await axios(config);
  return response.data;
}

/**
 * Fetch a successful POST request to the gateway.
 * @param route The route of the request.
 * @param token The token to use for the request. Can be empty.
 * @param requestBody The request body.
 * @returns a promise that resolves successfully with the response data if the request is successful.
 */
async function fetchSuccessfulPostRequest(route, token, requestBody) {
  return await fetchSuccessfulRequest("post", route, token, requestBody);
}

/**
 * Fetch a successful PUT request to the gateway.
 * @param route The route of the request.
 * @param token The token to use for the request. Can be empty.
 * @param requestBody The request body.
 * @returns a promise that resolves successfully with the response data if the request is successful.
 */
async function fetchSuccessfulPutRequest(route, token, requestBody) {
  return await fetchSuccessfulRequest("put", route, token, requestBody);
}

/**
 * Fetch a successful GET request to the gateway.
 * @param route The route of the request.
 * @param token The token to use for the request. Can be empty.
 * @returns a promise that resolves successfully with the response data if the request is successful.
 */
async function fetchSuccessfulGetRequest(route, token) {
  return await fetchSuccessfulRequest("get", route, token);
}

module.exports = {
  expectSuccessfulGetRequest,
  expectSuccessfulPostRequest,
  fetchSuccessfulPutRequest,
  fetchSuccessfulPostRequest,
  fetchSuccessfulGetRequest,
};
