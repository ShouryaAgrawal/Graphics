/* simplest possible fragment shader - just a constant color */
/* but a wrinkle: we pass the color from the javascript program in a uniform */
uniform vec3 color;

// We also passed in the time as a uniform (for bonus exercise)
uniform float time;

void main()
{
   //float color.x = sin(time*5) / 2 + 0.5;
    //console.log("ss");
    gl_FragColor =vec4(sin(time*5.0) / 2.0 + 0.5,color.y,color.z,1.0);
      //gl_FragColor.color.x = sin(time*5) / 2 + 0.5;
}


