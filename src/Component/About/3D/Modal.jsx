import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Html,
  Icosahedron,
  OrbitControls,
} from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { IcosahedronGeometry, PointLight } from "three";
import Mod from "./Mod";
const Modal = () => {
 
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -25], fov: 35 }}>
        <ambientLight position={[10, 10, 10]} />
       
        <Html position={[0, 2, 0]} transform occlude>
          <div className="modal" ></div>
        </Html>
        <Mod></Mod>
        <OrbitControls 
            // zoom false
       
            enableZoom={false} 
            maxPolarAngle={1}
            minPolarAngle={1}
            maxAzimuthAngle={Math.PI / 2}
            minAzimuthAngle={-0}

        />
      </Canvas>
    </>
  );
};

export default Modal;
