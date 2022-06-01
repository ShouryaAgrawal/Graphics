// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas,groundplane: false }, );
let tl = new T.TextureLoader().load("../images/fin.jpg");

const geometry = new T.SphereGeometry( 15 );
const box = new T.SphereGeometry( 1 );
let material = new T.MeshStandardMaterial({

  color: "white",
  roughness: 0.75,
  map: tl,
  side: T.DoubleSide
  });

const b = new T.Mesh( box, material );

b.translateY(1);

  world.scene.background = new T.CubeTextureLoader()
      .setPath( '../images/' )
      .load( [
        'Bottom.png',
            'Back.png',
            
            'Top.png',
            'Front.png',
            'Right.png',
            'Left.png',
          
         
      ] );
world.scene.add( b);

world.go();

