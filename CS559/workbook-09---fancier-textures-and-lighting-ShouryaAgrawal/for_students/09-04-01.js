// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");



//       const vertices = new Float32Array( [
//         //front
//         -15, -15,  15,  // 0 
//         15, -15,  15,  // 1       
//         -15,  15,  15,  // 2

//         15,15,15,
//         15,-15,15,
//         -15,  15,  15, 

//         //top
//         -15, 15,  15,
//         -15,15,-15,
//         15,15,-15,


//         15,15,-15,
//         15,15,15,
//         -15,15,15,

//         // back
//         -15,  15,  -15,
//          -15, -15,  -15,  // 0
//         15, -15,  -15,  // 1
//           // 2

//         15,-15,-15,
//         15,15,-15,
//         -15,  15,  -15, 

//         //bott
//         -15,-15,-15,
//         -15,-15,15,
//         15,-15,15,

//         15,-15,15,
//         15,-15,-15,
//         -15,-15,-15,

//         //left
//         -15,15,-15,
//         -15,-15,-15,
//         -15,-15,15,

//         -15,-15,15,
//         -15,15,15,
//         -15,15,-15,

//         //right

//         15,15,15,
//         15,-15,15,
//         15,-15,-15,

//         15,-15,-15,
//         15,15,-15,
//         15,15,15,

//         // 1,  2,  1,  // 3
//         // -1, 0, -1,  // 4
//         // 1, 0, -1,  // 5
//         // -1,  2, -1,  // 6
//         // 1,  2, -1,  // 7
          
//       ]);

  let tl = new T.TextureLoader().load("../images/fin.jpg");
  let t2 = new T.TextureLoader().load("../images/book.jpg");
  const geometry = new T.SphereGeometry( 15 );
  const box = new T.SphereGeometry( 1 );
  let material = new T.MeshStandardMaterial({
    color: "white",
    roughness: 0.75,
    map: tl,
    side: T.DoubleSide
    });
let material2 = new T.MeshStandardMaterial({
color: "white",
roughness: 0.75,
map: t2,
side: T.DoubleSide
});
const sphere = new T.Mesh( geometry, material );
const b = new T.Mesh( box, material2 );
const c = new T.Mesh( box, material2 );
b.translateY(1);
c.translateX(3);
c.translateY(1);
  let world = new GrWorld({ where: parentOfCanvas });
  world.scene.add( sphere );
  world.scene.add( b);
  world.scene.add( c);
world.go();

