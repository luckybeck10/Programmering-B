var mass, fjeder, g, længde, v, pspeed;
let y = 100;
let F = 0;
let ypunkter = [y,y]
function setup() {
    createCanvas(600, 600)
    mass = 120
    fjeder = 0.01
    g = 9.82
    længde = 200
    s = 0
    
}

function draw() {
    frameRate(60)
    background(255)
    ypunkter.push([y])
    if( y > 100+længde) (
        F = fjeder*(y-(100+længde))
    )
        pspeed = ypunkter[1]-ypunkter[0]
    v = g/60+pspeed
    y = y+v-F
    ypunkter.shift([1])
    console.log(ypunkter[1])
    text("y punkter: "+(round(ypunkter[0],1)), 0, 10);
    text("y punkter: "+(round(ypunkter[1],1)), 0, 20);
    text("speed: "+(pspeed), 0, 30);
    fill("red")
    rect(width/2,100,0,y-100)
    ellipse(300, y, 20, 20)
    
}
