const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 700;
const windowHeight = 500;

const width1 = 500;
const height1 = 400;
const scaleWidth = 0.8;
const scaleHeight = 0.8;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, 'Center');
  r.SetTargetFPS(60);
}

function draw() {
  const width2 = geometry.scale(scaleWidth, width1);
  const height2 = geometry.scale(scaleHeight, height1);
  const x = geometry.calcOffset(windowWidth, width1);
  const y = geometry.calcOffset(windowHeight, height1);
  const x1 = geometry.calcOffset(windowWidth, width2);
  const y1 = geometry.calcOffset(windowHeight, height2);
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawRectangle(x, y, width1, height1, r.WHITE);
  r.DrawRectangle(x1, y1, width2, height2, r.RED);
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