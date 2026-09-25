const r = require("raylib");
const geometry = require("./geometry");

const x = 0;
const y = 0;
const width = 200;
const height = 200;
const windowWidth = 700;
const windowHeight = 500;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, 'Center');
  r.SetTargetFPS(60);
}

function draw() {
  const x = geometry.calcOffset(windowWidth, width);
  const y = geometry.calcOffset(windowHeight, height);
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(x, y, width, height, r.WHITE);
  r.EndDrawing();
}


function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  draw,
  teardown,
};