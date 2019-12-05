let toggle = false;
let lastCheck = 0;
let numDots;

var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11;
var currentTime;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  // createEasyCam();

  c1 = color(255, 255, 255, 180);
  c2 = color(24, 180, 245, 180);
  c3 = color(4, 172, 114, 180); //3time
  c4 = color(254, 242, 169, 180);
  c5 = color(1, 168, 239, 180);
  c6 = color(247, 206, 92, 180);
  c7 = color(21, 143, 200, 180);
  c8 = color(79, 67, 82, 180);
  c9 = color(211, 135, 35, 180);
  c10 = color(102, 136, 176, 180);
  c11 = color(190, 116, 105, 180); //twice
  c12 = color(79, 67, 82, 180);
  let currentTime = hour();
  console.log("Current Hour:" + currentTime);
}

let total = 25;
let lat = [];
for (let i = 0; i < total; i++) {
  lat.push(i);
}
lat = lat.map(a => (a * Math.PI) / total - Math.PI / 2);

let lon = [];
for (let i = 0; i < total; i++) {
  lon.push(i);
}
lon = lon.map((a, i) => (2 * a * Math.PI) / total - Math.PI);

let r = 120;
let dr = 1;
let x0 = [];
let y0 = [];
let z0 = [];
let dx_array = [];
let dy_array = [];
let dz_array = [];
let x0_draw = [];
let y0_draw = [];
let z0_draw = [];

for (let i = 0; i < total; i++) {
  for (let j = 0; j < total; j++) {
    let x = r * Math.sin(lon[i]) * Math.cos(lat[j]);
    let y = r * Math.sin(lon[i]) * Math.sin(lat[j]);
    let z = r * Math.cos(lon[i]);

    let dx = dr * Math.sin(lon[i]) * Math.cos(lat[j]);
    let dy = dr * Math.sin(lon[i]) * Math.sin(lat[j]);
    let dz = dr * Math.cos(lon[i]);

    x0.push(x);
    y0.push(y);
    z0.push(z);
    x0_draw.push(x);
    y0_draw.push(y);
    z0_draw.push(z);

    dx_array.push(dx);
    dy_array.push(dy);
    dz_array.push(dz);
  }
}

// console.log(dx_array);

// let x = startPoints[0][0];
// let y = startPoints[0][1];
// let z = startPoints[0][2];

numDots = total * total;

function draw() {
  background(0, 0);
  smooth();
  push();
  translate(-width / 2, -height / 2);
  TimetoGrad();
  pop();

  for (let i = 0; i < numDots; i++) {
    noFill();
    stroke(255);
    point(x0_draw[i], y0_draw[i], z0_draw[i]);
  }

  for (let i = 0; i < numDots; i++) {
    if (toggle) {
      x0_draw[i] += dx_array[i];
      y0_draw[i] += dy_array[i];
      z0_draw[i] += dz_array[i];
    } else {
      x0_draw[i] -= dx_array[i];
      y0_draw[i] -= dy_array[i];
      z0_draw[i] -= dz_array[i];
    }

    if (millis() > lastCheck + 1000) {
      toggle = !toggle;
      lastCheck = millis();
    }
  }

  //   console.log(r0);
}

function setGradient(color1, color2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(color1, color2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
function TimetoGrad() {
  let currentTime = hour();
  if (currentTime == 6) {
    setGradient(c1, c2);
  }
  if (currentTime == 7) {
    setGradient(c2, c2);
  }
  if (currentTime == 8) {
    setGradient(c2, c2);
  }
  if (currentTime == 9) {
    setGradient(c2, c3);
  }
  if (currentTime == 10) {
    setGradient(c3, c4);
  }
  if (currentTime == 11) {
    setGradient(c4, c5);
  }
  if (currentTime == 12) {
    setGradient(c5, c6);
  }
  if (currentTime == 13) {
    setGradient(c6, c7);
  }
  if (currentTime == 14) {
    setGradient(c7, c8);
  }
  if (currentTime == 15) {
    setGradient(c8, c9);
  }
  if (currentTime == 16) {
    setGradient(c9, c10);
  }
  if (currentTime == 17) {
    setGradient(c10, c11);
  }
  if (currentTime == 18) {
    setGradient(c5, c6);
  }
  if (currentTime == 19) {
    setGradient(c12, c11);
  }
  if (currentTime == 20) {
    setGradient(c11, c12);
  }
  if (currentTime == 21) {
    setGradient(c12, c11);
  }
  if (currentTime == 22) {
    setGradient(c11, c10);
  }
  if (currentTime == 23) {
    setGradient(c10, c9);
  }
  if (currentTime == 0) {
    setGradient(c9, c8);
  }
  if (currentTime == 1) {
    setGradient(c8, c7);
  }
  if (currentTime == 2) {
    setGradient(c7, c6);
  }
  if (currentTime == 3) {
    setGradient(c6, c5);
  }
  if (currentTime == 4) {
    setGradient(c5, c4);
  }
  if (currentTime == 5) {
    setGradient(c4, c3);
  }
  //console.log(currentTime);
}
