// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";

let renderer = new T.WebGLRenderer();
renderer.setSize(400, 400);
document.getElementById("div1").appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera();
camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 3, 0);

// since we're animating, add OrbitControls
let controls = new OrbitControls(camera, renderer.domElement);

// Ambient light doesn't work since we're using physical materials
// scene.add(new T.AmbientLight("white",0.2));

//** STUDENT: Add some lights here */

// make a ground plane
let groundBox = new T.BoxGeometry(6, 0.1, 6);
let groundMesh = new T.Mesh(
groundBox,
new T.MeshStandardMaterial({ color: 0x888888 })
);
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

/**
 * Make some cubes in various places and orientations
 */


let box = new T.BoxGeometry(1, 1, 1);
let cube1 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
cube1.position.set(2, 0.5, 2);
scene.add(cube1);

let cube2 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
cube2.position.set(-2, 0.5, 2);
cube2.rotateY(45);
scene.add(cube2);

let cube3 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
cube3.position.y = 0.5;
scene.add(cube3);

let cube4 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
cube4.position.set(2, Math.sqrt(2) / 2, -2);
cube4.rotateX(45);
scene.add(cube4);

let cube5 = new T.Mesh(box, new T.MeshStandardMaterial({ color: "white" }));
cube5.position.set(-2, 1, -2);
scene.add(cube5);

let lastTimestamp; // undefined to start
// let spot1 = new T.SpotLight("aqua");
//   spot1.angle = Math.PI / 36; // narrow (5 degrees)
//   spot1.position.set(0, 4, 0);
//   spot1.target.position.set(2, 0, 0);
//   // we will use the target
//   scene.add(spot1.target);
//   scene.add(spot1);

let dir = new T.DirectionalLight("yellow", 1);
dir.position.set(5, 0, 0);
scene.add(dir);
let dir5 = new T.DirectionalLight("red", 1);
dir5.position.set(-5, 0, 0);
scene.add(dir5);

let dir2 = new T.DirectionalLight("aqua", 1);
dir2.position.set(0, 5, 0);
scene.add(dir2);

let dir3 = new T.DirectionalLight("green", 3);
dir3.position.set(0, 0, 5);
scene.add(dir3);

let dir4 = new T.DirectionalLight("purple", 1);
dir4.position.set(0, 0, -5);
/////dir4.target.position.set(1,0.25,0.5);
////scene.add(dir4.target);
scene.add(dir4);


function animate(timestamp) {
    // Convert time change from milliseconds to seconds
    let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
    lastTimestamp = timestamp;

    cube5.rotateX(0.5 * timeDelta);
    cube5.rotateY(0.5 * timeDelta);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

