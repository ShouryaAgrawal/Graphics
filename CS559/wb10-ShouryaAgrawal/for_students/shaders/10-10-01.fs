/*
 * Placeholder shader
 * The student should replace this with their own shader file.
 */

// void main() {
//     gl_FragColor = vec4(1., 0., 1., 1.);
// }


      uniform vec3 colorA; 
      uniform vec3 colorB; 
      varying vec3 vUv;

      void main() {
        
        gl_FragColor = vec4(mix(colorA, colorB, 2.0*sin(vUv.y)), 1.0);
      }
