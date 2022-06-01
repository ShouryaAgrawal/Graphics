/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* passed interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

/* number of checks over the UV range */
uniform float checks;


// void main()
// {
//     float x = fract( v_uv.x * checks/2.0);
//     float y = fract(v_uv.y * checks/2.0);
//     float xc = floor(x);
//     float yc = floor(y); 
//     float dx = x-xc;
//     float dy = y-yc;
    
//     float dstx = abs(x-0.5);
//     float dsty = abs(y-0.5);

//     float h = 1.0/((checks)*2.0) ;
//     //float d = .5;
//     //float dc = step(d,radius);
//     //float d = sqrt(dx*dx + dy*dy);
//     //d = mix(0,1,)
//          //float dc = step(d,radius);
//     //mix(light,dark,dx+dy)

//     float dc2 = step(mod(xc+yc,2.0),0.0);

//     float a =  fwidth(dstx);
//     float ay =  fwidth(dsty);
//     //float dc = 1.0-smoothstep(0.5-a,0.5+a,dc2);
    
//     // float st;
//     // if (x <= .5) {  // "left" side of stripe
//     //     float edge = 0.0 ;    // position of the edge
//     //     st = smoothstep(edge-a,edge+a,x);
        
//     // } else {        // right side of stripe
//     //     float edge = 0.0 ;    // position of the edge
//     //     st = 1.0-smoothstep(edge-a,edge+a,x);
//     // }

//     // float sty;
//     //  if (y <= .5) {  // "left" side of stripe
//     //     float edge = 0.0 ;    // position of the edge
//     //     sty = smoothstep(edge-ay,edge+ay,y);
//     // } else {        // right side of stripe
//     //     float edge =0.0;    // position of the edge
//     //     sty = 1.0-smoothstep(edge-ay,edge+ay,y);
//     // }
    
//    float st = smoothstep(0.0,h,abs(dstx));
//     float sty = smoothstep(0.5,h,abs(dsty));
//    float bb = st+sty;
// //    if ((st+sty)>1.9) bb = 1.0;
// //    else if ((st+sty) > 0.9) bb = 0.0;
// //    else if ((st+sty)< 0.9) bb= 1.0;
// //     else{
// //           bb = 0.0;
// //      }
//     gl_FragColor = vec4(mix(light,dark,bb), 1.);
//     //gl_FragColor = vec4(mix(light,dark,sty), 1.);
    
// }
void main()
{
    // the UV value overall (so that each square is 1x1)
    float u = v_uv.x * checks;
    float v = v_uv.y * checks;

    // figure out which square we're in
    float ui = floor(u);
    float vi = floor(v);

    // is this a dark square or a light square
    // set the color and the "not color" (we need this for anti-aliasing)
    vec3 color, notcolor;
    if ( mod(ui+vi,2.0) >= 1.0) {
        color = light;
        notcolor = dark;
    } else {
        color = dark;
        notcolor = light;
    }

    // if we weren't doing anti-aliasing, we could just do
    gl_FragColor = vec4(color,1.0);

    // now, for anti-aliasing
    // we need to figure out how far we are from an edge
    // to do this, we'll use the distance to the center
    // we do this in each direction
    // so that the edge is at .5
    float ud = abs(0.5-fract(u));
    float vd = abs(0.5-fract(v));

    // pick the direction we are closest to the edge in
    float d = max(ud,vd);

    // the real amount of blur (since the specified might be -1)
    float rblur = fwidth(d);

    // compute the amount of notcolor to mix in to do anti-aliasing
    // note the division by 2: at the boundary, we want it to be halfway between colors
    float aa = smoothstep(0.5 - rblur, 0.5, d ) / 2.0;

    gl_FragColor = vec4(mix(color,notcolor,aa),1);
    // gl_FragColor = vec4(d,d,d,1);
}