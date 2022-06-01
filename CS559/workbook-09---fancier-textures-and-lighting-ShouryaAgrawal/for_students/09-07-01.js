// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import { SphereBufferGeometry } from "../libs/CS559-Three/build/three.module.js";
import * as Simple from "../libs/CS559-Framework/SimpleObjects.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas,groundplane: false});
let cubeCamera;

function test() {

const t2 = new T.CubeTextureLoader();
t2.setPath( '../images/' );
const env = t2.load( [
  'Bottom.png',
  'Back.png',
  'Top.png',
  'Front.png',
  'Right.png',
  'Left.png',
      
      ] );


world.scene.background = env;
const cubeRenderTarget = new T.WebGLCubeRenderTarget( 512 );
cubeRenderTarget.texture.type = T.HalfFloatType;
// Create cube camera
cubeCamera = new T.CubeCamera( 1, 1000, cubeRenderTarget );

let tl =new T.TextureLoader().load( "../images/fin.jpg");
// // Create car
let material = new T.MeshStandardMaterial( {
  envMap: cubeRenderTarget.texture,
  roughness: 0.05,
  metalness: 1,
  map:tl   
});

function anim(obj, speed = 0.7) {
  obj.stepWorld = function(delta, timeOfDay) {
    obj.objects.forEach(obj => obj.rotateX(((speed * delta) / 2000) * Math.PI/2));
    cubeCamera.update(world.renderer,world.scene)
  };
  return obj;
}

let carg = new SphereBufferGeometry(1);
const sph = new T.Mesh( carg, material );

world.scene.add(sph);

world.add(new GrObject("camera",[cubeCamera]));

world.add(anim(new Simple.GrCube({ x: 3, z: -1 })));
world.go();
}
test();