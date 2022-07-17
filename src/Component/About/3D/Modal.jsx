import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Html,
  Icosahedron,
  OrbitControls,
} from "@react-three/drei";
import { IcosahedronGeometry, PointLight } from "three";
const Modal = () => {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -25], fov: 35 }}>
        <ambientLight position={[10, 10, 10]} />
        <mesh position={[0,0,0]}>
       
          <boxGeometry attach="geometry" args={[2, 2, 2]} />

          <meshStandardMaterial attach="material" color="cyan" />
        </mesh>
        <Html position={[0, 2, 0]} transform occlude>
          <div className="modal" ></div>
        </Html>
        <OrbitControls 
            // zoom false
            autoRotate={true}
            enableZoom={false}  
        />
      </Canvas>
    </>
  );
};

export default Modal;
