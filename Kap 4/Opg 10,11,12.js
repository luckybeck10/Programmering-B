let x, y;
let x1, y1;
let speed;

function setup() {
    createCanvas(500, 400)
    x = random(50, width);
    y = random(50, height);
    x1 = random(40, width);
    y1 = random(40, height);
    speed = 5;
}

function draw() {
    background(255)
    //Circle
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

    fill(116, 119, 122)
    ellipse(x, y, 50);
    fill(191, 80, 188)
    ellipse(x, y-25, 15)

    //Square
    if (keyIsDown(65)) {
        x1 -= speed;
    }

    if (keyIsDown(68)) {
        x1 += speed;
    }
    
    if (keyIsDown(83)) {
        y1 += speed;
    }
    
    if (keyIsDown(87)) {
        y1 -= speed;
    }

    fill(116, 119, 122)
    rect(x1, y1, 40, 40)
    fill(191, 80, 188)
    ellipse(x1+20, y1, 15)

    x = constrain(x, 50 / 2, width - 50 / 2);
    y = constrain(y, 50 / 2, height - 50 / 2);
    x1 = constrain(x1, 0, width - 40);
    y1 = constrain(y1, 0, height - 40);

}