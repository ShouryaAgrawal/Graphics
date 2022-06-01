/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

/**
 * If you want to read up on JavaScript classes, 
 * see the tutorial on the class website:
 * 
 * https://graphics.cs.wisc.edu/Courses/559-sp2021/tutorials/oop-in-js-1/
 */
class Boid {
    /**
     * 
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     */
    constructor(x, y, vx = 1, vy = 0,cc="black",fc=0,col=false) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.cc =cc;
        this.fc = fc;
        this.col = false;
    }
    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        context.save();

        
        context.translate(this.x, this.y);
        
        if (this.col == true){
            this.vx = -this.vx;
            this.vy = -this.vy;
            this.col = false;
        }

        context.rotate(Math.atan2(this.vy,this.vx));
        //context.fillRect(-5, -5, 10, 10);
        
        if (this.fc >0 && this.fc < 40){
            this.fc +=1;
        }
        else{
            this.fc=0;
        }


        if (this.fc ==0) this.cc = "black";
        else if (this.fc >0) this.cc = "red";
        context.fillStyle = this.cc;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(-10,15);
        context.lineTo(-10,-15);
        context.lineTo(0,0);



     

        context.fill();
        
        
        context.restore();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     */
    steer(flock) {
        /*
		// Note - this sample behavior is just to help you understand
		// what a steering function might  do
		// all this one does is have things go in circles, rather than
		// straight lines
		// Something this simple would not count for the advanced points:
		// a "real" steering behavior must consider other boids,
		// or at least obstacles.
		
        // a simple steering behavior: 
        // create a rotation matrix that turns by a small amount
        // 2 degrees per time step
        const angle = 2 * Math.PI / 180;
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        let ovx = this.vx;
        let ovy = this.vy;

        this.vx =  ovx * c + ovy * s;
        this.vy = -ovx * s + ovy * c;
		*/
    }
}


/** the actual main program
 * this used to be inside of a function definition that window.onload
 * was set to - however, now we use defer for loading
 */

 /** @type Array<Boid> */
let theBoids = [];

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");

let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));

function draw() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "lightblue";
        context.beginPath();
        context.moveTo(100,100);
        context.lineTo(200,100);
        context.lineTo(200,200);
        context.lineTo(100,200);
        context.lineTo(100,100);
        context.fill();


        context.beginPath();
        context.moveTo(400,400);
        context.lineTo(500,400);
        context.lineTo(500,500);
        context.lineTo(400,500);
        context.lineTo(400,400);
        context.fill();

    
    theBoids.forEach(function (boid1) {
        theBoids.forEach(function (boid2) {
            
            if (boid1 != boid2){


                if (Math.pow(Math.pow(boid1.x - boid2.x,2)+Math.pow(boid1.y - boid2.y,2),0.5) < 10){
                    boid1.fc +=1;
                    boid2.fc +=1;
                    boid1.col=true;
                    boid2.col=true;

                }
                else if (Math.pow(Math.pow(boid1.x - boid2.x,2)+Math.pow(boid1.y - boid2.y,2),0.5) < 15){
                    boid1.fc +=1;
                    boid2.fc +=1;
                    boid1.col=false;
                    boid2.col=false;
                }
                
                

            }
        });
    });
    
    theBoids.forEach(function (boid) {
    if ((boid.x >=90 && boid.x <=215 && boid.y>=85 && boid.y <=215)||(boid.x >=385 && boid.x <=515 && boid.y>=385 && boid.y <=515)){
        boid.col=true;
        boid.fc +=1;
    }
});
    theBoids.forEach(boid => boid.draw(context));
}

/**
 * Create some initial boids
 * STUDENT: may want to replace this
 */


theBoids.push(new Boid(100, 250));
theBoids.push(new Boid(300, 200, -1, 0));
theBoids.push(new Boid(440, 100, 0, -1));
theBoids.push(new Boid(100, 440, 0, 1));

/**
 * Handle the buttons
 */
document.getElementById("add").onclick = function () {
    // Students Fill This In
    for (let i=0;i<10; i++){
        let rx = Math.random()*canvas.width;
        let ry = Math.random()*canvas.height;
        let rang = Math.random()*2*Math.PI;
        
        if (rx >= 80 && rx<=220 && ry>=80 && ry<=220){
        i = i-1;
        }
        else if (rx >= 380 && rx<=520 && ry>=380 && ry<=520){
           i = i-1; 
        }
        else{
        theBoids.push(new Boid(rx,ry,Math.cos(rang),Math.sin(rang)));
        }
    }


};
document.getElementById("clear").onclick = function () {
    // Student Fill This In
    theBoids = [];
};

let lastTime; // will be undefined by default
/**
 * The Actual Execution
 */
function loop(timestamp) {
    // time step - convert to 1/60th of a second frames
    // 1000ms / 60fps
    const delta = (lastTime ? timestamp-lastTime : 0) * 1000.0/60.0;

    // change directions
    theBoids.forEach(boid => boid.steer(theBoids));
    // move forward
    let speed = Number(speedSlider.value);
    theBoids.forEach(function (boid) {
        boid.x += boid.vx * speed;
        boid.y += boid.vy * speed;
    });
    // make sure that we stay on the screen
    theBoids.forEach(function (boid) {
        /**
         * Students should replace this with collision code
         */
        //boid.x = boid.x % canvas.width;
        if (boid.x >= canvas.width ){
            boid.vx  = -boid.vx;
            boid.fc +=1;
        }
        if (boid.y >= canvas.height){
            boid.fc +=1;
            boid.vy  = -boid.vy;
        }
        //boid.y = boid.y % canvas.height;
        if (boid.x <= 0) {
           // boid.x += canvas.width;
            boid.vx  = -boid.vx;
            boid.fc +=1;
           
        }
        if (boid.y <= 0) {
            //boid.y += canvas.height;
            boid.fc +=1;
            boid.vy  = -boid.vy;}


       

    });
    // now we can draw
    draw();
    // and loop
    window.requestAnimationFrame(loop);

}
// start the loop with the first iteration
window.requestAnimationFrame(loop);


