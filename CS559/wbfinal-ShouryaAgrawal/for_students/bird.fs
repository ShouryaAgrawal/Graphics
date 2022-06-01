
uniform sampler2D colormap;

varying vec2 v_uv;
precision highp float;
uniform vec3 light;
uniform vec3 dark;
uniform float time;


void main( void ) {
    
    vec2 U = gl_FragCoord.xy;
    vec4 f = v_uv.xyxy;
      f = length(U+=U-f.xy)/f+2.0;
      f = sin(f.w-.1) * vec4(sin(100./f + atan(U.x,U.y)*50. - time*15.0).w < 0.9);
    gl_FragColor = vec4(mix(light,dark,f.x), 1.) + vec4(0, f.x, 0, 1)*7.3;

}