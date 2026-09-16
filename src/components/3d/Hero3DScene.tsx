import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating interactive node representing connected freelance talent & client projects
function FloatingOrb({
  position,
  color,
  speed = 1,
  size = 0.5,
  distort = 0
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useMemo(() => position, [position]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = initialPos[1] + Math.sin(t) * 0.25;
    meshRef.current.position.x = initialPos[0] + Math.cos(t * 0.8) * 0.15;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.4;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.15}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

// Central interconnected collaboration ring
function CollaborationCluster() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { pointer } = state;
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smoothly react to mouse / cursor pointer
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.6 + t * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.4,
        0.05
      );
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.35;
      ringRef1.current.rotation.z = t * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.4;
      ringRef2.current.rotation.x = t * 0.15;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.06;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core Node: Jyruka Central Hub */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color="#eab308"
          wireframe
          emissive="#ca8a04"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#f8fafc"
          roughness={0.08}
          metalness={0.95}
          emissive="#94a3b8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbiting Orbital Rings: 24k Gold & Sterling Silver */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.0, 0.025, 16, 100]} />
        <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.8} />
      </mesh>

      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#e2e8f0" emissive="#94a3b8" emissiveIntensity={0.6} />
      </mesh>

      {/* Orbiting Specialist Nodes: Gold, Silver, and Obsidian */}
      {/* 24k Gold Node */}
      <FloatingOrb position={[1.8, 0.9, 0.6]} color="#eab308" size={0.35} speed={1.2} />
      {/* Platinum Silver Node */}
      <FloatingOrb position={[-1.7, -0.8, 0.5]} color="#f1f5f9" size={0.4} speed={0.9} />
      {/* Rich Amber Gold Node */}
      <FloatingOrb position={[1.4, -1.2, -0.6]} color="#f59e0b" size={0.3} speed={1.4} />
      {/* Sterling Silver Node */}
      <FloatingOrb position={[-1.5, 1.1, -0.4]} color="#cbd5e1" size={0.32} speed={1.1} />
      {/* Deep Obsidian with Gold Core Node */}
      <FloatingOrb position={[0, 1.9, -0.8]} color="#18181b" size={0.28} speed={1.6} />
    </group>
  );
}

// Subtle cosmic ambient particle dust
function ParticleDust({ count = 80 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#fef08a"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[380px] sm:h-[460px] lg:h-[540px] select-none ${className}`}>
      {/* Ambient background glow backdrop */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-amber-500/15 blur-[100px] animate-pulse" />
        <div className="w-56 h-56 rounded-full bg-zinc-400/10 blur-[85px] -translate-y-8 translate-x-12" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-6, -4, -2]} intensity={1.4} color="#f59e0b" />
        <pointLight position={[6, 4, 3]} intensity={1.2} color="#e2e8f0" />

        <CollaborationCluster />
        <ParticleDust count={75} />
      </Canvas>

      {/* Official Jyruka Network Status Badge */}
      <div className="absolute top-3 left-4 bg-zinc-950/85 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-full text-xs text-amber-300 flex items-center gap-2 shadow-lg shadow-black/40">
        <img src="/jyruka-icon.svg" alt="Jyruka Emblem" className="w-4 h-4 object-contain" />
        <span className="font-semibold text-white tracking-tight">Jyruka Ecosystem</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Floating dynamic tags to explain the visualization */}
      <div className="absolute bottom-3 left-4 right-4 sm:left-auto sm:right-6 bg-zinc-950/85 backdrop-blur-md border border-zinc-800 px-3.5 py-2 rounded-xl text-xs text-zinc-300 flex items-center justify-between sm:justify-start gap-2.5 shadow-xl shadow-black/60">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-medium text-white tracking-wide">Interactive 3D Ecosystem</span>
        </div>
        <span className="text-zinc-400 text-[11px] hidden sm:inline">• Move mouse to orbit</span>
      </div>
    </div>
  );
};
