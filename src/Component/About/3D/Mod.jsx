import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import * as THREE from "three";
import Load from "../../Loading/Load";
const Mod = () => {
  const gltf = useGLTF("/modal.glb");
  // play all animations

  const animations = gltf.animations;
  const mixer = new THREE.AnimationMixer(gltf.scene);

  useFrame(({ clock }) => {
    for (let i = 0; i < animations.length; i++) {
      mixer.clipAction(animations[i]).play();
      mixer.clipAction(animations[i]).timeScale = 1.5;
    }
    mixer.update(clock.getDelta());
    // increase the spead of the animation
  });

  return (
    <>
      <Suspense fallback={<></>}>
        <primitive
          object={gltf.scene}
          scale={[2.5, 2.5, 2.5]}
          // run the animation
          
        />
      </Suspense>
    </>
  );
};

export default Mod;
