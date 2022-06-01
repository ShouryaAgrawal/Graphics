
export {};  // null statement to tell VSCode we're doing a module

// draw the spiral - account for the checkbox and slider


let canvas = (document.getElementById("canvas1"));
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("Canvas is not HTML Element");


//console.log(slider)
let context = canvas.getContext("2d");

let slider = document.getElementById("sl1");

let check = document.getElementById("ch1");
let chBox = check.value;
let points = [];  

class Point{
        constructor(x,y){
            this.x = x;
            this.y = y; 
        }
    
        draw(context,u,chBox){

            this.x =  (200 + u*180*Math.cos(8*Math.PI*u) ) ;
            this.y =  (200 + u*180*Math.sin(8*Math.PI*u));

            context.fillRect(this.x,this.y,2,2);

            if(chBox)
            {
                context.lineTo(this.x,this.y);
                context.stroke();
            }
    
    }
      
    }


    check.onchange = function(event){
        
        if(chBox){
            
            chBox = 0;
            points = [];
        }
        else{
            
            chBox =1;
            points = [];
        }
    }
    function animate(timestamp){
        
        
        for(let i=20;i < slider.value*200; i++)
        {   
            points.push(new Point(0,0));
        
        }

        context.clearRect(0,0,canvas.width,canvas.height);
        
        context.moveTo(200,200);
        
       
        
        for(let i=0;i< points.length;i++){

            let u = i/points.length;

            points[i].draw(context,u,chBox);
            //console.log(points[i])
        }
        
        points = [];
        window.requestAnimationFrame(animate);
        //console.log(points)
        //console.log(points.length);
        
        //console.log(chBox);
        
    }
    
   
    window.requestAnimationFrame(animate);
















// let dotarr = [];

// function sp(t) {
//     return ([200 + t*180*Math.cos(2*Math.PI*4*t),200 + 180*t*Math.sin(8*t*Math.PI)]);
//   }

// function draw(canvas, t) {
//    // context.save();
   
// //context.clearRect(0, 0, canvas.width, canvas.height);

// let c = sp(t);
// context.fillStyle = "black";
// console.log(c[0],c[1]);
// context.fillRect(c[0],c[1],5,5);
//  //context.restore();   
// }

// sl1.onchange = function(event){
//     context.clearRect(0, 0, canvas.width, canvas.height);


// }


// let rc = new RunCanvas(canvas, draw);
// rc.setupSlider(0, 1, 0.01);
// rc.setValue(0);


