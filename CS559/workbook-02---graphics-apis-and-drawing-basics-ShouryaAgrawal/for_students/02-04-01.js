// JavaScript file to be filled in by the student for Box 4-1
// we'll give you something to get started...

// you should start by getting the canvas

// then draw the 4 shapes

let canvas = document.getElementById('canvas1');
if (canvas.getContext) {
  let con = canvas.getContext('2d');

    con.beginPath();
    con.fillStyle = "#F8E";
    con.strokeStyle = "#846";
    con.lineWidth = 10;
    
    
    con.arc(75, 75, 25,0, Math.PI * 2, true); // Outer circle
    con.stroke();
    con.fill();

    con.beginPath();
    con.fillStyle = "lightpink";
    con.strokeStyle = "darkred";
    con.arc(150, 75, 25,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 
    con.lineTo(200,100);
    con.arc(200, 75, 25,Math.PI/2, 3*Math.PI/2,Math.PI * 2, true); 
    con.lineTo(150,50);
    con.stroke();
    con.fill();
    con.closePath();

    con.beginPath();
    con.fillStyle = "sandybrown";
    con.strokeStyle = "goldenrod";
    con.moveTo(75, 175);
    con.lineTo(100,140);
    con.lineTo(125,175);
    con.lineTo(75, 175);
    con.lineTo(100,140);
    // con.lineTo(150,250);
    con.stroke();
    con.fill();


    con.beginPath();
    con.fillStyle = "gray";
    con.strokeStyle = "black";
    con.moveTo(150, 175);
    con.lineTo(150,150);
    con.lineTo(175,125);
    con.lineTo(200,150);
    con.lineTo(225,125);
    con.lineTo(250,150);
    con.lineTo(250,175);
    con.lineTo(150,175);
    con.lineTo(150,150);
    con.stroke();
    con.fill();
}