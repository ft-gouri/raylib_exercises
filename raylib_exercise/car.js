const r = require("raylib");

const windowWidth = 600;
const windowHeight = 800;

let carX = 275;
let carY = 700;

let enemyX = 150;
let enemyY = 0;

let gameOver = false;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Car Dodge");
    r.SetTargetFPS(60);
}

function update() {

    if (gameOver) {
        if (r.IsKeyPressed(r.KEY_SPACE)) {
            carX = 275;
            carY = 700;

            enemyX = 150;
            enemyY = 0;

            gameOver = false;
        }

        return;
    }

    if (r.IsKeyDown(r.KEY_LEFT)) {
        carX = carX - 5;
    }

    if (r.IsKeyDown(r.KEY_RIGHT)) {
        carX = carX + 5;
    }

    enemyY = enemyY + 5;

    if (enemyY > 800) {
        enemyY = 0;
        enemyX = r.GetRandomValue(50, 500);
    }

    if (
        carX < enemyX + 50 &&
        carX + 50 > enemyX &&
        carY < enemyY + 80 &&
        carY + 80 > enemyY
    ) {
        gameOver = true;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.GREEN);

    // Road
    r.DrawRectangle(50, 0, 500, 800, r.DARKGRAY);

    // Road markings
    r.DrawRectangle(290, 0, 10, 80, r.WHITE);
    r.DrawRectangle(290, 120, 10, 80, r.WHITE);
    r.DrawRectangle(290, 240, 10, 80, r.WHITE);
    r.DrawRectangle(290, 360, 10, 80, r.WHITE);
    r.DrawRectangle(290, 480, 10, 80, r.WHITE);
    r.DrawRectangle(290, 600, 10, 80, r.WHITE);
    r.DrawRectangle(290, 720, 10, 80, r.WHITE);

    if (gameOver) {
        r.DrawText("GAME OVER", 170, 350, 50, r.RED);
        r.DrawText("Press SPACE to restart", 150, 420, 20, r.WHITE);
    } else {
        r.DrawRectangle(carX, carY, 50, 80, r.BLUE);
        r.DrawRectangle(enemyX, enemyY, 50, 80, r.RED);
    }

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();