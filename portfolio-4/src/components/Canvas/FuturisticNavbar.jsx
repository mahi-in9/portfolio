import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function RotatingCubes() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    groupRef.current.rotation.x = clock.getElapsedTime() * 0.1;
  });

  const cubeCount = 8;
  const cubes = [];

  for (let i = 0; i < cubeCount; i++) {
    const angle = (i / cubeCount) * Math.PI * 2;
    const x = Math.cos(angle) * 2.5;
    const y = Math.sin(angle) * 0.5;
    const z = Math.sin(angle) * 1.5;

    cubes.push(
      <mesh key={i} position={[x, y, z]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={`hsl(${(i / cubeCount) * 360}, 100%, 50%)`}
          metalness={0.7}
          roughness={0.1}
          emissive={`hsl(${(i / cubeCount) * 360}, 100%, 50%)`}
        />
      </mesh>
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
}

export default function FuturisticNavbar() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ width: "100%", height: "120px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars
        radius={30}
        depth={50}
        count={200}
        factor={4}
        saturation={0}
        fade
      />
      <RotatingCubes />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
