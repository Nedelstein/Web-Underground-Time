function setup() {
    let cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.id("2dCanvas");
    noStroke();
    // cnv.position(0, 0);
    // document.getElementById('container').appendChild(cnv.canvas);
}

function draw() {

    // background(127);
    noFill();
    stroke(127);
    ellipse(window.innerWidth / 2, window.innerHeight / 2, 400, 400);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}