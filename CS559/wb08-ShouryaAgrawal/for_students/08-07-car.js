/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class Car extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry();
      let geometryb = new T.BufferGeometry();
       let geometryw = new T.BufferGeometry();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
      
      const group = new T.Group();
      const vertices = new Float32Array( [
        //front
        -1,0,1,  // 0 
        1,0,1,  // 1       
        -1,1,  1,  // 2

        1,1,1,
        1,0,1,
        -1,1,  1, 

        //top
        -1, 1,  1,
        -1,1,-1,
        1,1,-1,


        1,1,-1,
        1,1,1,
        -1,1,1,

        // back
        -1,1,-1,
        -1,0,-1,  // 0
        1,0,-1,  // 1
          // 2

        1,0,-1,
        1,1,-1,
        -1, 1,  -1, 

        //bott
        -1,0,-1,
        -1,0,1,
        1,0,1,

        1,0,1,
        1,0,-1,
        -1,0,-1,

        //left
        -1,1,-1,
        -1,0,-1,
        -1,0,1,

        -1,0,1,
        -1,1,1,
        -1,1,-1,

        //right

        1,1,1,
        1,0,1,
        1,0,-1,

        1,0,-1,
        1,1,-1,
        1,1,1,

       


      ]);

      const verticesb = new Float32Array( [

       // car bonet

       0,1.4,1,
       -1,1,1,
       0,0.4,1,
       
       0,1.4,-1,
       -1,1,-1,
       0,0.4,-1, 

       -1,1,1,
       -1,1,-1,
       0,1.4,-1,

       0,1.4,-1,
       0,1.4,1,
       -1,1,1,

       -1,1,1,
       -1,1,-1,
       0,0.4,-1,

       0,0.4,-1,
       0,0.4,1,
       -1,1,1,

       

    ]);
    const verticesw = new Float32Array( [
        0,1.4,1,
        1,2,1,
        1,2,-1,
        
        1,2,-1,
        0,1.4,-1,
        0,1.4,1,  ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
      geometryb.setAttribute('position',new T.BufferAttribute(verticesb,3));
      geometryb.computeVertexNormals();
      geometryw.setAttribute('position',new T.BufferAttribute(verticesw,3));
      geometryw.computeVertexNormals();
      let uvs;
     
        uvs = new Float32Array( [
            2/3,1/3,
            1,1/3,
            1,0,
            
            1,0,
            2/3,0,
            2/3,1/3,

            2/3,1/3,
            1,1/3,
            1,0,
            
            1,0,
            2/3,0,
            2/3,1/3,
                
        
        //
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
          2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        2/3,1/3,
        1,1/3,
        1,0,
        
        1,0,
        2/3,0,
        2/3,1/3,
        
        ]);
    

    
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
        geometryb.setAttribute('uv',new T.BufferAttribute(uvs,2));
        geometryw.setAttribute('uv',new T.BufferAttribute(uvs,2));
        let geomt = new T.CylinderGeometry( 0.5, 0.5, 0.5);
        let tl = new T.TextureLoader().load("../images/chim.PNG");
        let material = new T.MeshStandardMaterial({
        color: "blue",
        roughness: 0.75,
        map: tl,
        side: T.DoubleSide
        });
        let material2 = new T.MeshStandardMaterial({
            color: "black",
            roughness: 0.75,
            side: T.DoubleSide
        });

        let material3 = new T.MeshStandardMaterial({
            color:"white",
            opacity:0.0,
            roughness: 0.75,
            side: T.DoubleSide,
            map: tl,
            });
        //
        let mesh1 = new T.Mesh(geometry, material);
        let mesh2 = new T.Mesh(geometry, material);
        let mesht1 = new T.Mesh(geomt, material2);
        let mesht2 = new T.Mesh(geomt, material2);
        let mesht3 = new T.Mesh(geomt, material2);
        let mesht4 = new T.Mesh(geomt, material2);
        let meshb = new T.Mesh(geometryb, material);
        let meshw = new T.Mesh(geometryw, material3);
        mesh1.position.set(1,0.4,0);
        mesh2.position.set(3,0.4,0);

        mesht1.position.set(1,0.5,1);
        mesht1.rotateZ(Math.PI/2);
        mesht1.rotateX(Math.PI/2);
        mesht2.position.set(1,0.5,-1);
        mesht2.rotateZ(Math.PI/2);
        mesht2.rotateX(Math.PI/2);
        mesht3.position.set(3,0.5,1);
        mesht3.rotateZ(Math.PI/2);
        mesht3.rotateX(Math.PI/2);
        mesht4.position.set(3,0.5,-1);
        mesht4.rotateZ(Math.PI/2);
        mesht4.rotateX(Math.PI/2);



        group.add( mesh1 );
        group.add( mesh2 );
        group.add( mesht1 );
        group.add( mesht2 );
        group.add( mesht3 );
        group.add( mesht4 );
        group.add( meshb );
        group.add( meshw );
        //
        super("Car", group);
    }
  }