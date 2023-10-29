function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //Denne variable lytter til hvis man trykker på en knap på keyboardet
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } //Hvis knappen der er trykket er h eller H så tegner den en linje midt på canvasen
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } //Hvis knappen trykket er n eller N så tegn en diagonal linje på canvasen
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); // 2 parallelle linjer på skærmen
} 