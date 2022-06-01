import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

let persc = 0;
export class Person extends GrObject {
	constructor(x,y,z) {
		
        
        let p = new T.Object3D();
        persc+=1;
        super(`Person-${persc}`,p);
        this.x = x;
        this.y = y;
        this.z = z;
         
        this.headg = new T.SphereBufferGeometry(0.2);
        this.bodyg = new T.BoxBufferGeometry(0.5,0.5,0.3);
        this.l1g = new T.BoxBufferGeometry(0.2,0.7,0.2);
        this.l2g = new T.BoxBufferGeometry(0.2,0.7,0.2);
        
        this.math = new T.MeshStandardMaterial({
            color: "white",
          });
        this.matl = new T.MeshStandardMaterial({
            color: "yellow",
          });
        this.matb = new T.MeshStandardMaterial({
        color: "black",
        });
        
        this.head = new T.Mesh(this.headg, this.math);
        this.head.position.y = 0.5;
        
        this.body = new T.Mesh(this.bodyg, this.matb);
        this.l1 = new T.Mesh(this.l1g, this.matl);
        this.l2 = new T.Mesh(this.l2g, this.matl);
        this.l1.position.x = -0.12;
        this.l2.position.x = 0.12;
        //this.l2.position.x = 0.2;
        this.l1.position.y = -0.5;
        this.l2.position.y = -0.5;
        this.l1.rotateX(-0.1);
        this.l2.rotateX(0.1);
        p.add(this.head);
        p.add(this.body);
        p.add(this.l1);
        p.add(this.l2);

        p.position.set(this.x,this.y,this.z);
       
	}

}