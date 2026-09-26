const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 600;
const windowHeight = 600;

const sourceX = 80;
const sourceY = 250;

const target1X = 500;
const target1Y = 210;

const target2X = 450;
const target2Y = 150;
function running() {
  return !r.WindowShouldClose();
}

function setup() {
  const WIDTH = 600;
  const HEIGHT = 600;
  r.InitWindow(WIDTH, HEIGHT, "Circles");
  r.SetTargetFPS(60);
}


function draw() {
  const circle1X = 200;
  const circle1Y = 150;
  const radius1 = 80;
  const circle2X = 340;
  const circle2Y = 150;
  const radius2 = 60;
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  const intersect = geometry.isIntersecting(circle1X, circle1Y, radius1, circle2X, circle2Y, radius2)
  const c = intersect ? r.RED : r.BLACK;
  r.DrawCircle(circle1X, circle1Y, radius1, c);
  r.DrawCircle(circle2X, circle2Y, radius2, c);
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