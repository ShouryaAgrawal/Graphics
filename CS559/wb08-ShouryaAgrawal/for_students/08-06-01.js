/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

import {b1} from "../for_students/08-06-buildings.js";

import {b2} from "../for_students/08-06-buildings.js";
import {tree} from "../for_students/08-06-buildings.js";
// your buildings are defined in another file... you should import them
// here

let world = new GrWorld();

let build1 = new b1();
let build2 = new b2();
let tr = new tree();
// place your buildings and trees into the world here
world.add(build1);
world.add(build2);
world.add(tr);
world.go();


