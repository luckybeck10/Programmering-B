function setup() {
    createCanvas(600,400)
}

function draw() {
    background(25,342,245)
    frameRate(30)
    fill(255)
    rect(180, 60, 220, 50,)
    rect(180, 160, 220, 50,) 
    rect(180, 260, 220, 50,)
    rect(40, 60, 95, 50)
    fill(0)
    let musPosX = "Dine mus x-koordinater er " + mouseX
    let musPosY = "Dine mus y-koordinater er " + mouseY

    let PmusPosX = "Dine musses P-x-koordinater er " + pmouseX
    let PmusPosY = "Dine musses P-y-koordinater er " + pmouseY

    let musSpedX1 = sqrt((mouseX - pmouseX)**2+(mouseY - pmouseY)**2)
    let SpeedRounded = musSpedX1.toFixed(2);

    let fartX = mouseX - pmouseX
    let fartY = mouseY - pmouseY


    text(musPosX, 200, height/5);
    text(musPosY, 200, height/2.2);
    text(PmusPosX, 200, height/4);
    text(PmusPosY, 200, height/2);
    text("Din mus hastighed på er: " + SpeedRounded, 200, height/1.45)
    text("Fart for X: "+ fartX, 50, height/5.2)
    text("Fart for Y: "+ fartY, 50, height/4)
}