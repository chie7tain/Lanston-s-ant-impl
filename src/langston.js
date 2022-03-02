const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const canvas = document.getElementById("grid");
const context = canvas.getContext("2d");

class Tile {
  alive = false;

  setAlive(alive) {
    this.alive = alive;
  }

  get isAlive() {
    return this.alive;
  }
}

const antDir = {
  up: 0,
  right: 1,
  down: 2,
  left: 3,
};

export class Ant {
  x = 0;

  y = 0;

  direction = antDir.up; // the ant starts facing up

  moveForward(width, height) {
    switch (this.direction) {
      case antDir.up:
        this.x = (this.x - 1 + width) % width;
        break;
      case antDir.right:
        this.y = (this.y + 1 + height) % height;
        break;
      case antDir.down:
        this.x = (this.x + 1 + width) % width;
        break;
      case antDir.left:
        this.y = (this.y - 1 + height) % height;
        break;
      default:
        break;
    }
  }

  turnRight() {
    this.direction =
      (this.direction + 1 + (antDir.left + 1)) % (antDir.left + 1);
  }

  turnLeft() {
    this.direction =
      (this.direction - 1 + (antDir.left + 1)) % (antDir.left + 1);
  }
}

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

  move() {
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
      context.fillRect(this.ant.x, this.ant.y, 1, 1);
      this.moves += 1;
    }
  }
}

function moveAnt(grid) {
  grid.move();
  context.stroke();
  const moves = document.getElementById("moves");
  moves.innerHTML = grid.moves;
}

const timerIds = []; // saves the ids of the set interval functions

const startSimulation = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const grid = new Grid(canvas.width, canvas.height);
  grid.init();

  const timerId = setInterval(moveAnt, 1000 / 13, grid);
  timerIds.push(timerId);
  startBtn.classList.add("hidden");
};

startBtn.addEventListener("click", startSimulation);

const stopSimulation = () => {
  for (let i = 0; i < timerIds.length; i += 1) {
    clearInterval(timerIds[i]);
  }
  startBtn.classList.remove("hidden");
};
stopBtn.addEventListener("click", stopSimulation);
