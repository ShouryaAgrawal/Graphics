/*jshint esversion: 6 */
// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(600, 400);
document.body.appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera(
        40,
        renderer.domElement.width / renderer.domElement.height,
        1,
        1000
    );

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 0, 0);

// since we're animating, add OrbitControls
let controls = new OrbitControls(camera, renderer.domElement);

scene.add(new T.AmbientLight("white", 0.2));

// two lights - both a little off white to give some contrast
let dirLight1 = new T.DirectionalLight(0xf0e0d0, 1);
dirLight1.position.set(1, 1, 0);
scene.add(dirLight1);

let dirLight2 = new T.DirectionalLight(0xd0e0f0, 1);
dirLight2.position.set(-1, 1, -0.2);
scene.add(dirLight2);

// make a ground plane
let groundBox = new T.BoxGeometry(10, 0.1, 10);
let groundMesh = new T.Mesh(
        groundBox,
        new T.MeshStandardMaterial({ color: 0x88b888, roughness: 0.9 })
    );
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

// this is the part the student should change
//** GET RID OF THIS SILLY DONUT! Replace it with an aircraft*/

let tempGeom = new T.BoxGeometry(2, 2, 2);
//body
let tempMaterial = new T.MeshStandardMaterial({ color: "red" });
let tempMesh = new T.Mesh(tempGeom, tempMaterial);
//copter top
let prop = new T.BoxGeometry(10,0.5,0.5);
let tempMaterial2 = new T.MeshStandardMaterial({ color: "blue" });
let tempMesh2 = new T.Mesh(prop, tempMaterial2);

//copter bott
let propbt = new T.BoxGeometry(10,0.5,0.5);
let tempMaterialbot = new T.MeshStandardMaterial({ color: "blue" });
let tempMeshbot = new T.Mesh(propbt, tempMaterialbot);

//face
let tempFace = new T.ConeGeometry( 0.7, 1);
let tempMaterial3 = new T.MeshStandardMaterial({ color: "green" });
let tempMesh3 = new T.Mesh(tempFace, tempMaterial3);


//radar
const geocone= new T.ConeGeometry( 0.5, 1 );
const material4 = new T.MeshBasicMaterial( {color: "red"} );
const cone = new T.Mesh( geocone, material4 );

scene.add( cone );
cone.position.x = 1;
cone.position.y = 1;
cone.position.z = 1;
cone.geometry.rotateX( Math.PI / 2 );

scene.add(tempMesh);
tempMesh.scale.set(0.5, 0.5, 0.5);
tempMesh.position.y = 2;

scene.add(tempMesh2);
tempMesh2.scale.set(0.5, 0.5, 0.5);
tempMesh2.position.y = 1.5;

scene.add(tempMeshbot);
tempMeshbot.scale.set(0.5, 0.5, 0.5);
tempMeshbot.position.y = -1.0;


scene.add(tempMesh3);
tempMesh3.position.y = 0;
tempMesh3.position.z = 1;
//tempMesh3.rotateY(Math.PI/2);


tempMesh3.geometry.rotateX( Math.PI / 2 );
tempMesh.add(tempMesh2);
tempMesh.add(tempMeshbot);
tempMesh.add(tempMesh3);





let t2empGeom = new T.BoxGeometry(2, 2, 2);
//body
let t2empMaterial = new T.MeshStandardMaterial({ color: "yellow" });
let t2empMesh = new T.Mesh(t2empGeom, t2empMaterial);
//copter top
let p2rop = new T.BoxGeometry(10,0.5,0.5);
let t2empMaterial2 = new T.MeshStandardMaterial({ color: "orange" });
let t2empMesh2 = new T.Mesh(p2rop, t2empMaterial2);

//copter bott
let p2ropbt = new T.BoxGeometry(10,0.5,0.5);
let t2empMaterialbot = new T.MeshStandardMaterial({ color: "green" });
let t2empMeshbot = new T.Mesh(p2ropbt, t2empMaterialbot);

//face
let t2empFace = new T.ConeGeometry( 0.7, 1);
let t2empMaterial3 = new T.MeshStandardMaterial({ color: "pink" });
let t2empMesh3 = new T.Mesh(t2empFace, t2empMaterial3);


//radar
const g2eocone= new T.ConeGeometry( 0.5, 1 );
const m2aterial4 = new T.MeshBasicMaterial( {color: "yellow"} );
const c2one = new T.Mesh( g2eocone, m2aterial4 );

scene.add( c2one );
c2one.position.x = 3;
c2one.position.y = 1;
c2one.position.z = 3;
c2one.geometry.rotateX( Math.PI / 2 );

scene.add(t2empMesh);
t2empMesh.scale.set(0.5, 0.5, 0.5);
t2empMesh.position.y = 2;

scene.add(t2empMesh2);
t2empMesh2.scale.set(0.5, 0.5, 0.5);
t2empMesh2.position.y = 1.5;

scene.add(t2empMeshbot);
t2empMeshbot.scale.set(0.5, 0.5, 0.5);
t2empMeshbot.position.y = -1.0;


scene.add(t2empMesh3);
t2empMesh3.position.y = 0;
t2empMesh3.position.z = 1;
//tempMesh3.rotateY(Math.PI/2);


t2empMesh3.geometry.rotateX( Math.PI / 2 );
t2empMesh.add(t2empMesh2);
t2empMesh.add(t2empMeshbot);
t2empMesh.add(t2empMesh3);



// animation loop
function animateLoop(timestamp) {
    
    
    //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
    // move in a circle
    let theta = timestamp / 1000;
    let x = 3 * Math.cos(theta);
    let z = 3 * Math.sin(theta);

    tempMesh.lookAt(0,2,0);
    tempMesh.rotateY(90);
    

    let x2 = -3 * Math.cos(theta);
    let z2 = -3 * Math.sin(theta);
    tempMesh.position.x = x;
    tempMesh.position.z = z;

    tempMesh2.rotateY(0.4);
    tempMeshbot.rotateY(0.4);
    cone.lookAt(x,tempMesh.position.y,z);
    //cone.lookAt(5,0,0);
    t2empMesh.position.x = x2;
    t2empMesh.position.z = z2;

    t2empMesh2.rotateY(0.4);
    t2empMeshbot.rotateY(0.4);
    t2empMesh.lookAt(0,2,0);
    t2empMesh.rotateY(90);
    c2one.lookAt(x2,t2empMesh.position.y,z2);

    renderer.render(scene, camera);
    window.requestAnimationFrame(animateLoop);
  }
window.requestAnimationFrame(animateLoop);