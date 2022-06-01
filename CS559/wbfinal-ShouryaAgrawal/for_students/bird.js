import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";
// define your vehicles here - remember, they need to be imported
// into the "main" program
let bd = 0;
export class Bird extends GrObject {
    constructor(hv) {
      const group = new T.Group();  
      bd+=1;
      super(`Bird-${bd}`,group);
      this.gp = group;
      this.hv = hv;
       this.geometry = new T.BufferGeometry();
       this.geometrylw = new T.BufferGeometry();
       this.geometryrw = new T.BufferGeometry();
      //
      // while the two triangles have 4 certices, we need to split the vertices
      // so that they can have different normals
    
      
      const vertices = new Float32Array( [
        // 0,8,0,
        // 0.5,9,0,
        // 5,9,0,

        // 5,9,0,
        // 5,8,0,
        // 0,8,0,
        0,-1,0,
        0.5,0,0,
        5,0,0,

        5,0,0,
        5,-1,0,
        0,-1,0,
      
      ]);

      const verticeslw = new Float32Array( [

       // car bonet
        // 0.5,9,0,
        // 2,8,-3,
        // 5,9,0,
        0.5,0,0,
        2,-1,-3,
        5,0,0,

    ]);
    const verticesrw = new Float32Array( [
      0.5,0,0,
      2,-1,3,
      5,0,0,
        ]);
        this.geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        this.geometry.computeVertexNormals();
        this.geometrylw.setAttribute('position',new T.BufferAttribute(verticeslw,3));
        this.geometrylw.computeVertexNormals();
        this.geometryrw.setAttribute('position',new T.BufferAttribute(verticesrw,3));
        this.geometryrw.computeVertexNormals();

      let uvs;
     
      uvs = new Float32Array( [
          0,0,
          1,0,
          1,1,
          
          1,1,
          0,1,
          0,0,
          1,1,
          0,1,
          0,0, 
          1,1,
          0,1,
          0,0,
      ]);

      this.geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
      this.geometrylw.setAttribute('uv',new T.BufferAttribute(uvs,2));
      this.geometryrw.setAttribute('uv',new T.BufferAttribute(uvs,2));
      // this.geometry.center();
      // this.geometrylw.center();
      // this.geometryrw.center();
      let tl =new T.TextureLoader().load( "./images/birdbd.jpg");
        //let geomt = new T.CylinderGeometry( 0.5, 0.5, 0.5);
        let material = new T.MeshStandardMaterial({
        color: "#800000",
        roughness: 0.75,
        side: T.DoubleSide,
        map:tl
        });

        let material2 = new T.MeshStandardMaterial({
            map:tl,
            roughness: 0.75,
            side: T.DoubleSide
        });

        //
        this.mesh1 = new T.Mesh(this.geometry, material);
        //let mesh2 = new T.Mesh(geometry, material);
        // let mesht1 = new T.Mesh(geomt, material2);
        // let mesht2 = new T.Mesh(geomt, material2);
        // let mesht3 = new T.Mesh(geomt, material2);
        // let mesht4 = new T.Mesh(geomt, material2);
        this.meshb = new T.Mesh(this.geometrylw, material2);
        this.meshw = new T.Mesh(this.geometryrw, material2);
        //this.meshw.rotateX(1.5);
        //mesh1.add(group);
        this.gp.add(this.mesh1 );
        this.gp.add( this.meshb );
        this.gp.add( this.meshw );

        this.t = 0;
        // this.rwr = -Math.PI/2;
        // this.lwr = Math.PI/2;
        this.gp.children[1].rotateX(0.01);
        this.f = 0;
        this.ang = 0;
        this.act = 0;
    }
    stepWorld(delta,timeOfDay){
        this.t += delta/2000;
      //console.log(this.ang)
        if (this.ang <= -Math.PI/2){
          this.ang = -Math.PI/2 +0.001;
          this.f = 0;
          
        }
        else if (this.ang >= Math.PI/2){
          this.ang = Math.PI/2 - 0.001;
          this.f = 1;
         
        }
        else if (this.ang > -Math.PI/2 & this.ang < Math.PI/2){
          if (this.f == 0) {
            this.ang += 0.1;
            this.act = 0.1;}
          else{
            this.ang -= 0.1;
            this.act = -0.1;
          }
        }
        

        this.gp.position.set(10*Math.sin(this.t),this.hv,10*Math.cos(this.t));
        
        this.gp.children[1].rotateX(this.act);
        this.gp.children[2].rotateX(-this.act);
  }
}