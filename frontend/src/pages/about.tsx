import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/loader";
import Zombie from "../models/zombie";
import { motion } from "framer-motion";
const About = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ ease: "backInOut", duration: 2 }}
        className=" flex-1 min-w-2/3 flex flex-col ml-32"
      >
        <p className="text-white text-clip text-4xl">
          Les zombies avaient marre de manger les cerveaux des humains et ont
          décidé{" "}
          <motion.span 
          className="text-[#DB570D] font-bold">d'intégrer la société humaine.</motion.span>
        </p>
        <p className="text-white text-clip text-4xl mt-4">
          Ils vont ainsi suivre des cours ici pour{" "}
          <span  className="text-[#DB570D] font-bold">redevenir humains</span>
        </p>
      </motion.div>
      <div className=" w-1/3 relative flex lg:h-auto md:h-[550px] h-[90vh]">
        <Canvas camera={{ near: 0.01, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <Zombie
              animated={animated}
              setAnimated={setAnimated}
              scale={[2, 2, 2]}
              position={[0, -2, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default About;
