let toggle = false;
let lastCheck = 0;
let numDots;

var c0,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
  c34,
  c35,
  c36,
  c37,
  c38,
  c39,
  c40,
  c41;
var currentTime;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  c0 = color(0, 0, 12, 180); //hour0,23
  c1 = color(15, 15, 26, 180); //hour1&2&3 b
  c2 = color(30, 28, 36, 180); //hr1 end
  c3 = color(35, 35, 44, 180); //twice:hr2end hour4 b
  c4 = color(53, 53, 70, 180); //hr3end
  c5 = color(70, 70, 95, 180); //hour4en
  c6 = color(60, 60, 80, 180); //hour 5b
  c7 = color(107, 95, 132, 180); //hour 5end;
  c8 = color(67, 67, 90, 180); //hour 6b
  c9 = color(155, 104, 126, 180); //hour6end
  c10 = color(92, 95, 142, 180); //hour 7b
  c11 = color(172, 134, 159, 180); //hour7 end
  c12 = color(106, 135, 167, 180); //hour 8 b
  c13 = color(175, 137, 137, 180); //hour 8 end
  c14 = color(117, 152, 187, 180); //hr9b
  c15 = color(136, 142, 178, 180); //hour9en
  c16 = color(140, 176, 191, 180); //hour 10b
  c17 = color(117, 170, 192, 180); //hour 10end;
  c18 = color(121, 171, 191, 180); //hour 11b
  c19 = color(86, 160, 189, 180); //hour11end
  c20 = color(113, 168, 191, 180); //hour 12b
  c21 = color(51, 122, 153, 180); //hour 12en
  c22 = color(73, 146, 176, 180); //hour13 b
  c23 = color(37, 88, 126, 180); //hour 13end
  c24 = color(44, 143, 193, 180); //hour 14 b
  c25 = color(30, 82, 142, 180); //hour hour14 endi
  c26 = color(37, 88, 126, 180); //hour 15 b
  c27 = color(74, 97, 106, 180); // hour 15 end
  c28 = color(35, 71, 113, 180); // hour 16b
  c29 = color(121, 128, 94, 180); // hour 16 end
  c30 = color(37, 73, 113, 180); //hour 17 b
  c31 = color(167, 150, 76, 180); //hour 17 end
  c32 = color(31, 62, 97, 180); //hour 18 b
  c33 = color(141, 89, 56, 180); //hour 18 end
  c34 = color(26, 49, 62, 180); //hour 19 b
  c35 = color(124, 58, 24, 180); //hour 19 end
  c36 = color(18, 33, 41, 180); //hr 20b
  c37 = color(104, 52, 26, 180); //hr 20 end
  c38 = color(14, 21, 25, 180); // hr 21 b
  c39 = color(75, 38, 22, 180); //hr 21 end
  c40 = color(20, 16, 15, 180); //hr 22 b
  c41 = color(64, 33, 19, 180); //hr 22 end
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
  if (currentTime == 0) {
    setGradient(c0, c0);
  }
  if (currentTime == 1) {
    setGradient(c1, c2);
  }
  if (currentTime == 2) {
    setGradient(c1, c3);
  }
  if (currentTime == 3) {
    setGradient(c1, c4);
  }
  if (currentTime == 4) {
    setGradient(c3, c5);
  }
  if (currentTime == 5) {
    setGradient(c6, c7);
  }
  if (currentTime == 6) {
    setGradient(c8, c9);
  }
  if (currentTime == 7) {
    setGradient(c10, c11);
  }
  if (currentTime == 8) {
    setGradient(c12, c13);
  }
  if (currentTime == 9) {
    setGradient(c14, c15);
  }
  if (currentTime == 10) {
    setGradient(c16, c17);
  }
  if (currentTime == 11) {
    setGradient(c18, c19);
  }
  if (currentTime == 12) {
    setGradient(c20, c21);
  }
  if (currentTime == 13) {
    setGradient(c22, c23);
  }
  if (currentTime == 14) {
    setGradient(c24, c25);
  }
  if (currentTime == 15) {
    setGradient(c26, c27);
  }
  if (currentTime == 16) {
    setGradient(c28, c29);
  }
  if (currentTime == 17) {
    setGradient(c30, c31);
  }
  if (currentTime == 18) {
    setGradient(c32, c33);
  }
  if (currentTime == 19) {
    setGradient(c34, c35);
  }
  if (currentTime == 20) {
    setGradient(c36, c37);
  }
  if (currentTime == 21) {
    setGradient(c38, c39);
  }
  if (currentTime == 22) {
    setGradient(c40, c41);
  }
  if (currentTime == 23) {
    setGradient(c0, c0);
  }
  //console.log(currentTime);
}
