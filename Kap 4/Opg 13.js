let X, Y;
let size = 50;
let score = 0;
let multi = 2;
let plus = 1;

function setup() {
    createCanvas(500, 500)
    generateRandomCircle();
}

function draw() {
    background(255)
    drawCircle(X, Y, size);
    fill(0);
    textSize(20);
    text(score,250, 30,)

    
}

function mouseClicked() {
    if (checkCollision(mouseX, mouseY, X, Y, size / 2)) {
      generateRandomCircle();
      score++
    }
}

function generateRandomCircle() {
    X = random(width);
    Y = random(height);
}

function checkCollision(x1, y1, x2, y2, size) {
    let distance = dist(x1, y1, x2, y2);
    if (distance <= size) {
      return true;
    } else {
      return false;
    }
}

function drawCircle(x, y, size) {
    fill(112, 90, 77);
    ellipse(x, y, size, size);
}