/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform sampler2D v_texture;
varying vec3 v_xyz_world;
//varying vec3 v_xyz_local;
varying vec3 v_normal;

// note that this is in WORLD COORDINATES
const vec3 lightDir = vec3(-1,1,1);
void main()
{

    vec3 nhat = normalize(v_normal);

    float light = abs(dot(nhat, lightDir));

  vec4 t0 = texture(u_texture, v_uv);
   vec4 t1 = texture(v_texture, v_uv);
    gl_FragColor  = light*mix(t0, t1, v_uv.x);
}

