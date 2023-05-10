import React, { useEffect, useRef } from "react";
import { Model } from "../animated_drone/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Resize, Sky, Stars } from "@react-three/drei";
import { gsap } from "gsap";

const AnimatedSpotLight = () => {
  const spotLightRef = useRef();
  const ambientLightRef = useRef();

  useEffect(() => {
    gsap.from(spotLightRef.current, {
      intensity: 0,
      duration: 1.5,
    });
  }, []);
  return (
    <>
    <pointLight color={'white'} position={[0,10,10]}/>
      <spotLight
        ref={spotLightRef}
        position={[2, 2, 3]}
        color={"white"}
        intensity={2}
      />
      <ambientLight ref={ambientLightRef} color={"white"} intensity={20} />
    </>
  );
};

function CanvasComponent() {
  return (
    <div className="h-screen">
      <Canvas flat linear>
        <OrbitControls enableRotate={false} enableZoom={false} />
        <AnimatedSpotLight />
        <Model />

        {/*        <mesh rotation={[-Math.PI/4,0,0]}>
            <planeGeometry args={[100,10,1,1]}  />
            <materila  color={'red'} />
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default CanvasComponent;
