/* eslint-disable no-undef */
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const canvas = document.getElementById("grid");
const context = canvas.getContext("2d");

const Grid = require("./grid");

function moveAnt(grid) {
  grid.move(context);
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

const stopSimulation = () => {
  for (let i = 0; i < timerIds.length; i += 1) {
    clearInterval(timerIds[i]);
  }
  startBtn.classList.remove("hidden");
};

startBtn.addEventListener("click", startSimulation);
stopBtn.addEventListener("click", stopSimulation);
