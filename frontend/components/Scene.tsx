
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene(){
  return(
    <Canvas camera={{ position:[0,0,6] }}>
      <ambientLight intensity={0.8}/>
      <directionalLight position={[2,2,5]}/>
      <mesh rotation={[0.5,0.5,0]}>
        <icosahedronGeometry args={[1.5,1]}/>
        <meshStandardMaterial color="#22c55e" wireframe/>
      </mesh>
      <OrbitControls autoRotate enableZoom={false}/>
    </Canvas>
  )
}
