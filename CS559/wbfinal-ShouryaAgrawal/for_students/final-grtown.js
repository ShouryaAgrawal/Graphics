/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";

import { CircularTrack, TrackCube, TrackCar, } from "../examples/track.js";
import { Helicopter, Helipad } from "../examples/helicopter.js";
import { ShinySculpture} from "../examples/shinySculpture.js";
import {Ball,Man, CyBox, Skl, Dino }from "./Ball.js";
import { Bird } from "./bird.js";
import { Person } from "./person.js";
import { Optsp } from "./optspin.js";
import { Sha } from "./sha.js";
import * as T from "../libs/CS559-Three/build/three.module.js";
/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

// make the world
let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 20 // make the ground plane big enough for a world of stuff
});

// put stuff into the world
// this calls the example code (that puts a lot of objects into the world)
// you can look at it for reference, but do not use it in your assignment
//main(world);
world.renderer.sortObjects = false;

let track = new CircularTrack();

  let tc3 = new TrackCar(track);
  
 
  let brd = new Bird(12);
  let brd2 = new Bird(8);
  
  let cy = new CyBox();
  cy.setPos(6,3,0);
  let cy2 = new CyBox();
  let mn = new Man({x:6,y:3,z:0});
  let skl = new Skl({x:-6,y:3,z:0});
  let dno= new Dino();
  let opt = new Optsp();
  let bal = new Ball();
  let uf = new Sha();
  cy2.setPos(-6,3,0);
    // place things are different points on the track
    //ppl on dino
    let pp1 = new Person(-1,1,13);
    let pp2 = new Person(-1,1,17);
    let pp3 = new Person(2,1,15);

    //ppl on psin
    let pp4 = new Person(-9,1,12);
    let pp5 = new Person(-13,1,10);

    // ufo
    let pp6 = new Person(-9,1,-12);
    let pp7 = new Person(-10,1,-14);


  tc3.u = 0.125;
  // and make sure they are in the world
  world.add(track);
  world.add(cy);
  world.add(cy2);
 world.add(skl);
  world.add(tc3);
 world.add(mn);
 world.add(bal);
  world.add(dno);
  world.add(opt);
  world.add(brd);
   world.add(brd2);
   world.add(pp1);
    world.add(pp2);
    world.add(pp3);
    world.add(pp4);
    world.add(pp5);

    world.add(pp6);
    world.add(pp7);

    world.add(uf);
  // // these are testing objects
   world.add(new ShinySculpture(world));
   














// while making your objects, be sure to identify some of them as "highlighted"

///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// of course, the student should highlight their own objects, not these
highlight("CyBox-1");
highlight("Person-1");
highlight("CircularTrack");
highlight("Bird-1");
highlight("Ball");
highlight("OpticalIllusion");
highlight("Dino");
highlight("UFO");


///////////////////////////////////////////////////////////////
// build and run the UI

let textu = new T.TextureLoader().load("./images/mz.jpg");
 textu.mapping = T.EquirectangularReflectionMapping;
  world.scene.background = textu;
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);

// now make it go!
world.go();
