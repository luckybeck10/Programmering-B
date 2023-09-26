var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(80, 250, 171);
  fill(116, 79, 176);
  ellipse(x,y,50,50);   
  if (x >= 400){
   x = 400; 
  }
  if (y <= 0){
    y = 0
  }
  if (x <= 0){
    x = 0; 
   }
   if (y >= 400){
     y = 400
   }
  if (keyCode === UP_ARROW) {
    y = y - 6;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 6;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 6;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 6;
  }
}