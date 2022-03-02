/* eslint-disable no-undef */

const Grid = require("../grid");
// test Grid class
describe("Grid", () => {
  test("should have a width and height", () => {
    const grid = new Grid(10, 10);
    expect(grid.width).toBe(10);
    expect(grid.height).toBe(10);
  });
  test("should have a tiles array", () => {
    const grid = new Grid(10, 10);
    expect(grid.tiles).toBeDefined();
  });
  test("should have a init method", () => {
    const grid = new Grid(10, 10);
    expect(grid.init).toBeDefined();
  });
  test("should have a move method", () => {
    const grid = new Grid(10, 10);
    expect(grid.move).toBeDefined();
  });
});
