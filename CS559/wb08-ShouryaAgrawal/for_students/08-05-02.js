/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Domino here - it should be a subclass of GrObject

class Domino extends GrObject {
    constructor(df=false) {
      let geometry = new T.BufferGeometry();
      let diff = df;
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      
      const group = new T.Group();
      const vertices = new Float32Array( [
        //front
        -1,0,1,  // 0 
        1,0,1,  // 1       
        -1,1/2,  1,  // 2

        1,1/2,1,
        1,0,1,
        -1,1/2,  1, 

        //top
        -1, 1/2,  1,
        -1,1/2,-1,
        1,1/2,-1,


        1,1/2,-1,
        1,1/2,1,
        -1,1/2,1,

        // back
        -1,1/2,-1,
        -1,0,-1,  // 0
        1,0,-1,  // 1
          // 2

        1,0,-1,
        1,1/2,-1,
        -1, 1/2,  -1, 

        //bott
        -1,0,-1,
        -1,0,1,
        1,0,1,

        1,0,1,
        1,0,-1,
        -1,0,-1,

        //left
        -1,1/2,-1,
        -1,0,-1,
        -1,0,1,

        -1,0,1,
        -1,1/2,1,
        -1,1/2,-1,

        //right

        1,1/2,1,
        1,0,1,
        1,0,-1,

        1,0,-1,
        1,1/2,-1,
        1,1/2,1,
      ]);
      
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
      let uvs;
      if (diff == false){
        uvs = new Float32Array( [
        0,0,
        0,0,
        0,0,
        
        0,0,
        0,0,
        0,0,
        
        //
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        
        //back
        0,0,
        0,0,
        0,0,

        0,0,
        0,0,
        0,0,
        
        //
        0,0,
        0,0,
        0,0,

        0,0,
        0,0,
        0,0,
        
        //left
        0,0,
        0,0,
        0,0,
        0,0,
        0,0,
        0,0,
       
        0,0,
        0,0,
        0,0,
        0,0,
        0,0,
        0,0,
        ]);
    }
    else {
        uvs= new Float32Array( [
            0,0,
            0,0,
            0,0,
            
            0,0,
            0,0,
            0,0,
            
            //
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,
            
            
            //back
            0,0,
            0,0,
            0,0,
    
            0,0,
            0,0,
            0,0,
            
            //
            0,0,
            0,0,
            0,0,
    
            0,0,
            0,0,
            0,0,
            
            //left
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
           
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            0,0,
            ]);


    }
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let tl = new T.TextureLoader().load("../images/dice_texture.png");
        let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide
        });
        //
        let mesh1 = new T.Mesh(geometry, material);
        let mesh2 = new T.Mesh(geometry, material);
        mesh1.position.set(1,0,0);
        mesh2.position.set(3,0,0);
        group.add( mesh1 );
        group.add( mesh2 );
        //
        super("Domino", group);
    }
  }

  function shiftnr(grobj, x,y,ry) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateZ(y);
    grobj.objects[0].rotateZ(ry);
    return grobj;
  }

let world = new GrWorld();

let d1 = shiftnr(new Domino(), -1,0,0);
let d2 = shiftnr(new Domino(true), -1,3,0);

// let d3 = shiftnr(new Domino(true), -1,3,0);
// let d4 = shiftnr(new Domino(true), 1,3,0);
world.add(d1);
world.add(d2);
// world.add(d3);
// world.add(d4);
world.ambient.intensity = 0.6;
// put the domino into the world Here
// you can, of course, add more than 1

world.go();
