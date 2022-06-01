/**
 * Starter file for 02-07-01.js - the only exercise of page 7 of Workbook 2
 */

// @ts-check

export {};

// we'll keep track of a set of "dots"
let cirs = [];

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box1canvas"));
let context = canvas.getContext('2d');

let mouseX = -10;
let mouseY = -10;
let mouseC = 0;
let col = 0;

// when the mouse moves in the canvas, remember where it moves to
canvas.onmousemove = function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    //mouseC = 0;
    //col = 0;
  
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    //cirs.push({"x":mouseX,"y":mouseY});


    

    cirs.forEach(function(dot){
        if ((mouseX-dot.x)**2 + (mouseY-dot.y)**2 <=100 ){
            dot.col = 1;
        }
        else {
            dot.col = 0;
        }
    });

    
    
};



canvas.onclick = function(event){

    let flg = 0;

    cirs.forEach(function(dot){
        
        if ((mouseX-dot.x)**2 + (mouseY-dot.y)**2 <=90 ){
            dot.col = 2;
            flg ==1;
        }

    
        })
    if (mouseC ==0){
        mouseC = 1;
    } 

    if (flg ==0) cirs.push({"x":mouseX,"y":mouseY, "c" :mouseC,"col":col});


};

canvas.onmouseleave = function() {
    mouseX = -10;
    mouseY = -10;
    // mouseC = 0;
    // col=0;
};






function animate() {
    // clear the canvas
    context.clearRect(0,0,canvas.width,canvas.height);

    // draw all of the dots
    cirs.forEach(function(dot){
        if (dot.c ==1){
        context.beginPath();
            
            if (dot.col ==0){
                context.fillStyle = "#8888FF88";
            }
            else if (dot.col ==1)context.fillStyle = "red";
            else if (dot.col==2) context.fillStyle = "green";
            
        context.arc(dot.x, dot.y, 10,0,Math.PI * 2, true);
        context.fill();
        }
    });

    window.requestAnimationFrame(animate);
}
animate();


