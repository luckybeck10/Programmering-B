var mass, fjeder, g, længde, v, s;
let y = 100;
let F = 0;
function setup() {
    createCanvas(600, 600)
    mass = 20
    fjeder = 10
    g = 9.82
    længde = 20
    s = 0
    
}

function draw() {
    background(255)
    s = s+1
    v = g*s/30
    y = y + v - F

    if( y > 100+længde) (
        F = fjeder*(y-100-længde)
    );


    fill("red")
    ellipse(300, y, 20, 20)
}

function kræft() {
    
}