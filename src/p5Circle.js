import p5 from "p5";

const containerElement = document.getElementById("p5-container");

const sketch = p5 => {
  var toggle = false;
  var lastCheck = 0;
  var numDots;

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

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    c0 = p5.color(0, 0, 12, 180); //hour0,23
    c1 = p5.color(15, 15, 26, 180); //hour1&2&3 b
    c2 = p5.color(30, 28, 36, 180); //hr1 end
    c3 = p5.color(35, 35, 44, 180); //twice:hr2end hour4 b
    c4 = p5.color(53, 53, 70, 180); //hr3end
    c5 = p5.color(70, 70, 95, 180); //hour4en
    c6 = p5.color(60, 60, 80, 180); //hour 5b
    c7 = p5.color(107, 95, 132, 180); //hour 5end;
    c8 = p5.color(67, 67, 90, 180); //hour 6b
    c9 = p5.color(155, 104, 126, 180); //hour6end
    c10 = p5.color(92, 95, 142, 180); //hour 7b
    c11 = p5.color(172, 134, 159, 180); //hour7 end
    c12 = p5.color(106, 135, 167, 180); //hour 8 b
    c13 = p5.color(175, 137, 137, 180); //hour 8 end
    c14 = p5.color(117, 152, 187, 180); //hr9b
    c15 = p5.color(136, 142, 178, 180); //hour9en
    c16 = p5.color(140, 176, 191, 180); //hour 10b
    c17 = p5.color(117, 170, 192, 180); //hour 10end;
    c18 = p5.color(121, 171, 191, 180); //hour 11b
    c19 = p5.color(86, 160, 189, 180); //hour11end
    c20 = p5.color(113, 168, 191, 180); //hour 12b
    c21 = p5.color(51, 122, 153, 180); //hour 12en
    c22 = p5.color(73, 146, 176, 180); //hour13 b
    c23 = p5.color(37, 88, 126, 180); //hour 13end
    c24 = p5.color(44, 143, 193, 180); //hour 14 b
    c25 = p5.color(30, 82, 142, 180); //hour hour14 endi
    c26 = p5.color(37, 88, 126, 180); //hour 15 b
    c27 = p5.color(74, 97, 106, 180); // hour 15 end
    c28 = p5.color(35, 71, 113, 180); // hour 16b
    c29 = p5.color(121, 128, 94, 180); // hour 16 end
    c30 = p5.color(37, 73, 113, 180); //hour 17 b
    c31 = p5.color(167, 150, 76, 180); //hour 17 end
    c32 = p5.color(31, 62, 97, 180); //hour 18 b
    c33 = p5.color(141, 89, 56, 180); //hour 18 end
    c34 = p5.color(26, 49, 62, 180); //hour 19 b
    c35 = p5.color(124, 58, 24, 180); //hour 19 end
    c36 = p5.color(18, 33, 41, 180); //hr 20b
    c37 = p5.color(104, 52, 26, 180); //hr 20 end
    c38 = p5.color(14, 21, 25, 180); // hr 21 b
    c39 = p5.color(75, 38, 22, 180); //hr 21 end
    c40 = p5.color(20, 16, 15, 180); //hr 22 b
    c41 = p5.color(64, 33, 19, 180); //hr 22 end
    var currentTime = p5.hour();
    console.log("Current Hour:" + currentTime);
  };

  var total = 25;
  var lat = [];
  for (var i = 0; i < total; i++) {
    lat.push(i);
  }
  lat = lat.map(a => (a * Math.PI) / total - Math.PI / 2);

  var lon = [];
  for (var i = 0; i < total; i++) {
    lon.push(i);
  }
  lon = lon.map((a, i) => (2 * a * Math.PI) / total - Math.PI);

  var r = 120;
  var dr = 1;
  var x0 = [];
  var y0 = [];
  var z0 = [];
  var dx_array = [];
  var dy_array = [];
  var dz_array = [];
  var x0_draw = [];
  var y0_draw = [];
  var z0_draw = [];

  for (var i = 0; i < total; i++) {
    for (var j = 0; j < total; j++) {
      var x = r * Math.sin(lon[i]) * Math.cos(lat[j]);
      var y = r * Math.sin(lon[i]) * Math.sin(lat[j]);
      var z = r * Math.cos(lon[i]);

      var dx = dr * Math.sin(lon[i]) * Math.cos(lat[j]);
      var dy = dr * Math.sin(lon[i]) * Math.sin(lat[j]);
      var dz = dr * Math.cos(lon[i]);

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

  numDots = total * total;

  p5.draw = () => {
    p5.image(vid, 0, 0); // draw the video frame to canvas
    p5.background(0, 0);
    p5.smooth();
    p5.push();
    p5.translate((p5.width * -1) / 2, (p5.height * -1) / 2);
    TimetoGrad();
    p5.pop();

    for (var i = 0; i < numDots; i++) {
      p5.noFill();
      p5.stroke(255);
      p5.point(x0_draw[i], y0_draw[i], z0_draw[i]);
    }

    for (var i = 0; i < numDots; i++) {
      if (toggle) {
        x0_draw[i] += dx_array[i];
        y0_draw[i] += dy_array[i];
        z0_draw[i] += dz_array[i];
      } else {
        x0_draw[i] -= dx_array[i];
        y0_draw[i] -= dy_array[i];
        z0_draw[i] -= dz_array[i];
      }

      if (p5.millis() > lastCheck + 1000) {
        toggle = !toggle;
        lastCheck = p5.millis();
      }
    }
  };

  function setGradient(color1, color2) {
    // noprotect
    p5.noFill();
    for (var y = 0; y < p5.height; y++) {
      var inter = p5.map(y, 0, p5.height, 0, 1);
      var c = p5.lerpColor(color1, color2, inter);
      p5.stroke(c);
      p5.line(0, y, p5.width, y);
    }
  }

  function TimetoGrad() {
    var currentTime = p5.hour();
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
};

new p5(sketch, containerElement);

// import styles from "./styles/styles.scss";

// var toggle = false;
// var lastCheck = 0;
// var numDots;

// var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11;
// var currentTime;

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight, WEBGL);
//   // createEasyCam();
//   console.log("working");

//   c1 = color(255, 255, 255, 180);
//   c2 = color(24, 180, 245, 180);
//   c3 = color(4, 172, 114, 180); //3time
//   c4 = color(254, 242, 169, 180);
//   c5 = color(1, 168, 239, 180);
//   c6 = color(247, 206, 92, 180);
//   c7 = color(21, 143, 200, 180);
//   c8 = color(79, 67, 82, 180);
//   c9 = color(211, 135, 35, 180);
//   c10 = color(102, 136, 176, 180);
//   c11 = color(190, 116, 105, 180); //twice
//   c12 = color(79, 67, 82, 180);
//   var currentTime = hour();
//   console.log("Current Hour:" + currentTime);
// }

// var total = 25;
// var lat = [];
// for (var i = 0; i < total; i++) {
//   lat.push(i);
// }
// lat = lat.map(a => (a * Math.PI) / total - Math.PI / 2);

// var lon = [];
// for (var i = 0; i < total; i++) {
//   lon.push(i);
// }
// lon = lon.map((a, i) => (2 * a * Math.PI) / total - Math.PI);

// var r = 120;
// var dr = 1;
// var x0 = [];
// var y0 = [];
// var z0 = [];
// var dx_array = [];
// var dy_array = [];
// var dz_array = [];
// var x0_draw = [];
// var y0_draw = [];
// var z0_draw = [];

// for (var i = 0; i < total; i++) {
//   for (var j = 0; j < total; j++) {
//     var x = r * Math.sin(lon[i]) * Math.cos(lat[j]);
//     var y = r * Math.sin(lon[i]) * Math.sin(lat[j]);
//     var z = r * Math.cos(lon[i]);

//     var dx = dr * Math.sin(lon[i]) * Math.cos(lat[j]);
//     var dy = dr * Math.sin(lon[i]) * Math.sin(lat[j]);
//     var dz = dr * Math.cos(lon[i]);

//     x0.push(x);
//     y0.push(y);
//     z0.push(z);
//     x0_draw.push(x);
//     y0_draw.push(y);
//     z0_draw.push(z);

//     dx_array.push(dx);
//     dy_array.push(dy);
//     dz_array.push(dz);
//   }
// }

// console.log(dx_array);

// // var x = startPoints[0][0];
// // var y = startPoints[0][1];
// // var z = startPoints[0][2];

// numDots = total * total;

// function draw() {
//   background(0);
//   smooth();
//   push();
//   translate(-width / 2, -height / 2);
//   TimetoGrad();
//   pop();

//   for (var i = 0; i < numDots; i++) {
//     noFill();
//     stroke(255);
//     point(x0_draw[i], y0_draw[i], z0_draw[i]);
//   }

//   for (var i = 0; i < numDots; i++) {
//     if (toggle) {
//       x0_draw[i] += dx_array[i];
//       y0_draw[i] += dy_array[i];
//       z0_draw[i] += dz_array[i];
//     } else {
//       x0_draw[i] -= dx_array[i];
//       y0_draw[i] -= dy_array[i];
//       z0_draw[i] -= dz_array[i];
//     }

//     if (millis() > lastCheck + 1000) {
//       toggle = !toggle;
//       lastCheck = millis();
//     }
//   }

//   //   console.log(r0);
// }

// function setGradient(color1, color2) {
//   // noprotect
//   noFill();
//   for (var y = 0; y < height; y++) {
//     var inter = map(y, 0, height, 0, 1);
//     var c = lerpColor(color1, color2, inter);
//     stroke(c);
//     line(0, y, width, y);
//   }
// }
// function TimetoGrad() {
//   var currentTime = hour();
//   if (currentTime == 6) {
//     setGradient(c1, c2);
//   }
//   if (currentTime == 7) {
//     setGradient(c2, c2);
//   }
//   if (currentTime == 8) {
//     setGradient(c2, c2);
//   }
//   if (currentTime == 9) {
//     setGradient(c2, c3);
//   }
//   if (currentTime == 10) {
//     setGradient(c3, c4);
//   }
//   if (currentTime == 11) {
//     setGradient(c4, c5);
//   }
//   if (currentTime == 12) {
//     setGradient(c5, c6);
//   }
//   if (currentTime == 13) {
//     setGradient(c6, c7);
//   }
//   if (currentTime == 14) {
//     setGradient(c7, c8);
//   }
//   if (currentTime == 15) {
//     setGradient(c8, c9);
//   }
//   if (currentTime == 16) {
//     setGradient(c9, c10);
//   }
//   if (currentTime == 17) {
//     setGradient(c10, c11);
//   }
//   if (currentTime == 18) {
//     setGradient(c5, c6);
//   }
//   if (currentTime == 19) {
//     setGradient(c12, c11);
//   }
//   if (currentTime == 20) {
//     setGradient(c11, c12);
//   }
//   if (currentTime == 21) {
//     setGradient(c12, c11);
//   }
//   if (currentTime == 22) {
//     setGradient(c11, c10);
//   }
//   if (currentTime == 23) {
//     setGradient(c10, c9);
//   }
//   if (currentTime == 0) {
//     setGradient(c9, c8);
//   }
//   if (currentTime == 1) {
//     setGradient(c8, c7);
//   }
//   if (currentTime == 2) {
//     setGradient(c7, c6);
//   }
//   if (currentTime == 3) {
//     setGradient(c6, c5);
//   }
//   if (currentTime == 4) {
//     setGradient(c5, c4);
//   }
//   if (currentTime == 5) {
//     setGradient(c4, c3);
//   }
//   //console.log(currentTime);
// }
