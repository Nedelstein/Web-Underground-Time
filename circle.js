
let radius;
let startTime;

function setup() {
    let cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.id("myCanvas");
    // noStroke();
    // cnv.position(0, 0);
    // document.getElementById('container').appendChild(cnv.canvas);
    // radius = 400;
    // noCursor();


}

function draw() {
    background(127);
    // startTime = millis();
    // let timeElapsed = (startTime - millis());
    // radius = noise(sin(timeElapsed) * radius) + startTime;
    // noFill();
    // stroke(0);

    // radius = sin(startTime) * startTime;
    // console.log(radius);
    ellipse(window.innerWidth / 2, window.innerHeight / 2, radius, radius);
    // timieElapsed = 0;
    // startTime *= 0;


    // startTime = 0;


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}