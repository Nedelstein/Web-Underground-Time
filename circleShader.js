function radian(degree) {
    var rad = degree * (Math.PI / 180);
    return rad;
}
function shaderProgram(gl, vs, fs) {
    var prog = gl.createProgram();
    var addshader = function (type, source) {
        var s = gl.createShader((type == 'vertex') ?
            gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            throw "Could not compile " + type +
            " shader:\n\n" + gl.getShaderInfoLog(s);
        }
        gl.attachShader(prog, s);
    };
    addshader('vertex', vs);
    addshader('fragment', fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw "Could not link the shader program!";
    }
    return prog;
}

function attributeSetFloats(gl, prog, attr_name, rsize, arr) {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr),
        gl.STATIC_DRAW);
    var attr = gl.getAttribLocation(prog, attr_name);
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, rsize, gl.FLOAT, false, 0, 0);
}

function draw() {
    try {
        var gl = document.getElementById("myCanvas")
            .getContext("webgl2");
        if (!gl) { throw "x"; }
    } catch (err) {
        throw "Your web browser does not support WebGL!";
    }
    gl.clearColor(0, 0, 0, 1); //background
    gl.clear(gl.COLOR_BUFFER_BIT);

    var prog = shaderProgram(gl,
        "attribute vec3 pos;" +
        "void main() {" +
        "	gl_Position = vec4(pos, 2.0);" +
        "}",
        "void main() {" +
        "	gl_FragColor = vec4(0.7, 0.5, 1.0, 1.0);" +
        "}"
    );
    gl.useProgram(prog);
    // attributeSetFloats(gl, prog, "pos", 3, [
    //	-1, 0, 0,  //P1
    //	0, 1, 0,  //P2
    //	0, -1, 0,  //P3
    //	1, 0, 0  //P4
    //]);
    //gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    var arrayradian = [];
    var rotationradian = [];
    // smaller the increase 
    for (var i = 0; i <= 360; i += 0.1) { //1, 5, 15 number of line draw 
        arrayradian.push(radian(i));
        //   rotationradian.push(0, 0, 0); //this will make it circle   
        //   rotationradian.push(0, 0, 0); //this will make it power
        rotationradian.push(Math.cos(radian(i)), Math.sin(radian(i)), 0);
    }
    // console.log(arrayradian);
    // console.log(rotationradian);
    // console.log(rotationradian.length / 3);
    /**   var x = radian(0); //degree * (Math.PI / 180);
       var bot = radian(15);
       var bothalf = radian(30);
       var half = radian(45);   
       var tophalf = radian(60);
       var top = radian(75);
       var y = radian(90);
       var lefthalf = radian(135);
       var leftx = radian(180);
       **/
    attributeSetFloats(gl, prog, "pos", 3,/** [// 3 the number of lines
       0,  0,  0,  //P1  1
 Math.cos(arrayradian[0]),  Math.sin(arrayradian[0]),  0,  //P1  2  0,  1,  0,
           0,  0,  0,  //P2  3
 Math.cos(arrayradian[1]),  Math.sin(arrayradian[1]),  0,  //P2  4  1,  0,  0,
       0,  0,  0,  //P3  5
 Math.cos(arrayradian[2]),  Math.sin(arrayradian[2]),  0,  //P3  6
         0,  0,  0,  //P4  7
 Math.cos(arrayradian[3]),  Math.sin(arrayradian[3]),  0,  //P4  8
       0,  0,  0,  //P5  9
 Math.cos(arrayradian[4]),  Math.sin(arrayradian[4]),  0,  //P5  10
       0,  0,  0,  //P6  11
 Math.cos(arrayradian[5]),  Math.sin(arrayradian[5]),  0,  //P6  12
       0,  0,  0,  //P7  13
 Math.cos(arrayradian[6]),  Math.sin(arrayradian[6]),  0,  //P7  14
       0,  0,  0,  //P8  15
 Math.cos(arrayradian[7]),  Math.sin(arrayradian[7]),  0,  //P8  16
       0,  0,  0,  //P9  17
 Math.cos(arrayradian[8]),  Math.sin(arrayradian[8]),  0,  //P9  18
     ]**/ rotationradian); // MY ONE
    gl.drawArrays(gl.LINES, 0, rotationradian.length / 3);
    //10 the THIRD parameter number of POINT/TWO POINT = VECTOR
}

// function init() {
//     try {
//         draw();
//     } catch (e) {
//         alert("Error: " + e);
//     }
// }
// setTimeout(init, 100);