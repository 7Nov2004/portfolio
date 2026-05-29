"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#8a2be2" />
      <directionalLight position={[-10, -10, -10]} intensity={2} color="#00ffff" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#3b0764"
            emissiveIntensity={0.5}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>

      {/* Outer Glowing Ring */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 32, 100]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={3} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.2, 0.015, 32, 100]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} />
        </mesh>
      </Float>

      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
