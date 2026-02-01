import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Scroll, Float } from '@react-three/drei';
import ParticleTunnel from './ParticleTunnel';
import * as THREE from 'three';

// Content Components for Overlay (HTML in Scroll)
import Hero from './Hero';
import Why from './Why';
import About from './About';
import Pathways from './Pathways';
import ISTEStandards from './ISTEStandards';
import Footer from './Footer';

function FloatingObjects() {
    const group = useRef();
    useFrame((state) => {
        // Floating animation can be handled here or by <Float> wrapper
    });

    return (
        <group ref={group}>
            {/* Floating Abstract Shapes at different depths */}
            <Float position={[3, 0, -5]} speed={2} rotationIntensity={1}>
                <mesh>
                    <torusKnotGeometry args={[1, 0.4, 100, 16]} />
                    <meshStandardMaterial color="#4988C4" wireframe />
                </mesh>
            </Float>

            <Float position={[-3, -2, -15]} speed={1.5} rotationIntensity={2}>
                <mesh>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#3a6fa3" wireframe />
                </mesh>
            </Float>

            <Float position={[0, 4, -25]} speed={3} rotationIntensity={0.5}>
                <mesh>
                    <octahedronGeometry args={[3]} />
                    <meshStandardMaterial color="#6ba3d1" transparent opacity={0.4} />
                </mesh>
            </Float>
        </group>
    )
}

export default function Experience({ setPage }) {
    const scroll = useScroll();
    const { camera } = useThree();

    useFrame((state, delta) => {
        // Scroll progress is between 0 and 1
        const r1 = scroll.range(0, 1 / 4); // Hero to About
        const r2 = scroll.range(1 / 4, 2 / 4); // About to Pathways
        const r3 = scroll.range(3 / 4, 1 / 4); // End

        // Move camera through the tunnel based on scroll
        // Start at z=10, move deep into negative Z
        const targetZ = 10 - (scroll.offset * 60);

        // Smooth camera movement
        camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4, delta);

        // Add some rotation to camera based on scroll for "Looking around" feel
        const targetRotX = scroll.offset * Math.PI * 0.2; // Slight look down/up
        const targetRotZ = scroll.offset * Math.PI * 0.5; // Barrel roll effect? maybe too nauseating. Let's do slight tilt.

        // Let's do a spiral path approach?
        // For now, linear Z movement is safest bet for "tunnel" feel.

        // Optional: Camera shake / noise
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#4988C4" />

            {/* The Tunnel Environment */}
            <group>
                <ParticleTunnel />
            </group>

            {/* HTML Content Overlay Synced with Scroll */}
            <Scroll html style={{ width: '100vw' }}>
                <div style={{ position: 'relative', width: '100vw' }}>
                    {/* Section 1: Hero */}
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Hero setPage={setPage} />
                    </div>

                    {/* Section 2: Why */}
                    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
                        <Why />
                    </div>

                    {/* Section 3: About / Professional Philosophy */}
                    <div id="philosophy-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                        <About />
                    </div>

                    {/* Section 4: Pathways */}
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                        <Pathways />
                    </div>

                    {/* Section 5: Standards */}
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ISTEStandards />
                    </div>

                    <Footer setPage={setPage} />
                </div>
            </Scroll>
        </>
    );
}
