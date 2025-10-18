import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function RotatingBox() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 0.5, 0.1]} />
      <meshStandardMaterial color="#4f46e5" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Navbar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ height: "100px", width: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingBox />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
