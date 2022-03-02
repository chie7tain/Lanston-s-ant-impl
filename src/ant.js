/* eslint-disable no-undef */
class Ant {
  x = 0;

  y = 0;

  antDir = {
    up: 0,
    right: 1,
    down: 2,
    left: 3,
  };
  direction = this.antDir.up; // the ant starts facing up

  moveForward(width, height) {
    switch (this.direction) {
      case this.antDir.up:
        this.x = (this.x - 1 + width) % width;
        break;
      case this.antDir.right:
        this.y = (this.y + 1 + height) % height;
        break;
      case this.antDir.down:
        this.x = (this.x + 1 + width) % width;
        break;
      case this.antDir.left:
        this.y = (this.y - 1 + height) % height;
        break;
      default:
        break;
    }
  }

  turnRight() {
    this.direction =
      (this.direction + 1 + (this.antDir.left + 1)) % (this.antDir.left + 1);
  }

  turnLeft() {
    this.direction =
      (this.direction - 1 + (this.antDir.left + 1)) % (this.antDir.left + 1);
  }
}
module.exports = Ant;
