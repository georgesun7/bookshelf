import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float wave1 = sin(pos.x * 1.5 + uTime * 0.4) * 0.15;
    float wave2 = sin(pos.y * 2.0 + uTime * 0.3) * 0.1;
    float wave3 = cos(pos.x * 1.0 + pos.y * 1.0 + uTime * 0.2) * 0.12;

    pos.z = wave1 + wave2 + wave3;
    vElevation = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    float brightness = 0.92 + vElevation * 0.25;
    vec3 color = vec3(brightness, brightness, brightness + 0.01);
    gl_FragColor = vec4(color, 0.35 + vElevation * 0.15);
  }
`;

const WaveMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

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
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[8, 8, 128, 128]} />
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
};

const FluidWave = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <WaveMesh />
      </Canvas>
    </div>
  );
};

export default FluidWave;
