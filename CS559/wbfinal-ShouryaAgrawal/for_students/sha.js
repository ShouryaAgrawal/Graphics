import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

export class Sha extends GrObject {
    constructor()  {
    //   let gp = new T.Object3D();
    
    //   let tl =new T.TextureLoader().load( "../examples/optsp.jpg");
     

      let shaderMat = shaderMaterial("./bird.vs", "./bird.fs", {
        side: T.DoubleSide,
        uniforms: {
          light: { value: new T.Vector3(1, 1, 1) },
          dark: { value: new T.Vector3(0.2, 0.2, 0.7) },
        },
      });
      let ufo = new T.CylinderGeometry( 1,4,4);
      let top = new T.SphereBufferGeometry(0.3);
      
      let mesh = new T.Mesh(ufo, shaderMat);
      super("UFO",mesh);
      //meshcyl.rotateY(Math.PI/2);
      mesh.position.set(-3,3,-12);
      this.ms = mesh;
     
      //meshb.rotateY(Math.PI/2);
      
       
    }
   stepWorld(){

    this.ms.rotateY(0.5);
   }
      
  }
  