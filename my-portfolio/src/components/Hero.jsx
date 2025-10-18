import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <Text3D
          font="/fonts/Roboto_Regular.json"
          size={1.5}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.03}
        >
          Mahendra
          <meshStandardMaterial color="#00ffff" />
        </Text3D>
      </Canvas>

      <motion.div
        className="absolute bottom-10 text-center text-white text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p>🚀 MERN Stack Developer | Building interactive 3D experiences</p>
      </motion.div>
    </div>
  );
}
