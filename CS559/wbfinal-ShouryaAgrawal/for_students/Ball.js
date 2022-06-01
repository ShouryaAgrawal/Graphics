

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { Group } from "../libs/CS559-Three/build/three.module.js";


export class Ball extends GrObject {
    
    constructor() {
      let group = new T.Group();
    
      
     
      let ball = new T.SphereBufferGeometry(3, 20, 10);
      let ballMaterial = new T.MeshStandardMaterial({
        color: "orange",
        roughness: 0.9,
        metalness: 0.2,
      });

      let ballm = new T.Mesh(ball, ballMaterial);
      super("Ball", ballm);
      this.gp = ballm;
      ballm.position.x = 17;
      
      this.t = 0;
      this.c = 0;
    }
  
    stepWorld(delta, timeOfDay) {
      this.t+= delta/2000;
      this.gp.position.y =  2.2+ Math.abs(Math.sin(this.t)*10);
      if (Math.abs( this.gp.position.y) <=3){

        this.c+=1;
        if (this.c %2==0) this.gp.scale.set(0.1,0.1,0.1);
        else {
            this.gp.scale.set(0.5,0.5,0.5);
        }
      }
     this.gp.position.z = 5+ Math.cos(this.t) * 8;
    }
  }

export class Man extends Loaders.FbxGrObject {
    constructor(world,params ={})  {
      super({
        fbx: "./Man_In_Suit.fbx",
        norm: 2.0,
        name: "Man",
      });
      this.world = world;
      this.x = params.x;
      this.y = params.y;
      this.z = params.z;
      this.setScale(3);
      this.setPos(6,-0.15,0);
      
    }
     stepWorld(delta, timeOfDay){
      
      this.objects[0].rotateY(0.1);
  
    }
  }
  
  
  
  export class Skl extends Loaders.FbxGrObject {
    constructor(world)  {
      super({
        fbx: "./Skelton.fbx",
        norm: 2.0,
        name: "Skl",
      });
      this.world = world;
      this.setScale(2);
      this.setPos(-6,0,0);
      
    }
    stepWorld(delta, timeOfDay){
      
      this.setPos(-6,1.5*Math.sin(delta/100),0);
  
    }
  }
  //const loader = new GLTFLoader();
  
  let cb = 0;
  export class CyBox extends GrObject {
    constructor(world)  {
      
      let tl =new T.TextureLoader().load( "./images/wnorm2.jpg");
      let cy = new T.CylinderGeometry( 3,3,6);
      let material = new T.MeshStandardMaterial({
        color: "#44a6e6",
        opacity:0.5,
        normalMap:tl,
        alphaTest : 0.5,
         transparent: true
         
        //depthWrite :false
       // side:T.DoubleSide,
        });
     
      let meshcyl = new T.Mesh(cy, material);  
      let gp = new T.Group();
      gp.add(meshcyl);
        cb+=1;
      super(`CyBox-${cb}`,gp);
    }
      
  }
  
  
  export class Dino extends Loaders.FbxGrObject {
    constructor(world,params ={})  {
      super({
        fbx: "./untitled.fbx",
        norm: 2.0,
        name: "Dino",
      });
      this.world = world;
      this.x = params.x;
      this.y = params.y;
      this.z = params.z;
      this.setScale(4);
      this.objects[0].rotateY(Math.PI/2);
      this.setPos(3,0.1,15);
      
    }
  }
  