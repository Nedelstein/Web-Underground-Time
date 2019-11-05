// function init() {
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false });
var cube = new THREE.Mesh(geometry, material);


camera.position.z = 10;
// scene.add(cube);



var geometry = new THREE.CircleGeometry(2, 12);
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var circle = new THREE.Mesh(geometry, material);
scene.add(circle);
// }

var update = function () { }

var render = function () {
    renderer.render(scene, camera);
}

var GameLoop = function () {
    requestAnimationFrame(GameLoop);

    update();
    render();
}

GameLoop();

// init();