// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { setupBasicScene } from "./06-09-01-helpers.js";
import { MeshStandardMaterial } from "../libs/CS559-Three/build/three.module.js";
// students can use the object loader
// uncomment this if necessary
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

/** Setup the window */
/** @type{number} */
let wid = 670; // window.innerWidth;
/** @type{number} */
let ht = 500; // window.innerHeight;
/** @type{T.WebGLRenderer} */
let renderer = new T.WebGLRenderer();
renderer.setSize(wid, ht);
renderer.shadowMap.enabled = true;

document.getElementById("museum_area").appendChild(renderer.domElement);

/* setupBasicScene creates a scene and puts the pedestals in place */
/** @type{T.Scene} */
let scene = setupBasicScene();

// Here, we add a basic, simple first object to the museum.
/**@type{T.Material} */
let material = new T.MeshPhongMaterial({
  color: "#00aa00",
  shininess: 15,
  specular: "#00ff00",
});
/**@type{T.BufferGeometry} */
let geometry = new T.BoxGeometry(0.5, 0.5, 0.5);
/**@type{T.Mesh} */
let cube = new T.Mesh(geometry, material);
cube.position.set(2, 1.35, 2);
cube.rotation.set(Math.PI / 4, 0, Math.PI / 4);
cube.castShadow = true;

// TODO: You need to create three more objects, and place them on pedestals.


  /** @type {T.Object3D} */ let tpot;
  /** @type {OBJLoader} */ const teaLoader = new OBJLoader();

  teaLoader.load('./objects/07-teapot.obj', function (obj) {
    tpot = obj;
    obj.position.set(2, 1.55, -2); 
    obj.scale.set(0.025, 0.025, 0.025);

    
    scene.add(obj);
    let spotlight_2 = new T.SpotLight(0xaaaaff, 0.5);
    spotlight_2.angle = Math.PI / 16;
    spotlight_2.position.set(2, 5, -2);
    spotlight_2.castShadow = true;
    spotlight_2.target = tpot;
    scene.add(spotlight_2);
  
    tpot.traverse(child => {
      let tp = new T.MeshStandardMaterial({color : "brown",
      roughness :0.5,
      metalness : 1
      
    }) 

      if (child instanceof T.Mesh) {
         child.material = tp;
       }
     });    


  });

  /** @type {T.Object3D} */ let suzanne;
  /** @type {OBJLoader} */ const suLoader = new OBJLoader();
  
  suLoader.load('./objects/07-suzanne.obj', function (obj) {
    suzanne = obj;
 
    obj.position.set(-2, 1.65, -2);
    obj.scale.set(0.05, 0.05, 0.05);

    
    scene.add(obj);

    let spotlight_3 = new T.SpotLight(0xaaaaff, 0.5);
    spotlight_3.angle = Math.PI / 16;
    spotlight_3.position.set(-2, 5, -2.1);
    spotlight_3.castShadow = true;
    spotlight_3.target = suzanne;
    scene.add(spotlight_3);

    suzanne.traverse(child => {
      let susu = new T.MeshStandardMaterial({color : "red",
      roughness :0.5,
      metalness : 0.5,}) 
      if (child instanceof T.Mesh) {
         child.material =  susu;
       }
     });

  });
 
// Load the Ast
let astronaut;
const asLoader = new OBJLoader();
  /** @type {MeshStandardMaterial} */ const ast = new T.MeshStandardMaterial();

  ast.color = new T.Color("purple");
  ast.roughness = 0;
  ast.wireframe = true;

  asLoader.load('./objects/07-astronaut.obj', function (obj) {
    astronaut = obj;
    
    obj.position.set(-2, 2, 2); 
    obj.scale.set(0.2, 0.2, 0.2);
    
    scene.add(obj);

        
    let spotlight_4 = new T.SpotLight(0xaaaaff, 0.5);
    spotlight_4.angle = Math.PI / 16;
    spotlight_4.castShadow = true;
    spotlight_4.position.set(-2, 5, 2.1);

    spotlight_4.target = astronaut;
    scene.add(spotlight_4);

  astronaut.traverse(child => {
    let ast = new T.MeshStandardMaterial({color : "purple",
    roughness :0.5,
    wireframe : true
  }) 
    if (child instanceof T.Mesh) {
        child.material = ast;
      }
    });

  });

/* put a spotlight on the first object */
/**@type{T.SpotLight} */
let spotlight_1 = new T.SpotLight(0xaaaaff, 0.5);
spotlight_1.angle = Math.PI / 16;
spotlight_1.position.set(2, 5, 2);
spotlight_1.target = cube;
spotlight_1.castShadow = true;
scene.add(spotlight_1);



/** create a "main camera" */
/** @type{T.PerspectiveCamera} */
let main_camera = new T.PerspectiveCamera(60, wid / ht, 1, 100);
main_camera.position.set(0, 4, 6);
main_camera.rotation.set(-0.5, 0, 0);

/** this will be the "current camera" - we will switch when a button is pressed */
let active_camera = main_camera;

// TODO: You need to place these cameras.
let camera_1 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_1.position.set(0, 2.35, 0);
camera_1.lookAt(2, 1.35, 2);

let camera_2 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_2.position.set(2, 2, 0);


let camera_3 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_3.position.set(-2, 2, 0);


let camera_4 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_4.position.set(0, 2.35, 0);
camera_4.lookAt(-2, 1.35, 2);
scene.add(cube);

// add orbit controls - but only to the main camera
let controls = new OrbitControls(main_camera, renderer.domElement);

/** Tie the buttons to the cameras */
function setupCamButton(name, camera) {
  const button = document.getElementById(name);
  if (!(button instanceof HTMLButtonElement))
    throw new Error(`Button ${name} doesn't exist`);
  button.onclick = function () {
    active_camera = camera;
    renderer.render(scene, active_camera);
  };
}
setupCamButton("main_cam", main_camera);
setupCamButton("cam_1", camera_1);
setupCamButton("cam_2", camera_2);
setupCamButton("cam_3", camera_3);
setupCamButton("cam_4", camera_4);

// finally, draw the scene. Also, add animation.
renderer.render(scene, active_camera);

let lastTimestamp; // undefined to start



let fl =0;
let fl1 =0;
function animate(timestamp) {
  // Convert time change from milliseconds to seconds
  let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
  lastTimestamp = timestamp;

  // Animate the cube (basic object)
  cube.rotateOnWorldAxis(new T.Vector3(0, 1, 0), timeDelta);
  
  // TODO: animate your objects
  if (tpot) {
    
    tpot.rotateOnWorldAxis(new T.Vector3(1, 0, 0), timeDelta);
    tpot.rotateX(timeDelta*5);
  }
 
  if (suzanne) {
    
    suzanne.rotateOnWorldAxis(new T.Vector3(0,0, -0.5), timeDelta);
    
    if (suzanne.position.x >= -2.5 &&suzanne.position.x <= -1.5 ) {
      if (fl1 ==0) suzanne.position.x += timeDelta;
      else {
        suzanne.position.x -= timeDelta;
      }
    }
    else if (suzanne.position.x > -1.5){
      fl1 =1;
      suzanne.position.x= -1.6;
    }
    else if (suzanne.position.x< -2.5){
      fl1 =0;
      suzanne.position.x = -2.4;
    }
  
  }
  

  if (astronaut) {
    
    astronaut.rotateOnWorldAxis(new T.Vector3(0, 1, 0), timeDelta);
    
    if (astronaut.position.y >= 2 &&astronaut.position.y <= 4 ) {
      if (fl ==0) astronaut.position.y += timeDelta;
      else {
        astronaut.position.y -= timeDelta;
      }
    }
    else if (astronaut.position.y > 4){
      fl =1;
      astronaut.position.y = 3.8;
    }
    else if (astronaut.position.y < 2){
      fl =0;
      astronaut.position.y = 2.2;
    }
  
  }

  renderer.render(scene, active_camera);
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
