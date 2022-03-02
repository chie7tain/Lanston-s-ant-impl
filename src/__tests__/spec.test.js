/* eslint-disable no-undef */
const { sum, subtract } = require("../math.js");

test("sum add numbers", async () => {
  const result = await sum(10, 20);
  expect(result).toBe(30);
});
test("subtract subtracts numbers", async () => {
  const result = await subtract(10, 20);
  expect(result).toBe(-10);
});
