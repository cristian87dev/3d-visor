import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Experience() {
  const [ballColor, setBallColor] = useState('orange');

  const togleBallColor = () => {
    console.log('togleBallColor', ballColor);
    setBallColor(ballColor === 'orange' ? 'blue' : 'orange')
  };

  return <>
    <OrbitControls makeDefault />

    <directionalLight castShadow position={[1, 2, 1]} intensity={4.5} />
    <ambientLight intensity={1.0} />

    <mesh castShadow position-x={-2} onClick={() => togleBallColor()}>
      <sphereGeometry />
      <meshStandardMaterial color={ballColor} />
    </mesh>

    <mesh castShadow position-x={2} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>

    <mesh castShadow position-x={2} position-y={3.5} scale={1}>
      <boxGeometry />
      <meshStandardMaterial color="green" />
    </mesh>

    <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={120}>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
    </mesh>

  </>
}