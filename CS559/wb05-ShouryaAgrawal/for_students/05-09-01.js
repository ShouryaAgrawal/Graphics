// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// recreate the picture from SVG - but don't use quadratics

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");


var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.bezierCurveTo(150, (100+33), (100+33), 150, 100, 150);
ctx.bezierCurveTo((100-33), 150, 50, (100+33), 50, 100);
ctx.bezierCurveTo(50, (100-33), (100-33), 50, 100,50);
ctx.bezierCurveTo(100, 50+33, (150-33), 100, 150,100);
ctx.closePath();
//ctx.bezierCurveTo((150 -200/3), (100+100/3), 50, (100+100/3), 50, 100);

ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.stroke();
ctx.fillStyle  ="gray";
ctx.fill();