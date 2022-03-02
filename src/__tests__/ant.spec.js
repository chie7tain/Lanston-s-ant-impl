/* eslint-disable no-undef */

/**
 * @jest-environment jsdom
 */

const Ant = require("../ant");

// test Ant class
describe("Ant", () => {
  const ant = new Ant();
  test("should have a x and y position", () => {
    expect(ant.x).toBe(0);
    expect(ant.y).toBe(0);
  });
  test("should have a direction", () => {
    // const ant = new Ant();
    expect(ant.direction).toBe(0);
  });
  test("should have a moveForward method", () => {
    // const ant = new Ant();
    expect(ant.moveForward).toBeDefined();
  });
  test("should have a turnRight method", () => {
    // const ant = new Ant();
    expect(ant.turnRight).toBeDefined();
  });
  test("should have a turnLeft method", () => {
    // const ant = new Ant();
    expect(ant.turnLeft).toBeDefined();
  });
});

test("Ant class", () => {
  const ant = new Ant();
  expect(ant.x).toBe(0);
  expect(ant.y).toBe(0);
  expect(ant.antDir.up).toBe(0);
  expect(ant.antDir.right).toBe(1);
  expect(ant.antDir.down).toBe(2);
  expect(ant.antDir.left).toBe(3);
  expect(ant.direction).toBe(ant.antDir.up);
  expect(ant.moveForward).toBeDefined();
  expect(ant.turnRight).toBeDefined();
  expect(ant.turnLeft).toBeDefined();
});
