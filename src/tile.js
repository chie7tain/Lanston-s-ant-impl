/* eslint-disable no-undef */
class Tile {
  alive = false;

  setAlive(alive) {
    this.alive = alive;
  }

  get isAlive() {
    return this.alive;
  }
}
module.exports = Tile;
