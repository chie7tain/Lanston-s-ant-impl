/* eslint-disable no-undef */
const Ant = require("./ant");
const Tile = require("./tile");
class Grid {
  tiles = [];

  ant;

  height = 0;

  width = 0;

  moves = 0;

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  init() {
    for (let x = 0; x < this.width; x += 1) {
      this.tiles[x] = [];

      for (let y = 0; y < this.height; y += 1) {
        const tile = new Tile();
        this.tiles[x][y] = tile;
      }
    }
    this.ant = new Ant();
    this.ant.x = this.width / 2;
    this.ant.y = this.height / 2;
  }

  move(context) {
    for (let i = 0; i < 100; i += 1) {
      const tile = this.tiles[this.ant.x][this.ant.y];

      if (tile.isAlive) {
        tile.setAlive(false);
        context.fillStyle = "blue";
        context.fillRect(this.ant.x, this.ant.y, 10, 10);
        this.ant.turnRight();
        this.ant.moveForward(this.width, this.height);
      } else {
        tile.setAlive(true);
        context.fillStyle = "gold";
        context.fillRect(this.ant.x, this.ant.y, 10, 10);
        this.ant.turnLeft();
        this.ant.moveForward(this.width, this.height);
      }
      context.fillStyle = "red";
      context.fillRect(this.ant.x, this.ant.y, 5, 5);
      this.moves += 1;
    }
  }
}
module.exports = Grid;
