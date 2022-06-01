/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import {Car} from "../for_students/08-07-car.js"

// your vehicles are defined in another file... you should import them
// here


let world = new GrWorld();
let c = new Car();
// place your vehicles into the world here
world.add(c);
world.go();

