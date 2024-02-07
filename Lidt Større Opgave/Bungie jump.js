//definerer variabler og arrays
var mass, fjeder, g, længde, v, pspeed, acc;
let y = 100;
let F = 0;
let ypunkter = [y,y]
let speedarray = [pspeed,pspeed,pspeed,pspeed,pspeed]
let run;
let inputG;
let inputF;
let glitch;

function setup() {
    createCanvas(600, 600)
    mass = 120
    fjeder = 0.1
    g = 9.82
    længde = 0
    s = 0

    //tager imod inputtet som brugeren vælger for tyngdeacceleration og fjederkraft
    inputG = createInput(9.82)
    inputG.position(10, 80)

    inputF = createInput(1)
    inputF.position(10, 140)


    let valG = inputG.value();

    //laver knappen som kører programmet med de nye parametre
    run = createButton("RUN")
    run.position(width/2-20, height-50)
    //genstarter programmet når der trykkes på knappen
    run.mousePressed(() => {
        y = 100;
        F = 0;

        mass = 120
        fjeder = (inputF.value())/10
        g = inputG.value()
        længde = 0
        s = 0
        
        ypunkter = [y,y]
    })
}

function draw() {
    frameRate(60)
    background(255)
    //tilføjer en ny variabel til arrayet over y punkter
    ypunkter.push([y])
    
    //kalder til funktionen bounce som er defineret længere nede
    bounce(y, længde, fjeder)

    //udregner hastigheden ved at bruge y punkter i de to sidste frames
    pspeed = ypunkter[1]-ypunkter[0]

    //tilføjer hastigheden til arrayet over hastigheden
    speedarray.push([pspeed])

    //ændrer y-værdien på baggrund af tyngdeaccelerationen og fjederkraften
    y = y+g/60+pspeed-F/mass

    //klader til graphics user interface funktionen som styrer alt det man kan se på skærmen
    GUI()
}
// funktionen bounce bruger vi til at udregne hvor meget snoren skal trække med på baggrund af Hookes lov
function bounce(y, længde, fjeder)
{
    if( y > 100+længde) {
      F = fjeder*(y-(100+længde))
}

}

function GUI() {
    //her shifter vi begge arrays en gang sådan at der altid er det samme antal variable i arrayerne
    ypunkter.shift([1])
    speedarray.shift([1])
    console.log(ypunkter[1])
    
    //de her to stykker text viser henholdsvis hvor højt oppe bolden er og hvor hurtigt den bevæger sig
    text("y punkter_0: "+(round(ypunkter[0],1)), 5, 15);
    text("speed: "+(pspeed), 5, 45);
    
    //de næste par linjer kode er slået fra fordi vi kun brugte dem til at debugge simulationen
    /* 
    text("y punkter_1: "+(round(ypunkter[1],1)), 5, 30);

    text("Speed_0: "+(round(speedarray[0],1)), 5, 180);
    text("Speed_1: "+(round(speedarray[1],1)), 5, 200);
    text("Speed_2: "+(round(speedarray[2],1)), 5, 220);
    text("Speed_3: "+(round(speedarray[3],1)), 5, 240);
    text("Speed_4: "+(round(speedarray[4],1)), 5, 260);
    */
    
    //viser hvor man ændrer fjederkraft og tyngdeacceleration
    textSize(15)
    text("Fjeder Kræft:", 2, 120, 200, 100)
    text("Tyngde Acceleration:", 2, 60, 200, 100)
    //tegner den røde bold og snoren 
    fill("red")
        rect(width/2,100,0,y-100)
        ellipse(300, y, 20, 20)
        
        //tjekker om bolden er stoppet ved at se om hastigheden skifter fortegn flere frames i streg
        if(speedarray[0]<0 && speedarray[1]>0 && speedarray[2]<0 && speedarray[3]>0 && speedarray[4]<0){
            //stopper animationen hvis bolden er stoppet. prøv fx at sætte fjederkræften til 100
            NoStroke
            }
        else if(speedarray[0]>0 && speedarray[1]<0 && speedarray[2]>0 && speedarray[3]<0 && speedarray[4]>0){
            NoStroke
            }
        }

    
