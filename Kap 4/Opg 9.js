let x = 100; 
let y = 100; // Sætter start positionen

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
    background(255)
  if (keyIsDown(LEFT_ARROW)) { 
    x -= 5; //Så længe venstre pil er nede så -5 til x-aksen
  }

  if (keyIsDown(RIGHT_ARROW)) { //Så længe venstre pil er nede så +5 til x-aksen
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) { //Så længe venstre pil er nede så -5 til y-aksen
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) { //Så længe venstre pil er nede så +5 til y-aksen
    y += 5;
  }

  clear();
  circle(x, y, 50); //Lave cirklen med de x og y kordinater.
}