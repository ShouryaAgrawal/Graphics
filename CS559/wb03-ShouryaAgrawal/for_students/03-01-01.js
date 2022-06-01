// we do enable typescript type checking - see
// https://graphics.cs.wisc.edu/Courses/559-sp2020/pages/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/**
 * 
 * This is for drawTriSquare - it loads in a separate module that holds the code for the function
 * so we can put that code into a separate file (called "03-01-TriSquare.js")
 * 
 * Now is a good time to learn about modules!
 * 
 * Check your favorite JavaScript book (if it is up to date with ES6).
 * https://github.com/nzakas/understandinges6/blob/master/manuscript/13-Modules.md
 * is a nice tutorial.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * is an official reference
 */
export {};

import * as trisquare from "./03-01-TriSquare.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const context = canvas.getContext('2d');
//trisquare.drawTriSquare(context);
// context.save();
// context.translate(10,0);
// context.rotate(Math.PI/2);   // 90 degrees
// context.translate(10,0);
// context.moveTo(0,0);
// context.lineTo(10,0);
// context.stroke();
// context.restore();
// context.fillStyle = "red";
//  context.fillRect(25,25,25,25);
//   context.translate(50,0); 
//   context.fillRect(25,25,25,25);
//    context.fillStyle = "blue"; 
//    context. translate(0,50); 
//    context.fillRect(25,25,25,25);

function make(a) { 
    let b = a;
    return function(c) {
         a = a + 1;
          return a - b + c;};
    }
    let x = make(1); 
    let y = make(2); 
    console.log("first: ", x(2));
     // first print statement 
     console.log("second:", x(3)); // second print statement
      console.log("third: ", x(4)); // third print statement 
      console.log("fourth:", y(5)); // fourth print statement
    