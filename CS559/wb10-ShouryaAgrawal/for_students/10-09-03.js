/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

{
  let txt = new T.TextureLoader().load("textures/islands.png");
  let txt2 = new T.TextureLoader().load("textures/Aerial_Campus18_9797.jpg")
  let mydiv = document.getElementById("div1");

  let world = new GrWorld({ width: mydiv ? 600 : 800, where: mydiv });

  let shaderMat = shaderMaterial("./shaders/10-09-03.vs", "./shaders/10-09-03.fs", {
    side: T.DoubleSide,
    uniforms: {
      u_texture: {value: txt},
      v_texture: {value: txt2},
      lt: {value: 0.5},
    },
  });
  let s1 = new InputHelpers.LabelSlider("checks", {
    width: 400,
    min: 1,
    max: 20,
    step: 0.5,
    initial: 4,
    where: mydiv,
  });

  function onchange() {
    shaderMat.uniforms.lt.value = s1.value();
  }
  s1.oninput = onchange;
  onchange();

  world.add(new SimpleObjects.GrSphere({ x: -2, y: 1, material: shaderMat }));
  world.add(
    new SimpleObjects.GrSquareSign({ x: 2, y: 1, size: 1, material: shaderMat })
  );

  world.go();
}
