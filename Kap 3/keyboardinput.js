function setup() {
    createCanvas(600, 500)
}

function draw() {
    background(225)
    fill(300, 100, 200)
    if (keyIsDown(70)) {
        rect(200, 170, 200, 100)
    }
    else if (keyIsDown(69)) {
        ellipse(300, 250, 200, 100)
    }
    else if (keyIsDown(67)) {
        ellipse(300, 250, 100, 100)
    }
}