let x, y, a, b, d, speed;
let x1, y1, a1, b1, d1;
let x2, y2, a2, b2, d2;

function setup() {
    createCanvas(500, 500)

    x = random(width)
    y = random(height)

    x1 = random(15, width)
    y1 = random(15, height)

    x2 = random(15, width)
    y2 = random(15, height)

    d = 30;
    d1 = 30;
    d2 = 30;
    speed = 5;

    a = speed;
    b = 0;

    a1 = speed - 5;
    b1 = speed + 1;

    a2 = speed;
    b2 = speed + 0.7;
}

function draw() {
    background(255)
    fill(255, 0, 100)
    if (play = true) {
    ellipse(x, y, d)
    x += a;
    y += b;
    borderCheck()

    fill(10, 255, 100)
    ellipse(x1, y1, d1) //ellipse 2
    x1 += a1;
    y1 += b1;
    borderCheck1()

    ellipse(x2, y2, d2) //ellipse 3
    x2 += a2;
    y2 += b2;
    borderCheck2()

    checkCollision(x1, y1, d, x2, y2, d)

}
}

function borderCheck() {
    if (x + d / 2 >= width) {
      a = -speed;
      b = 0;
    }
    if (x - d / 2 <= 0) {
      a = speed;
      b = 0;
    }
    if (y + d / 2 >= height) {
      a = 0;
      b = -speed;
    }
    if (y - d / 2 < 0) {
      a = 0;
      b = speed;
    }
}

function borderCheck1() {
    if (x1 > width - 15 || x1 < 0 + 15) {
        a1 = -a1;
      }
    
      if (y1 > height - 15 || y1 < 0 + 15) {
        b1 = -b1;
      }
}

function borderCheck2() {
    if (x2 > width - 15 || x2 < 0 + 15) {
        a2 = -a2;
      }
    
      if (y2 > height - 15 || y2 < 0 + 15) {
        b2 = -b2;
      }
}


function keyPressed() {
    if (keyCode == DOWN_ARROW) {
        b = speed;
        a = 0;
    }
    if (keyCode == UP_ARROW) {
        b = -speed;
        a = 0;
    }
    if (keyCode == LEFT_ARROW) {
        a = -speed;
        b = 0;
    }
    if (keyCode == RIGHT_ARROW) {
        a = speed;
        b = 0;
    }
}

function checkCollision(x1, y1, d1, x2, y2, d2) {
    let distance = dist(x, y, x1, y1);
    let distance1 = dist(x , y, x2, y2);
    if (distance <= d1 - 5 || distance1 <= d2 - 5) {
      noLoop();
      textSize(50)
      fill(0)
      text("Game Over", 120, 100);
    }
  }

  function restartGame() {

    x1 = random(15, width)
    y1 = random(15, height)

    x2 = random(15, width)
    y2 = random(15, height)

  
    loop(); // Resume the game loop
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      // Check if spacebar (keyCode 32) is pressed
      restartGame();
    } else {
      // Handle player movement
      if (keyCode === DOWN_ARROW) {
        b = speed;
        a = 0;
      }
      if (keyCode === UP_ARROW) {
        b = -speed;
        a = 0;
      }
      if (keyCode === LEFT_ARROW) {
        a = -speed;
        b = 0;
      }
      if (keyCode === RIGHT_ARROW) {
        a = speed;
        b = 0;
      }
    }
  }