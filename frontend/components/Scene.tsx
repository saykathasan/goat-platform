import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#00ffcc" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
