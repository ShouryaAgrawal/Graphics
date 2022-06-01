// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw a picture using curves!

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");


var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.bezierCurveTo(125, 150, 100, 100, 150, 100);
ctx.bezierCurveTo(200, 100, 175, 150, 225, 150);
ctx.bezierCurveTo(300, 150, 150, 300, 100, 150);


// ctx.bezierCurveTo((100-33), 150, 50, (100+33), 50, 100);
// ctx.bezierCurveTo(50, (100-33), (100-33), 50, 100,50);
// ctx.bezierCurveTo(100, 50+33, (150-33), 100, 150,100);
 ctx.closePath();
//ctx.bezierCurveTo((150 -200/3), (100+100/3), 50, (100+100/3), 50, 100);

ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.stroke();
ctx.fillStyle  ="yellow";
ctx.fill();