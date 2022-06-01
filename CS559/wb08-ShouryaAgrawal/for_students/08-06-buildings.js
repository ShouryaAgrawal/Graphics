/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { BoxBufferGeometry } from "../libs/CS559-Three/build/three.module.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

export class b1 extends GrObject {
    constructor(df=false) {
      let geometry = new T.BufferGeometry();
      let diff = df;
      const gp = new T.Group();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      
    
      const vertices = new Float32Array( [
        //front
        -1,0,1,  // 0 
        1,0,1,  // 1       
        -1,2,  1,  // 2

        1,2,1,
        1,0,1,
        -1,2,  1, 

        //top
        -1, 2,  1,
        -1,2,-1,
        1,2,-1,


        1,2,-1,
        1,2,1,
        -1,2,1,

        // back
        -1,2,-1,
        -1,0,-1,  // 0
        1,0,-1,  // 1
          // 2

        1,0,-1,
        1,2,-1,
        -1, 2,  -1, 

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
      ]);
      
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
      
        let uvs= new Float32Array( [
            0,0,
            1,0,
            0,1,
            
            1,1,
            1,0,
            0,1,
            
            //
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,
            
            
            //back
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,
            
            //bott
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,
            
            //left
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,

            //right
            1/3,1,
            2/3,1,
            2/3,2/3,
            
            2/3,2/3,
            1/3,2/3,
            1/3,1,
            
            ]);


    
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let tl = new T.TextureLoader().load("../images/redtext.PNG");
        let t2 = new T.TextureLoader().load("../images/door.jpg");
        let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide,
        
        });
        let material2 = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.75,
            map: t2,
            side: T.DoubleSide,
            
            });
        //
        let meshbot = new T.Mesh(geometry, material2);
        let meshmid = new T.Mesh(geometry, material);
        let meshtop = new T.Mesh(geometry, material);
        let meshl = new T.Mesh(geometry, material);
        let meshr = new T.Mesh(geometry, material);
        meshbot.position.set(0,0,0);
        meshmid.position.set(0,1,0);
        meshtop.position.set(0,2,0);
        meshl.position.set(-1,1,0);
        meshr.position.set(1,1,0);

        meshr.scale.set(0.5,0.5,0.5);
        meshbot.scale.set(0.5,0.5,0.5);
        meshmid.scale.set(0.5,0.5,0.5);
        meshtop.scale.set(0.5,0.5,0.5);
        meshl.scale.set(0.5,0.5,0.5);
    
        gp.add( meshbot );
        gp.add( meshmid );
        gp.add( meshtop );
        gp.add( meshl );
        gp.add( meshr );
        //
      
        super("b1", gp);
    }
  }


  
export class b2 extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry();
      let geometry2 = new T.BufferGeometry();
      const gp = new T.Group();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      
    
      const vertices = new Float32Array( [
        //front
        -1,0,1,  // 0 
        1,0,1,  // 1       
        -1,2,  1,  // 2

        1,2,1,
        1,0,1,
        -1,2,  1, 

        // back
        -1,2,-1,
        -1,0,-1,  // 0
        1,0,-1,  // 1
          // 2

        1,0,-1,
        1,2,-1,
        -1, 2,  -1, 

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
      ]);
      
      const vertices2 = new Float32Array( [ 
          //top
      -1, 2, 1,
      0,4,0,
      1,2,1,


      1,2,1,
      0,4,0,
      1,2,-1,
      
      1,2,-1,
      0,4,0,
      -1,2,-1,
      
      -1,2,-1,
      0,4,0,
      -1,2,1,]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
      geometry2.setAttribute('position',new T.BufferAttribute(vertices2,3));
      geometry2.computeVertexNormals();
      
      
        let uvs= new Float32Array( [
            1/4,0,
            2/4,0,
            1/4,1/3,
            
            2/4,1/3,
            2/4,0,
            1/4,1/3,
            
            
            //
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
              1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
              1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            1/4,1,
            1/4,2/3,
            2/3.5,2/3,
            
            
            ]);


       
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
        geometry2.setAttribute('uv',new T.BufferAttribute(uvs,2));
        let tl = new T.TextureLoader().load("../images/house.gif");
        let t2 = new T.TextureLoader().load("../images/chim.PNG");
        let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide,
        
        });
        let material2 = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.75,
            map: t2,
            side: T.DoubleSide,
            
            });
        //
        let meshbot = new T.Mesh(geometry, material);
        let meshbot2 = new T.Mesh(geometry2, material2);
        meshbot.position.set(3,0,3);
        meshbot.scale.set(0.5,0.5,0.5);
        meshbot2.position.set(3,0,3);
        meshbot2.scale.set(0.5,0.5,0.5);
        gp.add( meshbot );
        gp.add( meshbot2 );
        
        //
      
        super("b2", gp);
    }
  }

  export class tree extends GrObject {
    constructor() {
      let geometry = new T.CylinderGeometry( 0.5, 0.5, 2);
      let geometry2 = new T.CylinderGeometry( 0.1, 1, 1);

      const gp = new T.Group();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      
        let tl = new T.TextureLoader().load("../images/house.gif");
        let t2 = new T.TextureLoader().load("../images/chim.PNG");
        let material = new T.MeshStandardMaterial({
        color: "brown",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide,
        
        });
        let material2 = new T.MeshStandardMaterial({
            color: "green",
            roughness: 0.75,
            map: t2,
            side: T.DoubleSide,
            
            });
        //
        let meshbot = new T.Mesh(geometry, material);
        let meshbot2 = new T.Mesh(geometry2, material2);
        meshbot.position.set(-3,0.5,3);
        meshbot.scale.set(0.5,0.5,0.5);
        meshbot2.position.set(-3,1,3);
        meshbot2.scale.set(0.5,0.5,0.5);
        gp.add( meshbot );
        gp.add( meshbot2 );
        
        //
      
        super("tree", gp);
    }
  }