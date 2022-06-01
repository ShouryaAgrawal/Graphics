
/*jshint esversion: 6 */
// @ts-check

// these two things are the main UI code for the train
// students learned about them in last week's workbook

import { draggablePoints } from "../libs/CS559/dragPoints.js";
import { runCanvas, RunCanvas } from "../libs/CS559/runCanvas.js";

// this is a utility that adds a checkbox to the page 
// useful for turning features on and off
import { makeCheckbox } from "../libs/CS559/inputHelpers.js";

/**
 * Have the array of control points for the track be a
 * "global" (to the module) variable
 *
 * Note: the control points are stored as Arrays of 2 numbers, rather than
 * as "objects" with an x,y. Because we require a Cardinal Spline (interpolating)
 * the track is defined by a list of points.
 *
 * things are set up with an initial track
 */
/** @type Array<number[]> */
let thePoints = [
  [150, 150],
  [450, 150],
  [450, 450],
  [150, 450],
  [200,200]
 // [300,300]
];

function interpolateCubicBezier(x0,y0,x1,y1,x2,y2){
  let t = 1;
    //  x0,y0,x1,y1 are the coordinates of the end (knot) pts of this segment
    //  x2,y2 is the next knot -- not connected here but needed to calculate p2
    //  p1 is the control point calculated here, from x1 back toward x0.
    //  p2 is the next control point, calculated here and returned to become the 
    //  next segment's p1.
    //  t is the 'tension' which controls how far the control points spread.
    
    //  Scaling factors: distances from this knot to the previous and following knots.
    var d01=Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
    var d12=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
   
    var fa=t*d01/(d01+d12);
    var fb=t-fa;
  
    var p1x=x1+fa*(x0-x2);
    var p1y=y1+fa*(y0-y2);

    var p2x=x1-fb*(x0-x2);
    var p2y=y1-fb*(y0-y2);  
    let pts = [[p1x,p1y],[p2x,p2y]]
    //return [pts[0] , pts[1]];
    return [p1x,p1y,p2x,p2y]
}



let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext("2d");
let slider; // = undefined;

// note: we wrap the draw call so we can pass the right arguments
function wrapDraw() {
    // do modular arithmetic since the end of the track should be the beginning
    draw(canvas, Number(slider.value) % thePoints.length);
}
// create a UI
let runcanvas = new RunCanvas(canvas, wrapDraw);
// now we can connect the draw function correctly
slider = runcanvas.range;

// note: if you add these features, uncomment the lines for the checkboxes
// in your code, you can test if the checkbox is checked by something like:
// document.getElementById("check-simple-track").checked
// in your drawing code
// WARNING: makeCheckbox adds a "check-" to the id of the checkboxes
//
// lines to uncomment to make checkboxes
makeCheckbox("simple-track");
makeCheckbox("arc-length").checked=true;
//makeCheckbox("bspline");

// helper function - set the slider to have max = # of control points
function setNumPoints() {
    runcanvas.setupSlider(0, thePoints.length, 0.05);
}

setNumPoints();

function lerpPt(p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y,t) {
  
  let cx = 3 * (p1x - p0x);
  let bx = 3 * (p2x - p1x) - cx;
  let ax = p3x - p0x - cx - bx;

  let cy = 3 * (p1y - p0y);
  let by = 3 * (p2y - p1y) - cy;
  let ay = p3y - p0y - cy -by;

  //let t = ball.t;
  //Increment t value by speed
  //ball.t += ball.speed;
  //Calculate new X & Y positions of ball
  let xt = ax*(t*t*t) + bx*(t*t) + cx*t + p0x;
  let yt = ay*(t*t*t) + by*(t*t) + cy*t + p0y;
  return [xt,yt]
}

// function drawTrain(t,context,cp,pts){
//   let coords;
//   for (let i = 1; i < thePoints.length; i++) {
//     // if(t<i){
//     //   t = i-t
//     //   break;
//     //   //get control points and pass them to the calculator function to get coords for drawing rect
//     //   console.log(t);
//     //   console.log(i + " i");
//     // }
//   }
//   for(let i=2;i<pts.length+2;i+=2){
//     let p1x = cp[2*i-2]
//     let p1y = cp[2*i-1]
//     let p2x = cp[2*i];
//     let p2y = cp[2*i+1]
//     let p3x = pts[i+2];
//     let p3y = pts[i+3];
//     let p0x = pts[i];
//     let p0y = pts[i+1]
//     coords = lerpPt(p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y,t)
//     console.log(coords + " coords ");
//     context.fillRect(coords[0]-5,coords[1]-5,15,20)
//   }
// }
  
  //context.fillRect(coords[0]-5,coords[1]-5,15,20)

/**
 * Draw function - this is the meat of the operation
 *
 * It's the main thing that needs to be changed
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} param
 */
function draw(canvas, param) {
  //let context = canvas.getContext("2d");
  // clear the screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  //draw the control points
  thePoints.forEach(function(pt) {
    context.beginPath();
    context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  });
  

  // now, the student should add code to draw the track and train
 let colors = ["red",'black',"purple","orange",'white'];
  let pts = [];
  let cp = [];
  for (let i = 0; i < thePoints.length; i++) {
    pts.push(thePoints[i][0],thePoints[i][1]);
  }
  let n = pts.length
  pts.push(pts[0],pts[1],pts[2],pts[3]);
  pts.unshift(pts[n-1]);
  pts.unshift(pts[n-1]);
  for(let i=0;i<n;i+=2){
      cp=cp.concat(interpolateCubicBezier(pts[i],pts[i+1],pts[i+2],pts[i+3],pts[i+4],pts[i+5]));
  }

  cp=cp.concat(cp[0],cp[1]);   
  let coords = [];
  
  for(let i=0;i<n+1;i++){
      context.lineWidth = 3;  
      context.strokeStyle = 'black';       
      context.beginPath();
      context.moveTo(pts[i],pts[i+1]);
      context.bezierCurveTo(cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],pts[i+2],pts[i+3]);
      //drawTrain(slider.value,context,cp,pts)
      context.stroke();
      context.closePath();

      //context.fillStyle = colors[i-1]
      
      //console.log(coords);

  }

  let u = slider.value - Math.floor(slider.value);
  let t = slider.value;
  for (let i=2;i<n+2;i+=2) {
    if(t<i && i>0){
    coords = lerpPt(pts[i],pts[i+1],cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],pts[i+2],pts[i+3],t-i);
    }
    else{
      coords = lerpPt(pts[i],pts[i+1],cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],pts[i+2],pts[i+3],t);
    }

    //console.log(coords);
    //context.fillStyle  = colors[i]
    
  }
  console.log(coords);
  context.fillRect(coords[0]-5,coords[1]-5,20,15);
}
/**
 * Initialization code - sets up the UI and start the train
 */


// we need the slider for the draw function, but we need the draw function
// to create the slider - so create a variable and we'll change it later

runcanvas.setValue(0);

// add the point dragging UI
draggablePoints(canvas, thePoints, wrapDraw, 10, setNumPoints);