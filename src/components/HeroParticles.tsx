import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { Group, PerspectiveCamera } from "three";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

const PARTICLE_COUNT = 600;
// stars spread across a handful of depths rather than a continuous range —
// cheap way to get real parallax (near stars drift more) without per-star work
const DEPTHS = [-2, -4, -6, -8];
// small buffer beyond the visible rectangle so the parallax rotation never
// reveals a bare edge
const OVERSCAN = 1.25;

// aurora spectrum, cycled across particles for depth variety
const AURORA_RGB = [
  [139, 92, 246],
  [99, 102, 241],
  [244, 114, 182],
  [255, 255, 255],
];

function ParticleField() {
  const group = useRef<Group>(null);
  const { camera, size } = useThree();
  // read via ref in the render loop instead of React state — avoids a re-render per mousemove
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Fills the actual visible rectangle at each star's depth (via the camera's
  // real frustum size there), not a sphere — a sphere leaves the corners of a
  // wide, short canvas empty no matter how much you stretch it.
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const z = DEPTHS[i % DEPTHS.length];
      const { width, height } = viewportAt(camera as PerspectiveCamera, size, z);
      positions[i * 3] = (Math.random() * 2 - 1) * (width / 2) * OVERSCAN;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * (height / 2) * OVERSCAN;
      positions[i * 3 + 2] = z;

      const [r, g, b] = AURORA_RGB[i % AURORA_RGB.length];
      colors[i * 3] = r / 255;
      colors[i * 3 + 1] = g / 255;
      colors[i * 3 + 2] = b / 255;
    }
    return { positions, colors };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width, size.height]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.03;
    // lerp toward the pointer so parallax settles instead of snapping
    g.rotation.x += (pointer.current.y * 0.08 - g.rotation.x) * 0.03;
    g.rotation.z += (pointer.current.x * 0.05 - g.rotation.z) * 0.03;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.85} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

// The visible width/height (in world units) at a given z, for whatever
// camera + canvas size @react-three/fiber is currently running.
function viewportAt(camera: PerspectiveCamera, size: { width: number; height: number }, z: number) {
  const distance = camera.position.z - z;
  const fovRad = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(fovRad / 2) * distance;
  const width = height * (size.width / size.height);
  return { width, height };
}

const FALLBACK_HEIGHT = 520; // used only for the first frame, before #hero-badge can be measured

// The canvas has to stop exactly at the badge, not a guessed breakpoint
// height — Hero's own top padding (and the badge's height) changes across
// breakpoints, so any fixed px guess drifts from the real edge. Measuring
// the actual element is the only way this stays correct everywhere.
function useHeightAboveBadge() {
  const [height, setHeight] = useState(FALLBACK_HEIGHT);

  useEffect(() => {
    const measure = () => {
      const badge = document.getElementById("hero-badge");
      if (!badge) return;
      const top = badge.getBoundingClientRect().top + window.scrollY;
      setHeight(Math.max(top - 4, 0));
    };
    measure();
    // fonts/layout can still shift after first paint
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return height;
}

/**
 * Ambient depth layer behind the hero — this is the one spot in the redesign
 * that earns actual WebGL: a flat CSS gradient can't fake this parallax.
 * Pinned to the top of the page (not scoped inside Hero's own padded box) so
 * it reads as one band sitting behind the floating nav pill as well. Star
 * placement fills the real visible rectangle at each depth (see viewportAt),
 * so it covers corner to corner instead of thinning out toward the edges.
 * Skipped entirely (not just paused) under reduced-motion, same as every
 * other animated layer on the page.
 */
export function HeroParticles() {
  const reduced = usePrefersReducedMotion();
  const height = useHeightAboveBadge();
  if (reduced) return null;

  return (
    <Canvas
      className="pointer-events-none inset-x-0 top-0 z-0"
      // R3F hardcodes `position: relative` as an inline style on this wrapper —
      // an inline style always beats a stylesheet class, so `absolute` has to
      // be set here too, not just via className, or it's silently discarded.
      style={{
        position: "absolute",
        height,
        willChange: "transform",
        maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
      }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      dpr={1}
    >
      <ParticleField />
    </Canvas>
  );
}
