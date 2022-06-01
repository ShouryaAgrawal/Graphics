/*jshint esversion: 6 */
// @ts-check

//
// CS559 - Graphics Town - Workbook 12
// Example Code: 
// Example "Town"
//
// This sets up the town loading different objects. 
//
// It should be called from the onload function, after the world has been created

/** These imports are for the examples - feel free to remove them */
import { SimpleHouse } from "./house.js";
import { CircularTrack, TrackCube, TrackCar, } from "./track.js";
import { Helicopter, Helipad } from "./helicopter.js";
import { ShinySculpture,Man, CyBox, Skl } from "./shinySculpture.js";
import { MorphTest } from "./morph.js";
import { Bird } from "./bird.js";
import { Person } from "./person.js";
import * as T from "../libs/CS559-Three/build/three.module.js";
/********************************************************************** */
/** EXAMPLES - student should not use this! It is just for reference    */
/** you may use the sample objects, but not the sample layout           */
/***/
export function main(world) {

  /** Race Track - with three things racing around */
  let track = new CircularTrack();

  let tc3 = new TrackCar(track);
  
  let mn = new Man({x:6,y:3,z:0});
  let skl = new Skl({x:-6,y:3,z:0});
  let brd = new Bird(12);
  let brd2 = new Bird(8);
  let pp = new Person({x:3,y:5,z:3});
  let cy = new CyBox();
  cy.setPos(6,3,0);
  let cy2 = new CyBox();

  cy2.setPos(-6,3,0);
    // place things are different points on the track
  
  tc3.u = 0.125;
  // and make sure they are in the world
  world.add(track);
 world.add(skl);
  world.add(tc3);
 world.add(mn);
  world.add(cy);
  world.add(cy2);
  // world.add(brd);
  //  world.add(brd2);
  // world.add(pp);
  /** Helicopter - first make places for it to land*/
  // world.add(new Helipad(-15, 0, 0));
  // world.add(new Helipad(15, 0, 0));
  // world.add(new Helipad(0, 0, -17));
  // world.add(new Helipad(0, 0, 17));
  // let copter = new Helicopter();
  // world.add(copter);
  // copter.getPads(world.objects);

  // // these are testing objects
   world.add(new ShinySculpture(world));
   
 
  
  // world.add(new MorphTest({ x: 10, y: 3, r: 2 }));
}

