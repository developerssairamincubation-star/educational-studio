import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed }) {
    const mesh = useRef();

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * speed;
            mesh.current.rotation.y += delta * speed * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#13ecc8" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0080" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Abstract Background Shapes */}
            <FloatingShape position={[-4, 2, 0]} color="#13ecc8" speed={0.2} />
            <FloatingShape position={[5, -2, -2]} color="#19332f" speed={0.15} />
            <FloatingShape position={[0, 4, -5]} color="#234842" speed={0.1} />

            <Environment preset="city" />

            <fog attach="fog" args={['#10221f', 5, 30]} />
        </>
    );
}
