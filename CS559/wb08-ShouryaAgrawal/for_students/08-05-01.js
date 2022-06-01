/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Dice here - it should be a subclass of GrObject

class Dice extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      const vertices = new Float32Array( [
        //front
        -1, 0,  1,  // 0 
        1, 0,  1,  // 1       
        -1,  2,  1,  // 2

        1,2,1,
        1,0,1,
        -1,  2,  1, 

        //top
        -1, 2,  1,
        -1,2,-1,
        1,2,-1,


        1,2,-1,
        1,2,1,
        -1,2,1,

        // back
        -1,  2,  -1,
         -1, 0,  -1,  // 0
        1, 0,  -1,  // 1
          // 2

        1,0,-1,
        1,2,-1,
        -1,  2,  -1, 

        //bott
        -1,0,-1,
        -1,0,1,
        1,0,1,

        1,0,1,
        1,0,-1,
        -1,0,-1,

        //left
        -1,2,-1,
        -1,0,-1,
        -1,0,1,

        -1,0,1,
        -1,2,1,
        -1,2,-1,

        //right

        1,2,1,
        1,0,1,
        1,0,-1,

        1,0,-1,
        1,2,-1,
        1,2,1,

        // 1,  2,  1,  // 3
        // -1, 0, -1,  // 4
        // 1, 0, -1,  // 5
        // -1,  2, -1,  // 6
        // 1,  2, -1,  // 7
          
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array( [
        2/3,0,
        1,0,
        2/3,1/3,
        
        1,1/3,
        1,0,
        2/3,1/3,
        
        //
        2/3,2/3,
        2/3,1/3,
        1,1/3,
        
        1,1/3,
        1,2/3,
        2/3,2/3,
        
        //back
        2/3,2/3,
        2/3,1/3,
        1/3,1/3,

        1/3,1/3,
        1/3,2/3,
        2/3,2/3,
        
        //
        0,2/3,
        0,1/3,
        1/3,1/3,

        1/3,1/3,
        1/3,2/3,
        0,2/3,
        
        //left
        1/3,1,
        1/3,2/3,
        2/3,2/3,

        2/3,2/3,
        2/3,1,
        1/3,1,
        
       
        1/3,1/3,
        1/3,0,
        2/3,0,

        2/3,0,
        2/3,1/3,
        1/3,1/3
        ]);
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let tl = new T.TextureLoader().load("../images/dice_texture.png");
        let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide
        });
        //
        let mesh = new T.Mesh(geometry, material);
        //
        super("Dice", mesh);
    }
  }

 
function shiftnr(grobj, x,y,ry) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].rotateZ(ry);
    return grobj;
  }


  let world = new GrWorld();
  
  let d1 = shiftnr(new Dice(), -3,0,0);
  let d2 = shiftnr(new Dice(), 3,2,Math.PI);
  
  world.add(d1);
  world.add(d2);
  world.ambient.intensity = 0.6;
// put the two dice into the world Here
// don't forget to orient them so they have different numbers facing up

world.go();

