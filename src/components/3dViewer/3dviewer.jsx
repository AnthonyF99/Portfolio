import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


function ModelViewer({ modelPath }) {
  const obj = useLoader(OBJLoader, modelPath);
  return <primitive object={obj} scale={0.5} />;
}

export default function ThreeDViewer() {
  return (
    <Canvas  style={{ width: '100%', height: '500px' }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <Suspense fallback={null}>
        <ModelViewer modelPath="/assets/3d/isometric.obj" />
      </Suspense>
    </Canvas>
  );
}
