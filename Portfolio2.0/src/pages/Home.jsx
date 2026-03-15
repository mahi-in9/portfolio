import { Canvas } from "@react-three/fiber";

function Home() {
  return (
    <div className="page">
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
          
        </mesh>
      </Canvas>
    </div>
  );
}

export default Home;
