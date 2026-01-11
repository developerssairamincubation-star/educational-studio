import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

export default function ParticleTunnel() {
    const count = 3000; // Number of particles
    const mesh = useRef(null);
    const { viewport, mouse } = useThree();

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random positions using maath. 
    // We want a tunnel shape, so we'll use a cylinder-like distribution or noise.
    // For a "tunnel", we can use a long cylinder along Z.
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const radius = 10;
        const length = 80;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Random angle
            const theta = THREE.MathUtils.randFloatSpread(360);
            // Random radius with some variation (thick tunnel walls)
            const r = radius + Math.random() * 5;

            // Random Z position along the length
            const z = THREE.MathUtils.randFloatSpread(length);

            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);

            temp[i3] = x;
            temp[i3 + 1] = y;
            temp[i3 + 2] = z; // spread along Z
        }
        return temp;
    }, [count]);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        // Slight rotation of the whole tunnel for dynamism
        mesh.current.rotation.z += delta * 0.1;

        // Mouse interaction for warping or subtle movement
        // blending mouse x/y into rotation or position
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.y * 0.1, 0.1);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, mouse.x * 0.1, 0.1);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = particles[i3];
            const y = particles[i3 + 1];
            const z = particles[i3 + 2];

            // "Fly through" effect: move particles towards camera (positive Z)
            // Check if particle moves past a certain point, then recycle to back

            // Update Z position in our local calculation (not modifying buffer directly for performance, 
            // but conceptually we want them to flow. 
            // Actually, for better perf with simpler logic, let's just move the camera or rotate.
            // But user wants "scroll" to drive it.

            // For now, let's just place them. The SCROLL logic in Experience.jsx will move the Camera through nature.

            dummy.position.set(x, y, z);

            // Subtle scale pulses
            const scale = 0.5 + Math.sin(state.clock.elapsedTime + x) * 0.2;
            dummy.scale.set(scale, scale, scale);

            dummy.rotation.x += delta;
            dummy.rotation.z += delta;

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <octahedronGeometry args={[0.1, 0]} />
            <meshBasicMaterial color="#13ecc8" wireframe={false} transparent opacity={0.6} />
        </instancedMesh>
    );
}
