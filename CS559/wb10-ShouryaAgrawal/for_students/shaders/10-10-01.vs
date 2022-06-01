/*
 * Placeholder shader
 * The student should replace this with their own shader file.
 */

// void main() {
//     // the main output of the shader (the vertex position)
//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// }

    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
