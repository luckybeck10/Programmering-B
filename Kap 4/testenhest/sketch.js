let bg;
let = e1, a, d, g, b, e2;
function setup() {
    createCanvas(514, 550)
    bg = loadImage('test.png')
    
    e1 = loadSound('e-string.mp3')
    a = loadSound('a2a.mp3')
    d = loadSound('D.mp3')
}

function draw() {
    background(50)
    image(bg,0,0)
    fill(0)
    textSize(30);
    text("X: "+ mouseX, 200, 200);
    text("Y: "+ mouseY, 200, 220)
   
    if(mouseIsPressed) {
    if(mouseX > 30 && mouseX < 55 && mouseY > 130) {
      e1.play();
    }
    }

    if(mouseIsPressed) {
      if(mouseX > 117 && mouseX < 136 && mouseY > 130) {
        a.play();
      }
      }

    if(mouseIsPressed) {
       if(mouseX > 206 && mouseX < 222 && mouseY > 130) {
          d.play();
        }
      }
}