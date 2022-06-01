// @ts-check
export {};

// somewhere in your program you'll want a line
// that looks like:
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const context = canvas.getContext("2d");
// and you will want to make an animation loop with something like:
/**
 * the animation loop gets a timestamp from requestAnimationFrame
 * 
 * @param {DOMHighResTimeStamp} timestamp 
 */
const limbLength=20;
const limbThick=4;
const footLength=10;
let ang0 = 0;
let ang1 = 0;
let ang2 = 0;
let ang3 = 0;
let ang4 = 0;

function draww(timestamp){
    //body
    context.save();
         context.translate(200,300);
        ang0 = ang0+ ((Date.now()- timestamp)/8e13);
        console.log(ang0);
        context.rotate(ang0);
        context.save();
            context.translate(0,-50);
            context.beginPath();
            context.fillStyle = "blue";
            context.strokeStyle = "red";
            context.moveTo(-30,10);
            context.lineTo(-30,-30);
            context.lineTo(0,-70);
            context.lineTo(30,-30);
            context.lineTo(30,10);
            context.lineTo(-30,10);
            context.lineTo(-30,-30);
            context.stroke();
            context.fill();

            
            context.save();
                // top righ tarm
                context.beginPath();
                context.fillStyle = "green";
                context.strokeStyle = "red";
                context.moveTo(0,0);
                context.lineTo(50,-50);
                context.lineTo(53,-47);
                context.lineTo(3,3);
                context.lineTo(0,0);
                context.stroke();
                context.fill();
                
                context.save();
                    
                    context.fillStyle = "black";
                    context.strokeStyle = "white";
                    context.translate(50,-50);

                    ang1 = ang1+ ((Date.now()- timestamp)/1e12);
                    context.rotate(ang1);
                    
                
                    context.beginPath();
                    context.moveTo(1,2);
                    context.lineTo(17,2);
                    context.lineTo(17,0);
                    context.lineTo(1,0);
                    context.lineTo(1,-17);
                    context.lineTo(-1,-17);
                    context.lineTo(-1,0);
                    context.lineTo(-18,0);
                    context.lineTo(-18,2);
                    context.lineTo(-1,2);
                    context.lineTo(-1,19);
                    context.lineTo(1,19);
                    context.lineTo(1,2);
                    context.lineTo(7,2);
                // context.lineTo(-1,5);
                    context.fill();

                    //context.translate(50,-50);
                
                    
            context.restore();
            context.restore();
        
            context.save();
                // bottom righ tarm
                context.beginPath();
                context.fillStyle = "green";
                context.strokeStyle = "red";
                context.moveTo(0,0);
                context.lineTo(50,50);
                context.lineTo(50,55);
                context.lineTo(3,7);
                context.lineTo(0,0);
                context.stroke();
                context.fill();
                
                context.save();
                context.fillStyle = "black";
                context.strokeStyle = "white";
                    context.translate(50,50);

                    ang2 = ang2+ ((Date.now()- timestamp)/5e3);
                    context.rotate(ang2);
                    

                    context.beginPath();
                    context.moveTo(1,2);
                    context.lineTo(17,2);
                    context.lineTo(17,0);
                    context.lineTo(1,0);
                    context.lineTo(1,-17);
                    context.lineTo(-1,-17);
                    context.lineTo(-1,0);
                    context.lineTo(-18,0);
                    context.lineTo(-18,2);
                    context.lineTo(-1,2);
                    context.lineTo(-1,19);
                    context.lineTo(1,19);
                    context.lineTo(1,2);
                    context.lineTo(7,2);
                // context.lineTo(-1,5);
                context.fill();

                
                context.restore();
                
            context.restore();


            context.save();
                // bottom left tarm
                context.beginPath();
                context.fillStyle = "green";
                context.strokeStyle = "red";
                context.moveTo(0,0);
                context.lineTo(-50,50);
                context.lineTo(-50,55);
                context.lineTo(-3,7);
                context.lineTo(0,0);
                context.stroke();
                context.fill();
                
                context.save();
                    context.fillStyle = "black";
                    context.strokeStyle = "white";
                    context.translate(-50,50);
                    context.beginPath();

                    ang3 = ang3+ ((Date.now()- timestamp)/1e5);
                    context.rotate(ang3);
                    

                    context.moveTo(1,2);
                    context.lineTo(17,2);
                    context.lineTo(17,0);
                    context.lineTo(1,0);
                    context.lineTo(1,-17);
                    context.lineTo(-1,-17);
                    context.lineTo(-1,0);
                    context.lineTo(-18,0);
                    context.lineTo(-18,2);
                    context.lineTo(-1,2);
                    context.lineTo(-1,19);
                    context.lineTo(1,19);
                    context.lineTo(1,2);
                    context.lineTo(7,2);
                // context.lineTo(-1,5);
                
                context.fill();
                context.restore();

            context.restore();

            context.save();
                // top left tarm
                context.beginPath();
                context.fillStyle = "green";
                context.strokeStyle = "red";
                context.moveTo(0,0);
                context.lineTo(-50,-50);
                context.lineTo(-52,-45);
                context.lineTo(-0,5);
                context.lineTo(0,0);
                context.stroke();
                context.fill();
                
                context.save();
                    context.fillStyle = "black";
                    context.strokeStyle = "white";
                    context.translate(-50,-50);

                    ang4 = ang4+ ((Date.now()- timestamp)/1e7);
                    context.rotate(ang4);
                    

                    context.beginPath();
                    context.moveTo(1,2);
                    context.lineTo(17,2);
                    context.lineTo(17,0);
                    context.lineTo(1,0);
                    context.lineTo(1,-17);
                    context.lineTo(-1,-17);
                    context.lineTo(-1,0);
                    context.lineTo(-18,0);
                    context.lineTo(-18,2);
                    context.lineTo(-1,2);
                    context.lineTo(-1,19);
                    context.lineTo(1,19);
                    context.lineTo(1,2);
                    context.lineTo(7,2);
                // context.lineTo(-1,5);
                
                context.fill();
                context.restore();

            context.restore();


    context.restore();
    context.restore();
    context.restore();
}

function loop(timestamp) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
   
    draww(timestamp);
    context.restore();
    window.requestAnimationFrame(loop);
};

// and then you would start the loop with:
window.requestAnimationFrame(loop);

