const r = require('raylib');
const x = 0;
const y = 0;
const width = 200;
const height = 200;
const windowWidth = 700;
const windowHeight = 500;

function setup() {
    r.InitWindow(windowWidth, windowHeight, 'Center');
    r.SetTargetFPS(60);
}
function draw() {
    const x = center(windowWidth, width);
    const y = center(windowHeight, height);
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x, y, width, height, r.WHITE);
    r.EndDrawing();
}
function center(wSize, rSize) {
    return (wSize - rSize) >> 1;
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
