// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });

class Book extends GrObject {
    constructor(what) {
     let w = what;
      let geometry = new T.BufferGeometry();
      //
      let ss = new T.SpotLight("white",1,1);
      //scene.add( ss );
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

          
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array( [
        
        
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

        let tl = new T.TextureLoader().load("../images/red.PNG");
        let met = new T.TextureLoader().load("../images/metallic.jpg");
        let rgh = new T.TextureLoader().load("../images/roughness.jpg");
        let nml = new T.TextureLoader().load("../images/normal.jpg");
        let bmp = new T.TextureLoader().load("../images/bump.jpg");
        let material = new T.MeshStandardMaterial({
        color: "red",
        roughness: 0.75,
        metalness:1.0,
        metalnessMap:met,
        roughnessMap:rgh,
        normalMap:nml,
        map: tl,
        side: T.DoubleSide,
        visible: true,
        transparent: false,
        });
        let material2 = new T.MeshStandardMaterial({
            color: "red",
            roughness: 0.75,
            metalness:1.0,
            metalnessMap:met,
            roughnessMap:rgh,
            bumpMap:nml,
            map: tl,
            side: T.DoubleSide,
            visible: true,
            transparent: false,
            });
        //
        let mesh;
        if (w==0) mesh = new T.Mesh(geometry, material);
        else { mesh = new T.Mesh(geometry, material2);}

        //
        super("Book", mesh);
    }
  }
   
function shiftnr(grobj, x,y,ry) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].rotateZ(ry);
    return grobj;
  }


  
  let d1 = shiftnr(new Book(1), -1.5,0,0);
  let d2 = shiftnr(new Book(0), 1.5,0,0);
  let ss = new T.DirectionalLight("white",0.5);
  
  world.add(d1);
  world.add(d2);
  world.scene.add(ss);

  world.go();
