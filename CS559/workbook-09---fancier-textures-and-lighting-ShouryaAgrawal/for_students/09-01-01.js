// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");


export class Book extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      const vertices = new Float32Array( [
        //front
        -1, 0,  1,  // 0 
        1, 0,  1,  // 1       
        -1,  1/2,  1,  // 2

        1,1/2,1,
        1,0,1,
        -1,  1/2,  1, 

        //top
        -1, 1/2,  1,
        -1,1/2,-2,
        1,1/2,-2,


        1,1/2,-2,
        1,1/2,1,
        -1,1/2,1,

        // back
        -1,  1/2,  -2,
         -1, 0,  -2,  // 0
        1, 0,  -2,  // 1
          // 2

        1,0,-2,
        1,1/2,-2,
        -1,  1/2,  -2, 

        //bott
        -1,0,-2,
        -1,0,1,
        1,0,1,

        1,0,1,
        1,0,-2,
        -1,0,-2,

        //left
        -1,1/2,-2,
        -1,0,-2,
        -1,0,1,

        -1,0,1,
        -1,1/2,1,
        -1,1/2,-2,

        //right

        1,1/2,1,
        1,0,1,
        1,0,-2,

        1,0,-2,
        1,1/2,-2,
        1,1/2,1,

        // 1,  2,  1,  // 3
        // -1, 0, -1,  // 4
        // 1, 0, -1,  // 5
        // -1,  2, -1,  // 6
        // 1,  2, -1,  // 7
          
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array( [
        // 2/3,0,
        // 1,0,
        // 2/3,1/3,
        
        // 1,1/3,
        // 1,0,
        // 2/3,1/3,
        
        0,0,
        0,0,
        0,0,
        
        0,0,
        0,0,
        0,0,

        //
        5/9,0,
        5/9,1,
        1,1,
        
        1,1,
        1,0,
        5/9,0,
        
        //back
        // 2/3,2/3,
        // 2/3,1/3,
        // 1/3,1/3,

        // 1/3,1/3,
        // 1/3,2/3,
        // 2/3,2/3,
        
        0,0,
        0,0,
        0,0,
        
        0,0,
        0,0,
        0,0,

        //
        0,1,
        0,0,
        4/9,0,

        4/9,0,
        4/9,1,
        0,1,
        
        //left
        5/9,0,
        4/9,0,
        4/9,1,

        4/9,1,
        5/9,1,
        5/9,0,
        
       
        0,0,
        0,0,
        0,0,
        
        0,0,
        0,0,
        0,0,
        ]);
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let t1 = new T.TextureLoader().load("../images/bk.JPG");
      
        let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: t1,
        side: T.DoubleSide
        });
        //
        let mesh = new T.Mesh(geometry, material);
        //
        super("Book", mesh);
    }
  }
  let bb = new Book();
  let world = new GrWorld({ where: parentOfCanvas });
  world.add(bb);
  world.go();