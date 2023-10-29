function setup() { 
    createCanvas(400, 400); 
    strokeWeight(30); //Dette er hvor tyk linjen skal være
    } 
    function draw() { 
     background(70,20,70); //Baggrunds farve
     stroke(255,2,100); 
     line(40, 0, 70, height); //Laver en linje som er ligeså høj som baggrunden 
     if (mouseIsPressed) { //Ind bygget i js. Den betyder den lytter til hvis musen bliver presset ned
      if (mouseButton == LEFT) {  // Den er også indbygget i js. Hvis mussen er trykket ned og det er venstre knap så gør:
       stroke(255); 
      } 
      else { 
       stroke(0); //Hvis det ikke er venstre knap så lav det her
      } 
      line(0, 70, width, 50); //Når musseknappen bliver presset så lav linjen med længde af canvasen
      } 
    } 