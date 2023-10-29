let x;
let y;
let xspeed = 3;
let yspeed = 5;

function setup() { 
  createCanvas(400, 400);
  x = width / 2; //Giver en x værdien af canvasens længde / med 2, altså 200
  y = height / 2;
}

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) { //Hvis x bliver størrer eller mindre end canvasens længde 
    xspeed *= -1; // så sæt hastigheden til det modsatte som det før
  }

  if (y > height - 25 || y < 0 + 25) {
    yspeed *= -1;
  }
  
  //Move
  x += xspeed; //sæt x til hastigheden + den sidste værdie
  y += yspeed;
  circle(x, y, 50); //lave en cirkle med positionen x og y positionen halv af canvasen
}

//Tilføjet en y bevægelse