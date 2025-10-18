import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState } from "react";

function InteractiveText({ name }) {
  const textRef = useRef();
  const [mousePos, setMousePos] = useState([0, 0]);

  // Rotate text based on cursor position
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y = mousePos[0] * 0.005;
      textRef.current.rotation.x = mousePos[1] * 0.005;
    }
  });

  // Capture mouse movement
  const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setMousePos([x, y]);
  };

  return (
    <group onPointerMove={handleMouseMove}>
      <Text
        ref={textRef}
        fontSize={1}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff" // optional custom font
      >
        {name}
      </Text>
    </group>
  );
}

export default function Name3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <InteractiveText name="Mahendra" />
    </Canvas>
  );
}
