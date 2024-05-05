import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { Canvas } from "@react-three/fiber";
import Pumpkin from "../models/pumpkin";
import Loader from "../components/loader";
import { Vector3 } from "three";
import { animated } from "@react-spring/three";

const Landing = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  });

  const adjustSizeForScreen = (): [Vector3, Vector3] => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = new Vector3(9, 9, 9);
      screenPosition = new Vector3(-7, -10, 1);
    } else {
      screenScale = new Vector3(9, 9, 9);
      screenPosition = new Vector3(0, -1.5, -4);
    }
    return [screenScale, screenPosition];
  };
  const [scale, position] = adjustSizeForScreen();
  return (
    <section className=" w-full h-screen  flex relative bg-transparent ">
     
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing":"cursor-grab"}`}
        camera={{ near: 0.01, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <spotLight />
            <Pumpkin
              animated={animated}
              setAnimated={setAnimated}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={position}
              rotation={[0.1, 4.7077, 0]}
              scale={scale}
            />
          </Suspense>
        </Canvas>
    </section>
  );
};

export default Landing;
