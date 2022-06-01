/**
 * Starter file for 02-08-01.js - the only exercise of page 8 of Workbook 2
 */

// @ts-check

export {};

// Find the canvas and start!
let fws = [];
let smdots = []

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box2canvas"));
let con = canvas.getContext('2d');




canvas.onclick = function(event){

    let mouseX = event.clientX;
    let mouseY = event.clientY;
    //let reached = false;
    //mouseC = 0;
    let colo = 0;
    let dc = Math.random();
    let coco = "";
    console.log("ss",dc);
    if (dc <= 0.25) coco = "red";
    else if (dc >0.25 && dc <= 0.50) coco = "blue";
    else if (dc>0.50 && dc <= 0.75) coco = "green";
    else if (dc >0.75 && dc < 0.99) coco = "yellow";
        
    let ts =  Math.floor(Date.now() / 1000);
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    fws.push({"x":mouseX,"y":box.bottom,"fc":coco,"tim":ts,"ty":mouseY,"r":0,"colo" : colo});


    
};





function animate() {
    // clear the canvas
    con.clearRect(0,0,canvas.width,canvas.height);

    // draw all of the dots
    fws.forEach(function(dot){

     
        
        let tn = 0;
        if (dot.r == 0){
            if (dot.y > dot.ty){
                dot.y -=2; 
            }
            else{
                dot.r = 1;
                dot.colo = 1;
                
                //console.log(ts);
                }
            }
        else if (dot.r ==1){



            let vx = (Math.random()-0.5)*5;
            let vy = (Math.random()-0.85)*5;;
            console.log(Math.floor(Date.now() / 1000) - dot.tim);
            if (Math.floor(Date.now() / 1000) - dot.tim <=6){
            smdots.push({"x":dot.x,"y":dot.ty,
                        "vx":vx, "vy":vy,"fci":dot.fc
                        });
                    }

        } });

        smdots.forEach(function(dot){
            dot.y -= dot.vy;
            dot.x -= dot.vx;
        });
        smdots = smdots.filter(
            // this defines a function using "arrow notation"
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
            dot => ((dot.y>0)&&(dot.x>0)&&(dot.x<canvas.width)&&(dot.y<canvas.height))
            );


   

    fws.forEach(function(dot){
        
        if (dot.colo == 0) con.fillStyle = "black";
        else {con.fillStyle = "white";}
        
        con.beginPath();
        
        con.arc(dot.x, dot.y, 10,0,Math.PI * 2, true);
        con.fill();
    });
    
    smdots.forEach(function(sdot){
        
        con.fillStyle = sdot.fci;
        con.fillRect(sdot.x-3,sdot.y-3,9,9);
    });

    
    window.requestAnimationFrame(animate);
}
animate();
