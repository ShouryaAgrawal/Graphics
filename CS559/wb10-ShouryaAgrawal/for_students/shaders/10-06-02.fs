/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

uniform float dots;

/* how big are the circles */
uniform float radius;
void main()
{
    float x = v_uv.x * dots;
    float y = v_uv.y * dots;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;

    float d = sqrt(2.0*dx*dx+0.05*dy);
    float dc = step(d,radius);

    gl_FragColor = vec4(mix(light,dark,dc), 1.);
   
}



// void main()
// {
//     gl_FragColor = vec4(.5, .5, 0 , 1.);
// }

