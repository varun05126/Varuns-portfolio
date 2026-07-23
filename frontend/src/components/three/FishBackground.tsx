import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlowObject: React.FC<{
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}> = ({ position, color, scale, speed }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.x = elapsed * 0.16 * speed;
      groupRef.current.rotation.y = elapsed * 0.22 * speed;
      groupRef.current.position.y = position[1] + Math.sin(elapsed * speed) * 0.25;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(elapsed * 2.2 * speed) * 0.08;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.72, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.1}
          roughness={0.35}
          metalness={0.15}
          transparent
          opacity={0.72}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.12, 0.018, 12, 96]} />
        <meshBasicMaterial color={color} transparent opacity={0.48} />
      </mesh>
      <mesh rotation={[0.75, 0.35, 0.4]}>
        <torusGeometry args={[1.45, 0.012, 12, 96]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points | null>(null);
  const positions = React.useMemo(() => {
    const values = new Float32Array(90);
    for (let i = 0; i < 30; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 12;
      values[i * 3 + 1] = (Math.random() - 0.5) * 7;
      values[i * 3 + 2] = -2 - Math.random() * 4;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#2563eb" size={0.035} transparent opacity={0.35} />
    </points>
  );
};

const GlowScene: React.FC = () => (
  <>
    <ambientLight intensity={0.38} />
    <pointLight position={[-4, 2, 4]} color="#2563eb" intensity={2.1} />
    <pointLight position={[4, -1, 3]} color="#14b8a6" intensity={1.4} />
    <GlowObject position={[-4.7, 1.6, -2.5]} color="#2563eb" scale={0.62} speed={0.9} />
    <GlowObject position={[4.4, -1.15, -2.8]} color="#14b8a6" scale={0.52} speed={1.1} />
    <GlowObject position={[2.7, 2.25, -4.2]} color="#7c3aed" scale={0.36} speed={1.35} />
    <ParticleField />
  </>
);

const FishBackground: React.FC = () => {
  const pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.75) : 1;

  return (
    <Canvas
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        opacity: 0.55,
      }}
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={pixelRatio}
      aria-hidden="true"
    >
      <GlowScene />
    </Canvas>
  );
};

export default FishBackground;
