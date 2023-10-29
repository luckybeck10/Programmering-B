function setup() { 
    createCanvas(600, 400); //Angiver width og højde af canvas
  } 
  
  function draw() { 
    background(220);
    fill(255,0,0);
    noStroke();
    if (mouseX < width/3) { // Hvis musen kommer i den første trede dele af skærmen
      rect(0, 0, width/3, height); //Så laver den en firkant med højden af canvasen og længden af skærmen delt med 3
    }
    else if (mouseX <= width*2/3) { //Hvis musen kommer ind i området af skærmen der er den 1/3 del af skærmen gang 2
      rect(width/3, 0, width/3, height); //Så lave en firkant der har en position skærmens længde / 3
    }
    else {
      rect(width*2/3, 0, width/3, height); //Hvis ingen af de ting er rigtige så lav en firkant til venstre for den anden firkant
    }
  }

  // Width og height betyder højden og længden af canvasen