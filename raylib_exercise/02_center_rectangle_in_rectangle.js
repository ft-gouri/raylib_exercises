const r = require('raylib');
const windowWidth = 700;
const windowHeight = 500;

const width1 = 300;
const height1 = 200;
const width2 = 90;
const height2 = 50;

function setup() {
    r.InitWindow(windowWidth, windowHeight, 'Center');
    r.SetTargetFPS(60);
}
function center(wSize, rSize) {
    return (wSize - rSize) >> 1;
}
function draw() {
    const x = center(windowWidth, width1);
    const y = center(windowHeight, height1);
    const x1 = center(windowWidth, width2);
    const y1 = center(windowHeight, height2);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width1, height1, r.WHITE);
    r.DrawRectangle(x1, y1, width2, height2, r.RED);
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
