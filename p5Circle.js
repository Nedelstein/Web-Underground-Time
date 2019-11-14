let toggle = false;
let lastCheck = 0;
let numDots;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  createEasyCam();
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
