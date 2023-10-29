function setup() {
    createCanvas(600, 600)
    noStroke()
}

function draw() {
    background(color("#C179B9"))
    fill(color("#A42CD6"))
    if (mouseX > 300) {
        triangle(200, 350, 300, 200, 400, 350)
    }
    else {
        ellipse(300, 300, 100)
    }
}