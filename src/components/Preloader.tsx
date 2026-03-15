import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ─── Procedural Malachite Texture ─── */
function createMalachiteTexture(width = 512, height = 512): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Base dark green
  ctx.fillStyle = "hsl(162, 45%, 8%)";
  ctx.fillRect(0, 0, width, height);

  // Layered concentric vein bands — the hallmark of real malachite
  const centers = [
    { x: width * 0.3, y: height * 0.4 },
    { x: width * 0.7, y: height * 0.6 },
    { x: width * 0.5, y: height * 0.2 },
    { x: width * 0.15, y: height * 0.8 },
    { x: width * 0.85, y: height * 0.3 },
  ];

  for (const center of centers) {
    const maxR = 280 + Math.random() * 120;
    const bands = 18 + Math.floor(Math.random() * 12);
    for (let b = bands; b >= 0; b--) {
      const r = (b / bands) * maxR;
      const lightness = 10 + (b % 3) * 6 + Math.sin(b * 0.8) * 4;
      const sat = 38 + Math.sin(b * 1.2) * 12;
      ctx.beginPath();
      ctx.ellipse(center.x, center.y, r * 1.2, r * 0.8, Math.random() * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${158 + Math.sin(b) * 6}, ${sat}%, ${lightness}%, ${0.15 + (b % 2) * 0.08})`;
      ctx.lineWidth = 1.5 + Math.random() * 2;
      ctx.stroke();
    }
  }

  // Thin gold-tinted veins scattered across
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    const startX = Math.random() * width;
    const startY = Math.random() * height;
    ctx.moveTo(startX, startY);
    let cx = startX, cy = startY;
    for (let s = 0; s < 8; s++) {
      cx += (Math.random() - 0.5) * 100;
      cy += (Math.random() - 0.3) * 80;
      ctx.lineTo(cx, cy);
    }
    ctx.strokeStyle = `hsla(160, 50%, ${18 + Math.random() * 8}%, ${0.2 + Math.random() * 0.15})`;
    ctx.lineWidth = 0.5 + Math.random() * 1;
    ctx.stroke();
  }

  // Subtle lighter patches for depth
  for (let i = 0; i < 12; i++) {
    const gx = Math.random() * width;
    const gy = Math.random() * height;
    const gr = 30 + Math.random() * 60;
    const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
    grad.addColorStop(0, `hsla(155, 40%, ${16 + Math.random() * 6}%, 0.15)`);
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/* ─── Procedural Normal Map for polished stone relief ─── */
function createMalachiteNormal(width = 512, height = 512): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Neutral normal base (128, 128, 255)
  ctx.fillStyle = "rgb(128, 128, 255)";
  ctx.fillRect(0, 0, width, height);

  // Subtle wave-like bumps for stone grain
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    const cx = Math.random() * width;
    const cy = Math.random() * height;
    const maxR = 40 + Math.random() * 80;
    for (let b = 0; b < 6; b++) {
      const r = maxR - b * 12;
      if (r <= 0) break;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 1.3, r * 0.7, Math.random() * 0.5, 0, Math.PI * 2);
      const offset = (b % 2 === 0) ? 138 : 118;
      ctx.strokeStyle = `rgb(${offset}, ${offset}, 255)`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/* ─── Shared Materials ─── */
function useMalachiteMaterial() {
  return useMemo(() => {
    const map = createMalachiteTexture();
    const normalMap = createMalachiteNormal();
    return new THREE.MeshPhysicalMaterial({
      map,
      normalMap,
      normalScale: new THREE.Vector2(0.3, 0.3),
      color: new THREE.Color("hsl(160, 50%, 14%)"),
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      envMapIntensity: 1.0,
      reflectivity: 0.6,
    });
  }, []);
}

function useGoldMaterial() {
  return useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("hsl(43, 80%, 50%)"),
    roughness: 0.15,
    metalness: 0.95,
    envMapIntensity: 1.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.1,
    reflectivity: 0.9,
  }), []);
}

/* ─── Malachite Box Body ─── */
const BoxBody = () => {
  const mat = useMalachiteMaterial();
  return (
    <mesh position={[0, -0.15, 0]} material={mat} castShadow receiveShadow>
      <boxGeometry args={[1.6, 0.7, 1]} />
    </mesh>
  );
};

/* ─── Gold Trim ─── */
const GoldTrim = ({ y, width = 1.66, height = 0.045, depth = 1.06 }: { y: number; width?: number; height?: number; depth?: number }) => {
  const mat = useGoldMaterial();
  return (
    <mesh position={[0, y, 0]} material={mat}>
      <boxGeometry args={[width, height, depth]} />
    </mesh>
  );
};

/* ─── Gold corner ornaments ─── */
const GoldCorner = ({ x, y, z }: { x: number; y: number; z: number }) => {
  const mat = useGoldMaterial();
  return (
    <mesh position={[x, y, z]} material={mat}>
      <sphereGeometry args={[0.035, 12, 12]} />
    </mesh>
  );
};

/* ─── Gold Hinges ─── */
const GoldHinge = ({ x }: { x: number }) => {
  const mat = useGoldMaterial();
  return (
    <group position={[x, 0.2, -0.5]}>
      <mesh material={mat}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 12]} />
      </mesh>
    </group>
  );
};

/* ─── Lid with hinge rotation ─── */
const Lid = ({ opened }: { opened: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const targetAngle = opened ? -Math.PI * 0.55 : 0;
  const angleRef = useRef(0);

  const malachiteMat = useMalachiteMaterial();
  const goldMat = useGoldMaterial();

  const innerMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("hsl(35, 55%, 14%)"),
    roughness: 0.45,
    metalness: 0.05,
    envMapIntensity: 0.4,
  }), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const speed = opened ? 1.8 : 3;
    angleRef.current = THREE.MathUtils.lerp(angleRef.current, targetAngle, delta * speed);
    group.current.rotation.x = angleRef.current;
  });

  return (
    <group position={[0, 0.2, -0.5]} ref={group}>
      {/* Lid body — malachite */}
      <mesh position={[0, 0.15, 0.5]} material={malachiteMat} castShadow>
        <boxGeometry args={[1.6, 0.3, 1]} />
      </mesh>
      {/* Lid inner velvet-like surface */}
      <mesh position={[0, 0.0, 0.5]} material={innerMat}>
        <boxGeometry args={[1.5, 0.02, 0.9]} />
      </mesh>
      {/* Gold trim on lid top */}
      <mesh position={[0, 0.31, 0.5]} material={goldMat}>
        <boxGeometry args={[1.66, 0.045, 1.06]} />
      </mesh>
      {/* Gold trim on lid front edge */}
      <mesh position={[0, 0.15, 1.005]} material={goldMat}>
        <boxGeometry args={[1.62, 0.32, 0.02]} />
      </mesh>
      {/* Gold clasp */}
      <mesh position={[0, 0.0, 1.03]} material={goldMat}>
        <boxGeometry args={[0.18, 0.1, 0.05]} />
      </mesh>
      {/* Clasp jewel */}
      <mesh position={[0, 0.0, 1.06]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshPhysicalMaterial
          color={new THREE.Color("hsl(145, 60%, 30%)")}
          roughness={0.1}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
};

/* ─── Interior Golden Light ─── */
const InteriorLight = ({ intensity }: { intensity: number }) => {
  const ref = useRef<THREE.PointLight>(null);
  const ref2 = useRef<THREE.SpotLight>(null);
  const targetInt = useRef(0);

  useFrame((_, delta) => {
    targetInt.current = THREE.MathUtils.lerp(targetInt.current, intensity, delta * 3);
    if (ref.current) ref.current.intensity = targetInt.current;
    if (ref2.current) ref2.current.intensity = targetInt.current * 0.6;
  });

  return (
    <>
      <pointLight
        ref={ref}
        position={[0, 0.05, 0]}
        color={new THREE.Color("hsl(43, 85%, 60%)")}
        intensity={0}
        distance={4}
        decay={2}
      />
      <spotLight
        ref={ref2}
        position={[0, 0.1, 0]}
        angle={Math.PI * 0.4}
        penumbra={0.8}
        color={new THREE.Color("hsl(40, 80%, 65%)")}
        intensity={0}
        distance={5}
        decay={2}
        target-position={[0, 2, 0]}
      />
    </>
  );
};

/* ─── Golden Dust Particles ─── */
const Particles = ({ active }: { active: boolean }) => {
  const count = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const elapsed = useRef(0);

  const data = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      // Spawn area — clustered inside the box opening
      x: (Math.random() - 0.5) * 1.0,
      z: (Math.random() - 0.5) * 0.6,
      // Each particle has its own lifecycle offset so they stagger naturally
      birthOffset: Math.random() * 4,
      // Slow upward speed with variation
      speed: 0.12 + Math.random() * 0.2,
      // Gentle lateral wander
      wanderX: (Math.random() - 0.5) * 0.15,
      wanderZ: (Math.random() - 0.5) * 0.1,
      wanderFreq: 0.4 + Math.random() * 0.6,
      // Size variation — mostly tiny with a few slightly larger motes
      size: i < 10
        ? 0.012 + Math.random() * 0.014   // ~16% larger motes
        : 0.004 + Math.random() * 0.009,  // majority: fine dust
      phase: Math.random() * Math.PI * 2,
      // Lifetime for each particle cycle
      lifetime: 3 + Math.random() * 3,
    })), []
  );

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    if (active) elapsed.current += delta;
    const t = elapsed.current;

    for (let i = 0; i < count; i++) {
      const d = data[i];

      // Particle doesn't start until active and past its birth offset
      const localT = t - d.birthOffset;
      if (!active || localT < 0) {
        dummy.scale.setScalar(0.001);
        dummy.position.set(0, -5, 0);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        continue;
      }

      // Cycle within lifetime
      const cycle = (localT % d.lifetime) / d.lifetime; // 0..1

      // Smooth bell-curve opacity via scale: fade in, sustain, fade out
      const fadeIn = Math.min(cycle * 5, 1);
      const fadeOut = Math.max(0, 1 - Math.pow((cycle - 0.7) / 0.3, 2));
      const visibility = cycle < 0.7 ? fadeIn : fadeOut;
      const scale = d.size * Math.max(visibility, 0);

      // Slow upward rise
      const y = cycle * d.speed * 8 - 0.05;

      // Gentle wander
      const wx = Math.sin(d.phase + localT * d.wanderFreq) * d.wanderX;
      const wz = Math.cos(d.phase * 1.3 + localT * d.wanderFreq * 0.7) * d.wanderZ;

      dummy.position.set(d.x + wx, y, d.z + wz);
      dummy.scale.setScalar(Math.max(scale, 0.001));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Custom additive-blend material for soft glow
  const mat = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color("hsl(43, 80%, 65%)"),
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
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
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    const targetZ = phase === "dark" ? 5 : phase === "appear" ? 4 : phase === "expand" ? 2.6 : 3.3;
    const targetY = phase === "expand" ? 0.7 : 1.1;
    // Subtle orbit sway
    const swayX = Math.sin(time.current * 0.3) * 0.08;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 1.5);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 1.5);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, swayX, delta * 1.2);
    camera.lookAt(0, -0.05, 0);
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

      {/* Cinematic lighting rig */}
      <ambientLight intensity={0.08} color={new THREE.Color("hsl(160, 25%, 40%)")} />

      {/* Key light — warm, angled from top-right */}
      <directionalLight
        position={[3, 4.5, 2]}
        intensity={0.5}
        color={new THREE.Color("hsl(38, 30%, 92%)")}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Fill light — cool emerald from left */}
      <directionalLight
        position={[-3, 2, -1]}
        intensity={0.12}
        color={new THREE.Color("hsl(160, 45%, 55%)")}
      />

      {/* Rim light — subtle backlight for silhouette */}
      <directionalLight
        position={[0, 2, -3]}
        intensity={0.2}
        color={new THREE.Color("hsl(200, 20%, 75%)")}
      />

      {/* Interior golden glow */}
      <InteriorLight intensity={expanding ? 10 : glowing ? 5 : opened ? 2 : 0} />

      <Float speed={0.6} rotationIntensity={0.015} floatIntensity={0.06}>
        <group>
          <BoxBody />

          {/* Gold trim bands */}
          <GoldTrim y={0.2} />
          <GoldTrim y={-0.5} />
          {/* Mid-body trim */}
          <GoldTrim y={-0.15} width={1.64} height={0.02} depth={1.04} />

          {/* Gold vertical edge accents */}
          {[
            [0.82, -0.15, 0.52],
            [-0.82, -0.15, 0.52],
            [0.82, -0.15, -0.52],
            [-0.82, -0.15, -0.52],
          ].map(([x, y, z], i) => (
            <mesh key={`edge-${i}`} position={[x, y, z]}>
              <boxGeometry args={[0.025, 0.72, 0.025]} />
              <meshPhysicalMaterial
                color={new THREE.Color("hsl(43, 80%, 50%)")}
                roughness={0.15}
                metalness={0.95}
              />
            </mesh>
          ))}

          {/* Gold corner ornaments */}
          {[
            [0.82, 0.2, 0.52], [-0.82, 0.2, 0.52],
            [0.82, 0.2, -0.52], [-0.82, 0.2, -0.52],
            [0.82, -0.5, 0.52], [-0.82, -0.5, 0.52],
            [0.82, -0.5, -0.52], [-0.82, -0.5, -0.52],
          ].map(([x, y, z], i) => (
            <GoldCorner key={`corner-${i}`} x={x} y={y} z={z} />
          ))}

          {/* Hinges on back edge */}
          <GoldHinge x={-0.5} />
          <GoldHinge x={0.5} />

          <Lid opened={opened} />
          <Particles active={glowing} />
        </group>
      </Float>

      <Environment preset="night" />

      {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.56, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshPhysicalMaterial
          color={new THREE.Color("hsl(160, 28%, 3%)")}
          roughness={0.5}
          metalness={0.15}
          transparent
          opacity={0.6}
          envMapIntensity={0.3}
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
      setTimeout(() => setPhase("fade"), 2400),
      setTimeout(onComplete, 3400),
    ];
    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  const expanding = phase === "expand" || phase === "fade";
  const fading = phase === "fade";

  return (
    <motion.div
      className="fixed inset-0 z-[200]"
      style={{ background: "hsl(160, 30%, 3%)" }}
      animate={{
        opacity: fading ? 0 : 1,
      }}
      transition={{ duration: fading ? 1.0 : 0.3, ease: "easeInOut" }}
    >
      {/* Golden glow overlay — expands then fades with the whole preloader */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{
          opacity: fading ? 0 : expanding ? 0.8 : 0,
          scale: fading ? 2.5 : expanding ? 1.5 : 1,
        }}
        transition={{ duration: fading ? 1.0 : 0.6, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse 100% 80% at 50% 45%, hsl(43 76% 52% / 0.35) 0%, hsl(43 76% 52% / 0.08) 40%, transparent 70%)",
        }}
      />

      {/* Smooth background blend — matches site background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[11]"
        animate={{
          opacity: fading ? 1 : expanding ? 0.3 : 0,
        }}
        transition={{ duration: fading ? 0.8 : 0.5, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, hsl(160 30% 5% / 0.95) 0%, hsl(160 30% 3%) 100%)",
        }}
      />

      {/* 3D Canvas */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: fading ? 0 : 1,
          scale: fading ? 1.1 : 1,
        }}
        transition={{ duration: fading ? 0.8 : 0.3, ease: "easeOut" }}
      >
        <Canvas
          camera={{ position: [0, 1.1, 5], fov: 32 }}
          gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
          style={{ background: "hsl(160, 30%, 3%)" }}
          dpr={[1, 1.5]}
          shadows
        >
          <Scene phase={phase} />
        </Canvas>
      </motion.div>

      {/* Title */}
      <motion.p
        className="absolute bottom-[14%] left-1/2 -translate-x-1/2 font-display text-lg tracking-[0.25em] z-10 whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, hsl(43 76% 72%), hsl(43 76% 42%))",
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
  );
};

export default Preloader;
