/*jshint esversion: 6 */
// @ts-check

/*
 * Graphics Town Example Objects
 *
 * Simple Circular Track - and an object that goes around on it
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { GrCube } from "../libs/CS559-Framework/SimpleObjects.js";
import { Vector3 } from "../libs/CS559-Three/build/three.module.js";

/**
 * This is a really simple track - just a circle
 * But in addition to having geometry, objects on the track can ask for their
 * position (given their U value).
 * They can also ask for the direction vector.
 */
export class CircularTrack extends GrObject {
  constructor(params = {}) {
    let radius = params.radius || 6;
    let width = params.width || 1;
    let ring = new T.RingGeometry(radius - width, radius + width, 20, 3);//,0,Math.PI);
    let ring2 = new T.RingGeometry(radius - width, radius + width, 20, 3);//,Math.PI,2*Math.PI);
    let tl =new T.TextureLoader().load( "../for_students/images/track.jpg");
    let material = new T.MeshStandardMaterial({
      side: T.DoubleSide,
      color: "#909090",
      roughness: 1.0,
      map:tl,
    });
    let mesh = new T.Mesh(ring, material);
    let mesh2 = new T.Mesh(ring, material);
    mesh.translateX(-6);
    mesh2.translateX(6);
    mesh2.rotateX(Math.PI / 2);
    mesh2.rotateX(Math.PI);
    mesh.rotateX(Math.PI / 2);
    let group = new T.Group();
    group.add(mesh);
    group.add(mesh2);
    group.translateX(params.x || 0);
    group.translateY(params.bias || 0.1); // raise track above ground to avoid z-fight
    group.translateZ(params.z || 0);
    super(`CircularTrack`, group);

    this.x = params.x || 0;
    this.z = params.z || 0;
    this.y = params.bias || 0.1;
    this.r = radius;
  }
  eval(u) {

    let p = (u%(4*Math.PI));
    //console.log(p)
    if (p > 2*Math.PI){

    return [
      this.x + this.r * Math.cos(p) -6,
      this.y,
      this.z + this.r * Math.sin(p),
    ];
  }
  else {

    return [
      this.x + this.r * Math.cos(p-Math.PI) +6,
      this.y,
      this.z - this.r * Math.sin(p-Math.PI),
    ];

  }
  }
  tangent(u) {
    let p = (u%(4*Math.PI));
    // unit tangent vector - not the real derivative
    //return [Math.sin(p), 0, -Math.cos(p)];

    if (p > 2*Math.PI){
      return [Math.sin(p), 0, -Math.cos(p)];
    }
    else {
  
      return [Math.sin(p-Math.PI), 0, Math.cos(p-Math.PI)];
    }




  }
}

/**
 * A simple object to go around a track - key thing, it knows the track so it can ask the track
 * where it should be
 */
export class TrackCube extends GrCube {
  constructor(track, params = {}) {
    super({});
    this.track = track;
    this.u = 0;
    this.rideable = this.objects[0];
  }
  stepWorld(delta, timeOfDay) {
    this.u += delta / 2000;
    let pos = this.track.eval(this.u);
    // remember, the center of the cube needs to be above ground!
    this.objects[0].position.set(pos[0], 0.5 + pos[1], pos[2]);
    let dir = this.track.tangent(this.u);
    // since we can't easily construct the matrix, figure out the rotation
    // easy since this is 2D!
    let zAngle = Math.atan2(dir[2], dir[0]);
    // turn the object so the Z axis is facing in that direction
    this.objects[0].rotation.y = -zAngle - Math.PI / 2;
  }
}

/**
 * A Less Simple Object to go around the track
 */
export class TrackCar extends Loaders.FbxGrObject{
  constructor(track) {
    super({
      fbx: "../examples/assets/teeny_racecar.fbx",
      norm: 2.0,
      name: "Track Car",
    });


    let p = new T.Object3D();
    this.headg = new T.SphereBufferGeometry(0.2);
    this.bodyg = new T.BoxBufferGeometry(0.5,0.5,0.3);
    this.l1g = new T.BoxBufferGeometry(0.2,0.7,0.2);
    this.l2g = new T.BoxBufferGeometry(0.2,0.7,0.2);
    
    this.math = new T.MeshStandardMaterial({
        color: "white",
      });
    this.matl = new T.MeshStandardMaterial({
        color: "yellow",
      });
    this.matb = new T.MeshStandardMaterial({
    color: "black",
    });
    
    this.head = new T.Mesh(this.headg, this.math);
    this.head.position.y = 0.5;
    
    this.body = new T.Mesh(this.bodyg, this.matb);
    this.l1 = new T.Mesh(this.l1g, this.matl);
    this.l2 = new T.Mesh(this.l2g, this.matl);
    this.l1.position.x = -0.12;
    this.l2.position.x = 0.12;
    //this.l2.position.x = 0.2;
    this.l1.position.y = -0.5;
    this.l2.position.y = -0.5;
    this.l1.rotateX(-0.1)
    this.l2.rotateX(0.1)
    p.add(this.head);
    p.add(this.body);
    p.add(this.l1);
    p.add(this.l2);



    this.track = track;
    this.u = 0;
    // the fbx loader puts the car on the ground - we need a ride point above the ground
    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.5);
    this.objects[0].add(this.ridePoint);
    this.rideable = this.ridePoint;
    this.ridden = 0;
    this.count = 0;
    this.gp = new T.Group();
     
    //let cy = new T.SphereGeometry(0.3);
    let material = new T.MeshStandardMaterial({
      color: "red",
      depthWrite :false
      });
    //let cy = new Person();
   
  //this.objects[0].scale;
  p.position.set(5,5,3);
  this.objects.push(p);
 
 console.log(this.objects.length);
  }
  stepWorld(delta, timeOfDay) {
     if (Math.floor(this.objects[0].position.x) == 4.0 && Math.floor(this.objects[0].position.z) ==5.0 && this.ds == 0){ 
      
    if (this.ridden == 1) this.ridden = 0;
    else {this.ridden = 1;}

  
    this.count +=1;
    //   console.log(this.count);
   //this.objects.push(this.meshcyl);
   //this.gp.add(this.meshcyl);
     if (this.count >= 5){
      this.count = 0;
      this.ds = 1;
      this.u += delta / 2000;
    }
  }
    else{
    this.ds = 0;
    this.u += delta / 2000;
    //console.log(this.objects.length);
    let pos = this.track.eval(this.u);
    
    if (this.ridden == 1){
      this.objects[0].position.set(pos[0], pos[1], pos[2]);
      //this.meshcyl.setPos(pos[0], pos[1], pos[2]);
    this.objects[1].position.set(pos[0], pos[1]+1, pos[2]);
    
    }
    else {
    this.objects[0].position.set(pos[0], pos[1], pos[2]);
    
    //this.meshcyl.setPos(pos[0], pos[1], pos[2]);
    this.objects[1].position.set(5, 1, 8);
    }
    let dir = this.track.tangent(this.u);

    // since we can't easily construct the matrix, figure out the rotation
    // easy since this is 2D!
    let zAngle = Math.atan2(dir[2], dir[0]);
    // turn the object so the Z axis is facing in that direction
    this.objects[0].rotation.y = -zAngle - Math.PI / 2;
    this.objects[1].rotation.y = -zAngle - Math.PI / 2;
    //this.meshcyl.objects[0].rotation.x = -zAngle - Math.PI / 2;
   }
  }
}
