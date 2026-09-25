const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 600;

    r.InitWindow(WIDTH, HEIGHT, "Circles");
    r.SetTargetFPS(60);
}

function sqr(value) {
    return value * value;
}

function isIntersecting(x1, y1, r1, x2, y2, r2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    const dr = r1 + r2;

    return sqr(dx) + sqr(dy) <= sqr(dr);
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

    const intersect = isIntersecting(circle1X, circle1Y, radius1, circle2X, circle2Y, radius2)
    const c = intersect ? r.RED : r.BLACK;

    r.DrawCircle(circle1X, circle1Y, radius1, c);
    r.DrawCircle(circle2X, circle2Y, radius2, c);

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
