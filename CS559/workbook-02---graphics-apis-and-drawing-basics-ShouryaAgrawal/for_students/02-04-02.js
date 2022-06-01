// JavaScript file to be filled in by the student for Box 4-2
// we'll give you something to get started...

// you should start by getting the canvas
// then draw whatever you want!


let canvas = document.getElementById('canvas1');
if (canvas.getContext) {
let con = canvas.getContext('2d');

con.fillStyle = "rgb(255,131,0)";
con.beginPath();
con.moveTo(215,140)
con.arc(215,140, 80,0,Math.PI * 2,false); 
con.fill();

con.beginPath();
con.fillStyle = "#83EEFF";


con.moveTo(75, 125);
//con.arc(150, 75, 25,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 
con.arc(75, 125, 40,3*Math.PI/2,Math.PI/2,Math.PI * 2, true ); 
con.moveTo(115, 85);
con.arc(115, 85, 40,0,Math.PI,Math.PI * 2,false); 
con.moveTo(155, 125);
con.arc(155, 125, 40, Math.PI/2,3*Math.PI/2,Math.PI * 2, false); 
con.moveTo(155, 165);
con.lineTo(75, 165);
//con.stroke();
//con.arc(75, 125, 40,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 
// con.lineTo(150,250);

con.fill();


con.fillStyle ="rgb(132,238,255,0.9)";
con.beginPath();
con.moveTo(75, 165);
con.lineTo(75,85);
con.lineTo(155,85);
con.lineTo(155,165)
con.moveTo(75, 165);

con.fill();


con.beginPath();


con.fillStyle = "rgb(0,0,205,0.9)";
con.moveTo(275, 125);
//con.arc(150, 75, 25,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 
con.arc(275, 125, 40,3*Math.PI/2,Math.PI/2,Math.PI * 2, true ); 
con.moveTo(315, 85);
con.arc(315, 85, 40,0,Math.PI,Math.PI * 2,false); 
con.moveTo(355, 125);
con.arc(355, 125, 40, Math.PI/2,3*Math.PI/2,Math.PI * 2, false); 
con.moveTo(355, 165);
con.lineTo(275, 165);
//con.stroke();
//con.arc(75, 125, 40,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 
// con.lineTo(150,250);

con.fill();

con.beginPath();
con.moveTo(275, 165);
con.lineTo(275,85);
con.lineTo(355,85);
con.lineTo(355,165)
con.moveTo(275, 165);

con.fill();



}

con.arc(150, 75, 25,3*Math.PI/2, Math.PI/2,Math.PI * 2, true); 