/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
//varying vec2 v_uv;

varying vec3 v_xyz_world;
//varying vec3 v_xyz_local;
varying vec3 v_normal;

// note that this is in WORLD COORDINATES
const vec3 lightDir = vec3(-1,1,1);
//const vec3 baseColor = vec3(0.7,.3,.3);

void main()
{
    vec3 nhat = normalize(v_normal);

    float light = abs(dot(nhat, lightDir));
    // brighten the base color
    //gl_FragColor = vec4(light * baseColor,1);
    
   gl_FragColor = vec4( light*abs(sin(v_xyz_world.x * 3.141)),
                        light*abs(sin(v_xyz_world.z * 3.141)),
                        0,1);
}


// void main()
// {
//     gl_FragColor = vec4(.5, .5, 0 , 1.);
// }

