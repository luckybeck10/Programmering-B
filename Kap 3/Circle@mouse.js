function setup() {
    createCanvas(600, 500,)
}

function draw() {
    background(255)
    fill(321, 120, 234)
    //ellipse(mouseX, mouseY, 33, 33)
    line(mouseX, mouseY, pmouseX, pmouseY);
    if (mouseIsPressed == true) {
        if (mouseButton == LEFT) {
          rect(mouseX, mouseY, 60, 40)
        }
        else if (mouseButton == RIGHT) {
          ellipse(mouseX, mouseY, 33, 33)
        }
      }
      else {
      }

}
