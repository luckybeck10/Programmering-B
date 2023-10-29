let circleX, circleY;
let circleSize = 50;

function setup() {
  createCanvas(500, 400);
  generateRandomCircle();
}

function draw() {
  background(220);
  drawCircle(circleX, circleY, circleSize);
}

function mouseClicked() {
  if (checkCollision(mouseX, mouseY, circleX, circleY, circleSize / 2)) {
    generateRandomCircle();
  }
}

function generateRandomCircle() {
  circleX = random(width);
  circleY = random(height);
}

function drawCircle(x, y, size) {
  fill(255, 0, 0);
  ellipse(x, y, size, size);
}

function checkCollision(x1, y1, x2, y2, size) {
  let distance = dist(x1, y1, x2, y2);
  if (distance <= size) {
    return true;
  } else {
    return false;
  }
}