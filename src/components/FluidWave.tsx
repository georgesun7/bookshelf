import { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float wave1 = sin(pos.x * 1.5 + uTime * 0.4) * 0.12;
    float wave2 = sin(pos.y * 2.0 + uTime * 0.3) * 0.08;
    float wave3 = cos(pos.x * 1.0 + pos.y * 1.0 + uTime * 0.2) * 0.1;

    pos.z = wave1 + wave2 + wave3;
    vElevation = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    float brightness = 0.88 + vElevation * 0.4;
    vec3 color = vec3(brightness);
    float alpha = 0.25 + vElevation * 0.3;
    gl_FragColor = vec4(color, alpha);
  }
`;

function WaveMesh() {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh rotation={[-Math.PI / 2.8, 0, 0]} position={[0, -0.8, 0]}>
      <planeGeometry args={[10, 10, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

const FluidWave = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 2, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <WaveMesh />
      </Canvas>
    </div>
  );
};

export default FluidWave;
