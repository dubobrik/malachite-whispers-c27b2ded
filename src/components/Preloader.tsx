import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Malachite Box Body ─── */
const BoxBody = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color("hsl(160, 45%, 12%)"),
      roughness: 0.35,
      metalness: 0.15,
      envMapIntensity: 0.6,
    });
    return m;
  }, []);

  return (
    <mesh ref={mesh} position={[0, -0.15, 0]} material={mat} castShadow receiveShadow>
      <boxGeometry args={[1.6, 0.7, 1]} />
    </mesh>
  );
};

/* ─── Gold Trim Ring ─── */
const GoldTrim = ({ y, scaleY = 0.04 }: { y: number; scaleY?: number }) => {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(43, 76%, 52%)"),
    roughness: 0.2,
    metalness: 0.85,
    envMapIntensity: 1.2,
  }), []);

  return (
    <mesh position={[0, y, 0]} material={mat}>
      <boxGeometry args={[1.66, scaleY, 1.06]} />
    </mesh>
  );
};

/* ─── Lid with hinge rotation ─── */
const Lid = ({ opened }: { opened: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const targetAngle = opened ? -Math.PI * 0.55 : 0;
  const angleRef = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    const speed = opened ? 1.8 : 3;
    angleRef.current = THREE.MathUtils.lerp(angleRef.current, targetAngle, delta * speed);
    group.current.rotation.x = angleRef.current;
  });

  const lidMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(160, 42%, 10%)"),
    roughness: 0.3,
    metalness: 0.2,
    envMapIntensity: 0.6,
  }), []);

  const innerMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(43, 60%, 18%)"),
    roughness: 0.5,
    metalness: 0.1,
  }), []);

  return (
    <group position={[0, 0.2, -0.5]} ref={group}>
      {/* Lid body */}
      <mesh position={[0, 0.15, 0.5]} material={lidMat} castShadow>
        <boxGeometry args={[1.6, 0.3, 1]} />
      </mesh>
      {/* Lid inner face */}
      <mesh position={[0, 0.0, 0.5]} material={innerMat}>
        <boxGeometry args={[1.54, 0.02, 0.94]} />
      </mesh>
      {/* Gold trim on lid */}
      <mesh position={[0, 0.31, 0.5]}>
        <boxGeometry args={[1.66, 0.04, 1.06]} />
        <meshStandardMaterial color={new THREE.Color("hsl(43, 76%, 52%)")} roughness={0.2} metalness={0.85} />
      </mesh>
      {/* Gold clasp */}
      <mesh position={[0, 0.0, 1.03]}>
        <boxGeometry args={[0.2, 0.12, 0.06]} />
        <meshStandardMaterial color={new THREE.Color("hsl(43, 76%, 50%)")} roughness={0.25} metalness={0.9} />
      </mesh>
    </group>
  );
};

/* ─── Interior Golden Light ─── */
const InteriorLight = ({ intensity }: { intensity: number }) => {
  const ref = useRef<THREE.PointLight>(null);
  const targetInt = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;
    targetInt.current = THREE.MathUtils.lerp(targetInt.current, intensity, delta * 3);
    ref.current.intensity = targetInt.current;
  });

  return (
    <pointLight
      ref={ref}
      position={[0, 0.1, 0]}
      color={new THREE.Color("hsl(43, 80%, 60%)")}
      intensity={0}
      distance={5}
      decay={2}
      castShadow={false}
    />
  );
};

/* ─── Floating Particles ─── */
const Particles = ({ active }: { active: boolean }) => {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 1.2,
      z: (Math.random() - 0.5) * 0.7,
      speed: 0.3 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.4,
      size: 0.01 + Math.random() * 0.025,
      phase: Math.random() * Math.PI * 2,
    })), []
  );
  const progress = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const target = active ? 1 : 0;
    progress.current = THREE.MathUtils.lerp(progress.current, target, delta * 2);

    for (let i = 0; i < count; i++) {
      const d = data[i];
      const t = progress.current;
      const y = t * d.speed * 2.5;
      const fadeIn = Math.min(t * 3, 1);
      const fadeOut = Math.max(0, 1 - (y / 2));
      const scale = d.size * fadeIn * fadeOut * t;

      dummy.position.set(
        d.x + Math.sin(d.phase + y * 2) * d.drift,
        y - 0.1,
        d.z + Math.cos(d.phase + y * 3) * d.drift * 0.5
      );
      dummy.scale.setScalar(scale > 0 ? scale : 0.001);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const mat = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color("hsl(43, 80%, 65%)"),
    transparent: true,
    opacity: 0.8,
  }), []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} material={mat}>
      <sphereGeometry args={[1, 8, 8]} />
    </instancedMesh>
  );
};

/* ─── Camera Animation ─── */
const CameraRig = ({ phase }: { phase: string }) => {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const targetZ = phase === "dark" ? 5 : phase === "appear" ? 4.2 : phase === "expand" ? 2.8 : 3.5;
    const targetY = phase === "expand" ? 0.8 : 1.2;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 1.5);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 1.5);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

/* ─── Main Scene ─── */
const Scene = ({ phase }: { phase: string }) => {
  const opened = phase !== "dark" && phase !== "appear";
  const glowing = phase === "glow" || phase === "expand" || phase === "fade";
  const expanding = phase === "expand" || phase === "fade";

  return (
    <>
      <CameraRig phase={phase} />
      <ambientLight intensity={0.15} color={new THREE.Color("hsl(160, 30%, 50%)")} />
      <directionalLight position={[3, 5, 2]} intensity={0.4} color={new THREE.Color("hsl(40, 30%, 90%)")} />
      <directionalLight position={[-2, 3, -1]} intensity={0.15} color={new THREE.Color("hsl(160, 40%, 60%)")} />

      <InteriorLight intensity={expanding ? 8 : glowing ? 4 : opened ? 1.5 : 0} />

      <Float speed={0.8} rotationIntensity={0.02} floatIntensity={0.08}>
        <group>
          <BoxBody />
          <GoldTrim y={0.2} />
          <GoldTrim y={-0.5} />
          <Lid opened={opened} />
          <Particles active={glowing} />
        </group>
      </Float>

      <Environment preset="night" />

      {/* Floor reflection hint */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial
          color={new THREE.Color("hsl(160, 30%, 4%)")}
          roughness={0.7}
          metalness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
};

/* ─── Preloader Wrapper ─── */
type Phase = "dark" | "appear" | "open" | "glow" | "expand" | "fade";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("dark");

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase("appear"), 100),
      setTimeout(() => setPhase("open"), 500),
      setTimeout(() => setPhase("glow"), 1300),
      setTimeout(() => setPhase("expand"), 1900),
      setTimeout(() => setPhase("fade"), 2300),
      setTimeout(onComplete, 2700),
    ];
    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  const expanding = phase === "expand" || phase === "fade";

  return (
    <AnimatePresence>
      {phase !== "fade" ? (
        <motion.div
          className="fixed inset-0 z-[200]"
          style={{ background: "hsl(160, 30%, 3%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Golden expansion wash */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            animate={{ opacity: expanding ? 0.6 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "radial-gradient(ellipse 100% 80% at 50% 45%, hsl(43 76% 52% / 0.25) 0%, transparent 70%)",
            }}
          />

          {/* 3D Canvas */}
          <Canvas
            camera={{ position: [0, 1.2, 5], fov: 35 }}
            gl={{ antialias: true, alpha: false }}
            style={{ background: "hsl(160, 30%, 3%)" }}
            dpr={[1, 1.5]}
          >
            <Scene phase={phase} />
          </Canvas>

          {/* Title */}
          <motion.p
            className="absolute bottom-[15%] left-1/2 -translate-x-1/2 font-display text-lg tracking-[0.25em] z-10"
            style={{
              background: "linear-gradient(135deg, hsl(43 76% 70%), hsl(43 76% 42%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{
              opacity: expanding ? 0 : phase !== "dark" ? 1 : 0,
              y: phase !== "dark" ? 0 : 15,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Малахитовая шкатулка
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
