/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform sampler2D v_texture;
varying vec3 v_xyz_world;
//varying vec3 v_xyz_local;
varying vec3 v_normal;
uniform float lt;
// note that this is in WORLD COORDINATES
const vec3 lightDir = vec3(-1,1,1);
const vec3 baseColor = vec3(0.9,.3,.3);
const vec3 baseColor2 = vec3(0.1,.7,.3);
void main()
{
    vec3 nhat = normalize(v_normal);

    float light = lt/15.0*abs(dot(nhat, lightDir));

  vec4 t0 = texture(u_texture, v_uv);
   vec4 t1 = texture(v_texture, v_uv);
   
    if ( sin(v_uv.y+v_uv.x) >0.8) gl_FragColor =vec4(light*baseColor + baseColor2,1.);
    else{
        gl_FragColor  = mix(t0, t1, v_uv.x);
}
}

