const r = require('raylib');

const windowWidth = 600;
const windowHeight = 600;
r.InitWindow(windowWidth, windowHeight, 'Raylib');
r.SetTargetFPS(60);

let x = 10;
let y = 0;

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    let color = r.WHITE;

    if (x > 250 && y > 250) {
        color = r.RED;
    }

    r.DrawRectangle(x, y, 100, 100, color);

    if (y > windowHeight) y = -100;
    if (x > windowWidth) x = -100;

    x = x + 1;
    y = y + 1;

    r.EndDrawing();
}

r.CloseWindow();
