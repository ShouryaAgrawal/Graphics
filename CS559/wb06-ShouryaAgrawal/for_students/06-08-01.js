// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(500, 500);
document.getElementById("div1").appendChild(renderer.domElement);

// student does the rest.
let scene = new T.Scene();
let camera = new T.PerspectiveCamera();
let controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 20;
camera.position.y = 13;
camera.position.x = 0;

camera.lookAt(0, 0, 0);
controls.update();


scene.add(new T.AmbientLight("white",0.2    ));
let point = new T.DirectionalLight("white", 1);
point.position.set(0, 10, 15);
let point1 = new T.DirectionalLight("white", 1);
point1.position.set(0, 10, -15);
let point2 = new T.DirectionalLight("white", 1);
point2.position.set(10, 10, 0);
let point3 = new T.DirectionalLight("white", 1);
point3.position.set(-10, 10, 0);
scene.add(point);
scene.add(point1);
scene.add(point2);
scene.add(point3);

// make a ground plane
let groundBox = new T.BoxGeometry(5, 0.1, 5);
let groundMesh = new T.Mesh(
groundBox,
new T.MeshLambertMaterial({ color: "white" })
);
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

// make 5 boxes of different sizes - all cubes
let bott = new T.Mesh(
    new T.SphereGeometry(2),
    new T.MeshStandardMaterial({ color: "white" })
  );
  
let mid = new T.Mesh(
    new T.SphereGeometry(1.8),
    new T.MeshStandardMaterial({ color: "white",roughness: 1,
    metalness: 0.1
})
);
let top = new T.Mesh(
    new T.SphereGeometry( 1.6 ),
    new T.MeshStandardMaterial({ color: "white",roughness: 0.1,
    metalness: 0.1 })
  );
let leye = new T.Mesh(
    new T.SphereGeometry(0.2),
    new T.MeshStandardMaterial({ color: "green" })
  );
  let reye = new T.Mesh(
    new T.SphereGeometry(0.2),
    new T.MeshStandardMaterial({ color: "green" })
  );
  let m1 = new T.Mesh(
    new T.SphereGeometry(0.12),
    new T.MeshStandardMaterial({ color:  "black" })
  );
  let m2= new T.Mesh(
    new T.SphereGeometry(0.12),
    new T.MeshStandardMaterial({ color: "black" })
  );
  let m3 = new T.Mesh(
    new T.SphereGeometry(0.12),
    new T.MeshStandardMaterial({ color:  "black" })
  );
  let m4 = new T.Mesh(
    new T.SphereGeometry(0.12),
    new T.MeshStandardMaterial({ color:  "black" })
  );


  let nose = new T.Mesh(
    new T.ConeGeometry( 0.5, 1.5),
    new T.MeshStandardMaterial({ color: "#FFAC1C" })
  );
  nose.geometry.rotateX( Math.PI / 2 );

let lhand = new T.Mesh(
    new T.CylinderGeometry(0.1,0.1,3),
    new T.MeshStandardMaterial({ color:  "brown" })
  );

let rhand = new T.Mesh(
new T.CylinderGeometry(0.1,0.1,3),
new T.MeshStandardMaterial({ color:  "brown" })
);




// STUDENT: position them into a stack (biggest on the bottom)
bott.position.y = groundMesh.position.y+1.5;
mid.position.y = bott.position.y+3;
top.position.y = mid.position.y+(2.5);


leye.position.y =mid.position.y+3.5;
leye.position.x =-0.4;
leye.position.z =1;

reye.position.y =mid.position.y+3.5;
reye.position.x =0.4;
reye.position.z =1;

m1.position.y =mid.position.y+2.5;
m2.position.y =mid.position.y+2.3;
m3.position.y =mid.position.y+2.3;
m4.position.y =mid.position.y+2.5;


m1.position.x =-0.3;
m2.position.x = -0.1;
m3.position.x = 0.1;
m4.position.x = 0.3;

m1.position.z = 1.5;
m2.position.z =1.5;
m3.position.z = 1.5;
m4.position.z =1.5;

nose.position.y = mid.position.y+3;
nose.position.z = 1.5;

lhand.position.y = mid.position.y;
rhand.position.y = mid.position.y;
lhand.position.z =0;
rhand.position.z = 0;
lhand.position.x =2.2;
rhand.position.x = -2.2;
lhand.rotateZ(Math.PI/2);
rhand.rotateZ(-Math.PI/2);
// box5.position.y =box4.position.y+0.65;

// add the boxes to the scene
scene.add(bott);
scene.add(mid);
scene.add(top);
scene.add(leye);
scene.add(reye);
scene.add(m1);
scene.add(m2);
scene.add(m3);
scene.add(m4);
scene.add(nose);
scene.add(lhand);
scene.add(rhand);



document.getElementById("div1").appendChild(renderer.domElement);
//renderer.render(scene, camera);

let ang = 0;
let lastTimestamp; // undefined to start
let fl = 0;
let st = Math.PI/4;
let end = 3*Math.PI/8;
function animate(timestamp) {
    // Convert time change from milliseconds to seconds
    let timeDelta = 0.001*(lastTimestamp ? timestamp - lastTimestamp : 0);
    lastTimestamp = timestamp;
    
    
   
    if ((ang >= st) && ((ang) <= end)){
        if (fl ==0){
            ang += 0.01 ;
            lhand.rotateZ(0.01);
            rhand.rotateZ(-0.01);
            
        }
        else if (fl==1){
            ang -= 0.01 ;
            lhand.rotateZ(-0.01);
            rhand.rotateZ(0.01);
        }

    }
        else if(ang < st){
            fl=0;
            ang = st+0.01;
        }
        else if (ang > end){
            fl=1;
            ang = end-0.01;

        }
    renderer.render(scene, camera);
    
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
