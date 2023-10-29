let player1X, player1Y;
let player2X, player2Y;
let playerSize = 20;
let player1Score = 0;
let player2Score = 0;
let circleRadius = 20;
let circles = [];

function setup() {
  createCanvas(500, 400);
  player1X = random(50, width);
  player1Y = random(50, height);
  player2X = random(40, width);
  player2Y = random(40, height);
  speed = 10;

  // Generate initial random circles
  for (let i = 0; i < 10; i++) {
    generateRandomCircle();
  }
}

function draw() {
  background(255);

  // Draw player 1 (Circle)
  handlePlayerMovement(player1X, player1Y, 1);

  // Draw player 2 (Square)
  handlePlayerMovement(player2X, player2Y, 2);

  // Draw existing circles
  for (let circle of circles) {
    drawCircle(circle.x, circle.y);

    // Check for collision with players
    if (checkCollision(circle.x, circle.y, player1X, player1Y, playerSize, circleRadius)) {
      // Increase player 1 score, remove the circle, and generate a new one
      player1Score++;
      circles = circles.filter((c) => c !== circle);
      generateRandomCircle();
    }

    if (checkCollision(circle.x, circle.y, player2X, player2Y, playerSize, circleRadius)) {
      // Increase player 2 score, remove the circle, and generate a new one
      player2Score++;
      circles = circles.filter((c) => c !== circle);
      generateRandomCircle();
    }
  }

  // Display scores
  displayScore(player1Score, 1);
  displayScore(player2Score, 2);
}

function generateRandomCircle() {
  // Generate random coordinates within the canvas dimensions
  let x = random(width);
  let y = random(height);
  
  // Store the circle's position in the array
  circles.push({ x, y });
}

function drawCircle(x, y) {
  // Draw a circle at the given position
  fill(255, 255, 0);
  ellipse(x, y, circleRadius , circleRadius );
}

function handlePlayerMovement(x, y, player) {
  if (player === 1) {
    // Player 1 (Circle)
    if (keyIsDown(LEFT_ARROW)) {
      x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x += speed;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      y += speed;
    }
  } else if (player === 2) {
    // Player 2 (Square)
    if (keyIsDown(65)) {
      x -= speed;
    }
    if (keyIsDown(68)) {
      x += speed;
    }
    if (keyIsDown(87)) {
      y -= speed;
    }
    if (keyIsDown(83)) {
      y += speed;
    }
  }

  x = constrain(x, playerSize / 2, width - playerSize / 2);
  y = constrain(y, playerSize / 2, height - playerSize / 2);

  if (player === 1) {
    player1X = x;
    player1Y = y;
    fill(116, 119, 122);
    ellipse(player1X, player1Y, playerSize);
    fill(191, 80, 188);
    ellipse(player1X, player1Y - playerSize / 2, 10);
  } else if (player === 2) {
    player2X = x;
    player2Y = y;
    fill(116, 119, 122);
    rect(player2X, player2Y, playerSize, playerSize);
    fill(191, 80, 188);
    ellipse(player2X + playerSize / 2, player2Y, 10);
  }
}

function checkCollision(x1, y1, x2, y2, size, radius) {
  let distance = dist(x1, y1, x2, y2);
  if (distance <= (size) + radius - 20) {
    return true;
  } else {
    return false;
  }
}

function displayScore(score, player) {
  fill(0);
  textSize(20);
  text(`Player ${player} Score: ${score}`, 10, 30 * player);
}