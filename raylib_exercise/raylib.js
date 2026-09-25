const r = require('raylib');

r.InitWindow(600, 600, 'Raylib');
r.SetTargetFPS(60);

let x = 10;
let y = 10;

let speedX = 3;
let speedY = 3;

const rectSize = 100;

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    // Default color
    let color = r.WHITE;

    if (x >= 300 && y >= 300) {
        color = r.RED;
    }

    r.DrawRectangle(x, y, rectSize, rectSize, color);

    if (x + rectSize >= 600 || x <= 0) {
        speedX = -speedX;
    }

    if (y + rectSize >= 600 || y <= 0) {
        speedY = -speedY;
    }

    x += speedX;
    y += speedY;

    r.EndDrawing();
}

r.CloseWindow();