import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type FishConfig = {
  color: string;
  finColor: string;
  scale: number;
  offset: number;
  speed: number;
};

const fishConfigs: FishConfig[] = [
  { color: '#4a90e2', finColor: '#357ab8', scale: 1, offset: 0, speed: 1 },
  { color: '#e94e77', finColor: '#d43665', scale: 0.65, offset: 0.33, speed: 0.8 },
  { color: '#50e3c2', finColor: '#3cc3b0', scale: 0.5, offset: 0.66, speed: 1.2 },
];

const Fish: React.FC<{ config: FishConfig; index: number }> = ({ config, index }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const tailRef = useRef<THREE.Group | null>(null);
  const leftFinRef = useRef<THREE.Group | null>(null);
  const rightFinRef = useRef<THREE.Group | null>(null);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-5, -0.8 + index * 0.45, -1.8),
          new THREE.Vector3(-2.4, 0.7 - index * 0.25, 1.2),
          new THREE.Vector3(1.8, -0.3 + index * 0.2, 2.2),
          new THREE.Vector3(5, 0.5 - index * 0.35, -1),
          new THREE.Vector3(2.5, -0.9 + index * 0.25, -2.6),
          new THREE.Vector3(-2, 0.4 - index * 0.2, -2),
        ],
        true,
        'catmullrom',
        0.5
      ),
    [index]
  );

  useFrame((state, delta) => {
    const fish = groupRef.current;
    if (!fish) return;

    const elapsed = state.clock.elapsedTime;
    const progress = (elapsed * 0.06 * config.speed + config.offset) % 1;
    const nextProgress = (progress + delta * 0.08) % 1;
    const position = curve.getPointAt(progress);
    const nextPosition = curve.getPointAt(nextProgress);

    fish.position.copy(position);
    fish.lookAt(nextPosition);
    fish.rotation.z += Math.sin(elapsed * 1.8 + index) * 0.12;
    fish.rotation.x += Math.sin(elapsed * 1.2 + index) * 0.06;

    if (tailRef.current) {
      tailRef.current.rotation.y = Math.sin(elapsed * 8 + index) * 0.45;
    }

    const finFlap = Math.sin(elapsed * 5 + index) * 0.22;
    if (leftFinRef.current) leftFinRef.current.rotation.z = finFlap;
    if (rightFinRef.current) rightFinRef.current.rotation.z = -finFlap;
  });

  return (
    <group ref={groupRef} scale={config.scale}>
      <mesh name="body">
        <sphereGeometry args={[0.42, 16, 12]} />
        <meshStandardMaterial color={config.color} metalness={0.1} roughness={0.65} />
      </mesh>
      <group ref={tailRef} name="tail" position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <coneGeometry args={[0.28, 0.24, 8]} />
          <meshStandardMaterial color={config.finColor} metalness={0.1} roughness={0.65} />
        </mesh>
      </group>
      <mesh name="eye" position={[0.24, 0.08, 0.18]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>
      <group ref={leftFinRef} name="leftFin" position={[0, 0, 0.28]} rotation={[0.2, 0, 0.3]}>
        <mesh>
          <planeGeometry args={[0.24, 0.16, 4, 2]} />
          <meshStandardMaterial color={config.finColor} roughness={0.65} side={THREE.DoubleSide} />
        </mesh>
      </group>
      <group ref={rightFinRef} name="rightFin" position={[0, 0, -0.28]} rotation={[-0.2, 0, -0.3]}>
        <mesh>
          <planeGeometry args={[0.24, 0.16, 4, 2]} />
          <meshStandardMaterial color={config.finColor} roughness={0.65} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

const FishScene: React.FC = () => (
  <>
    <ambientLight intensity={0.35} />
    <directionalLight position={[5, 5, 5]} intensity={0.55} />
    <directionalLight position={[-5, -2, -5]} intensity={0.28} />
    {fishConfigs.map((config, index) => (
      <Fish key={config.color} config={config} index={index} />
    ))}
  </>
);

const FishBackground: React.FC = () => {
  const pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

  return (
    <Canvas
      className="fixed inset-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={pixelRatio}
      aria-hidden="true"
    >
      <FishScene />
    </Canvas>
  );
};

export default FishBackground;
