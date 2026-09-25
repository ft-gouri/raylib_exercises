const r = require('raylib');
const windowWidth = 600;
const windowHeight = 600;

const sourceX = 80;
const sourceY = 250;

const target1X = 500;
const target1Y = 210;

const target2X = 450;
const target2Y = 150;

function distance(x1, y1, x2, y2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return dx * dx + dy * dy;
}
function setup() {
    r.InitWindow(windowWidth, windowHeight, 'Target');
    r.SetTargetFPS(60);
}
function draw() {
    const d1 = distance(sourceX, sourceY, target1X, target1Y);
    const d2 = distance(sourceX, sourceY, target2X, target2Y);

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(sourceX, sourceY, 20, r.BLUE);
    r.DrawCircle(target1X, target1Y, 20, r.RED);
    r.DrawCircle(target2X, target2Y, 20, r.RED);

    if (d1 >= d2) {
        r.DrawLine(sourceX, sourceY, target2X, target2Y, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, target1X, target1Y, r.BLACK);
    }
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();

