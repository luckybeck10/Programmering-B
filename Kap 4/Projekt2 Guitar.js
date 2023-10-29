let bg;
function setup() {
    createCanvas(800, 800)
    bg = loadImage('test.png')
}

function draw() {
    background(50)
    image(bg,0,0)
}