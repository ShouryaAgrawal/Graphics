

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { Box3, Group } from "../libs/CS559-Three/build/three.module.js";

export class Optsp extends GrObject {
  constructor(world)  {
    let gp = new T.Object3D();
    super("OpticalIllusion",gp);
    let tl =new T.TextureLoader().load( "./images/optsp.jpg");
    this.gp = gp;
    let bx = new T.BoxBufferGeometry( 5,5,0.1);
    let bxb = new T.BoxBufferGeometry( 0.2,5,0.1);
    let material = new T.MeshStandardMaterial({
      color: "#44a6e6",
      map:tl,
      });
    let materialb = new T.MeshStandardMaterial({
      color: "black",
      opacity:0.5,
      metalness:1.0,
      });
     
    let meshcyl = new T.Mesh(bx, material);
    let meshb = new T.Mesh(bxb, materialb);
    gp.add( meshb);
    gp.add( meshcyl);
    meshcyl.position.set(-10,5,12);
    meshcyl.rotateY(Math.PI/2);
    meshb.position.set(-10,2.5,12);
    //meshb.rotateY(Math.PI/2);
    
     
  }
  stepWorld(delta,timeOfDay){
    this.gp.children[1].rotateZ(0.1);
    //this.gp.objects[1].rotateZ(0.01);

  }
    
} 
