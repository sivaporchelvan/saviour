"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getSymbolById, symbolCatalog, type SymbolDefinition } from "@/src/lib/siva-symbols";

type GraphicsQuality = "low" | "medium" | "high";

function SymbolMesh({
  symbol,
  selected,
  onSelect,
  justSiva,
  reducedMotion,
}: {
  symbol: SymbolDefinition;
  selected: boolean;
  onSelect: (id: string) => void;
  justSiva: boolean;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={symbol.position}>
      {symbol.id === "lotus" && (
        <>
          <mesh onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
            <torusGeometry args={[0.45, 0.08, 18, 100]} />
            <meshStandardMaterial color={symbol.color} metalness={0.35} roughness={0.4} />
          </mesh>
          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index / 12) * Math.PI * 2;
            return (
              <mesh
                key={`${symbol.id}-petal-${index}`}
                position={[Math.cos(angle) * 0.4, 0.1, Math.sin(angle) * 0.4]}
                rotation={[0, angle, Math.PI / 2]}
                onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}
              >
                <sphereGeometry args={[0.14, 18, 18]} />
                <meshStandardMaterial color={symbol.accent} metalness={0.18} roughness={0.38} />
              </mesh>
            );
          })}
        </>
      )}

      {symbol.id === "trident" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          {[-1, 0, 1].map((offset) => (
            <mesh key={`${symbol.id}-${offset}`} position={[offset * 0.28, 0.15, 0]} rotation={[0, 0, offset * 0.12]}>
              <cylinderGeometry args={[0.06, 0.09, 1.2, 18]} />
              <meshStandardMaterial color={symbol.color} metalness={0.55} roughness={0.28} />
            </mesh>
          ))}
          <mesh position={[0, -0.62, 0]}>
            <cylinderGeometry args={[0.2, 0.26, 0.42, 18]} />
            <meshStandardMaterial color={symbol.accent} metalness={0.4} roughness={0.32} />
          </mesh>
        </group>
      )}

      {symbol.id === "third-eye" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.38, 0.05, 12, 80]} />
            <meshStandardMaterial color={symbol.color} metalness={0.6} roughness={0.2} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.17, 24, 24]} />
            <meshStandardMaterial color={symbol.accent} emissive={symbol.accent} emissiveIntensity={0.75} />
          </mesh>
        </group>
      )}

      {symbol.id === "lingam" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          <mesh position={[0, 0.16, 0]}>
            <cylinderGeometry args={[0.46, 0.55, 0.9, 32]} />
            <meshStandardMaterial color={symbol.color} metalness={0.52} roughness={0.23} />
          </mesh>
          <mesh position={[0, 0.78, 0]}>
            <torusGeometry args={[0.35, 0.06, 16, 64]} />
            <meshStandardMaterial color={symbol.accent} metalness={0.5} roughness={0.35} />
          </mesh>
        </group>
      )}

      {symbol.id === "moon" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          <mesh>
            <sphereGeometry args={[0.34, 28, 28]} />
            <meshStandardMaterial color={symbol.color} metalness={0.3} roughness={0.4} />
          </mesh>
          <mesh position={[0.16, 0.14, 0]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshStandardMaterial color="#f5eed9" emissive="#f0e7ba" emissiveIntensity={0.12} />
          </mesh>
        </group>
      )}

      {symbol.id === "pati" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          <mesh>
            <sphereGeometry args={[0.54, 32, 32]} />
            <meshStandardMaterial color={symbol.color} emissive={symbol.accent} emissiveIntensity={0.28} metalness={0.55} roughness={0.15} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.7, 0.04, 18, 72]} />
            <meshStandardMaterial color={symbol.accent} metalness={0.7} roughness={0.2} />
          </mesh>
        </group>
      )}

      {symbol.id === "pasu" && (
        <group onClick={(event) => { event.stopPropagation(); onSelect(symbol.id); }}>
          <mesh>
            <icosahedronGeometry args={[0.26, 1]} />
            <meshStandardMaterial color={symbol.color} metalness={0.25} roughness={0.48} />
          </mesh>
          <mesh position={[0, -0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.2, 0.04, 12, 50]} />
            <meshStandardMaterial color={symbol.accent} />
          </mesh>
        </group>
      )}

      {!justSiva && (
        <Html position={[0, 1.15, 0]} center distanceFactor={8}>
          <button
            type="button"
            className={`symbol-marker ${selected ? "selected" : ""}`}
            aria-label={`Select ${symbol.name.en}`}
            onClick={(event) => {
              event.preventDefault();
              onSelect(symbol.id);
            }}
          >
            {symbol.name.en}
          </button>
        </Html>
      )}
    </group>
  );
}

function SceneContent({
  selectedId,
  onSelect,
  justSiva,
  reducedMotion,
  graphics,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
  justSiva: boolean;
  reducedMotion: boolean;
  graphics: GraphicsQuality;
}) {
  const clusterRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (clusterRef.current && !reducedMotion) {
      clusterRef.current.rotation.y += delta * 0.28;
      clusterRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  const dpr = graphics === "low" ? [1, 1.2] : graphics === "medium" ? [1, 1.7] : [1, 2];

  return (
    <>
      <color attach="background" args={["#080812"]} />
      <fog attach="fog" args={["#080812", 5, 14]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={2.2} color="#f5d2a1" />
      <pointLight position={[-3, 1, 2]} intensity={1.4} color="#8b9dff" />
      <Stars radius={18} depth={18} count={graphics === "low" ? 800 : graphics === "medium" ? 1400 : 2200} fade speed={1.2} />

      <group ref={clusterRef}>
        <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.8, 64]} />
          <meshStandardMaterial color="#161b2d" transparent opacity={0.46} />
        </mesh>

        {symbolCatalog.map((symbol) => (
          <SymbolMesh
            key={symbol.id}
            symbol={symbol}
            selected={symbol.id === selectedId}
            onSelect={onSelect}
            justSiva={justSiva}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={3.5}
        maxDistance={9}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.25}
      />
      <group position={[0, -0.55, 0]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.25, 0.8, 28]} />
          <meshStandardMaterial color="#d7c3ff" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </>
  );
}

export default function HomePage() {
  const [selectedId, setSelectedId] = useState("pati");
  const [justSiva, setJustSiva] = useState(false);
  const [graphics, setGraphics] = useState<GraphicsQuality>("medium");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selectedSymbol = useMemo(() => getSymbolById(selectedId), [selectedId]);

  return (
    <main className="app-shell">
      <header className="top-bar">
        <div>
          <p className="eyebrow">Sacred geometry explorer</p>
          <h1>SIVA</h1>
        </div>
        <div className="mode-toggle" aria-label="Select scene mode">
          <button
            type="button"
            className={!justSiva ? "active" : ""}
            onClick={() => setJustSiva(false)}
            aria-pressed={!justSiva}
          >
            Explorer
          </button>
          <button
            type="button"
            className={justSiva ? "active" : ""}
            onClick={() => setJustSiva(true)}
            aria-pressed={justSiva}
          >
            Just Siva
          </button>
        </div>
      </header>

      <div className="scene-panel">
        <Canvas
          camera={{ position: [0, 1.3, 6], fov: 42 }}
          dpr={graphics === "low" ? [1, 1.2] : graphics === "medium" ? [1, 1.7] : [1, 2]}
          shadows={graphics !== "low"}
          gl={{ antialias: graphics !== "low" }}
        >
          <SceneContent
            selectedId={selectedId}
            onSelect={setSelectedId}
            justSiva={justSiva}
            reducedMotion={reducedMotion}
            graphics={graphics}
          />
        </Canvas>
      </div>

      {!justSiva && (
        <aside className="detail-panel" aria-live="polite">
          <div className="heading-row">
            <div>
              <p className="eyebrow">Selected symbol</p>
              <h2>{selectedSymbol.name.en}</h2>
            </div>
            <span className="tag">{selectedSymbol.name.ta}</span>
          </div>

          <p className="subtitle">{selectedSymbol.subtitle.en}</p>
          <p className="subtitle ta">{selectedSymbol.subtitle.ta}</p>

          <div className="explanation-block">
            <h3>English</h3>
            <p>{selectedSymbol.description.en}</p>
          </div>

          <div className="explanation-block">
            <h3>தமிழ்</h3>
            <p>{selectedSymbol.description.ta}</p>
          </div>

          <p className="art-note">{selectedSymbol.artworkNote}</p>
        </aside>
      )}

      <div className="toolbar" aria-label="Viewer controls">
        <div className="control-group">
          <span>Graphics</span>
          {(["low", "medium", "high"] as GraphicsQuality[]).map((option) => (
            <button
              key={option}
              type="button"
              className={graphics === option ? "active" : ""}
              onClick={() => setGraphics(option)}
              aria-pressed={graphics === option}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="control-group">
          <span>Motion</span>
          <button
            type="button"
            className={reducedMotion ? "active" : ""}
            onClick={() => setReducedMotion((current) => !current)}
            aria-pressed={reducedMotion}
          >
            {reducedMotion ? "Reduced" : "Full"}
          </button>
        </div>
      </div>
    </main>
  );
}
