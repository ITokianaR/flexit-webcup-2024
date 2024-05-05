/* eslint-disable jsx-a11y/img-redundant-alt */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ZombieScream from "../../../models/zombieScream";
import "../home/authHome.css";
import lev1 from "../../../assets/images/imgLevels/toxic_zombie_1_idle_animated.png";
import lev2 from "../../../assets/images/imgLevels/buckethead.png";
import lev3 from "../../../assets/images/imgLevels/sarah-1.png";
import lev4 from "../../../assets/images/imgLevels/zombie_detective.png";
import part1 from "../../../assets/images/partenaires/3fdc21d0-484e-4685-b051-b37a3d78cbd1.jpg";
import part3 from "../../../assets/images/partenaires/60ff9fa7-8123-458f-8f2f-fde5a17d4f26.jpg";
import part4 from "../../../assets/images/partenaires/8f1aedc9-9bd9-4a89-af79-1acbcf07e225.jpg";
import part5 from "../../../assets/images/partenaires/92e1368b-1a02-4abb-bb08-401a31d5955f.jpg";
import part6 from "../../../assets/images/partenaires/a96ad092-ede5-4c52-88a5-656cc3510dda.jpg";
import part7 from "../../../assets/images/partenaires/mndpt.png";
import part8 from "../../../assets/images/partenaires/eb2e45c2-f48f-465f-a518-81a1638c7456.jpg";
import part9 from "../../../assets/images/partenaires/etech.png"
import part10 from "../../../assets/images/partenaires/avana.jpg"
import { useNavigate } from "react-router-dom";
export default function HomeComp() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  const levels = [
    {
      id: 1,
      name: "Super-Zombie",
      description: "Zombie à 100%",
      img: lev1,
    },
    {
      id: 2,
      name: "Mi-Zombie",
      description: "Humain à 50% et zombie à 50%",
      img: lev2,
    },
    {
      id: 3,
      name: "Trizombifié",
      description: "Presque humain!",
      img: lev3,
    },
    {
      id: 4,
      name: " Humain",
      description: "Humain à 100%!",
      img: lev4,
    },
  ];
  const partenaires = [
    {
      id: 1,
      img: part1,
    },
    {
      id: 3,
      img: part3,
    },
    {
      id: 4,
      img: part4,
    },
    {
      id: 5,
      img: part5,
    },
    {
      id: 6,
      img: part6,
    },
    {
      id: 7,
      img: part7,
    },
    {
      id: 8,
      img: part8,
    },
    {
      id:9,
      img:part9
    },
    {
      id:10,
    img:part10
    }
  ];
const navigate=useNavigate()
const goToCourse=()=>{
  navigate('/auth/cours')
}

  return (
    <div className="flex flex-col justify-center items-center mt-6 ">
      <section className="w-3/4 h-[80vh] flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-2xl shadow-md">
        <div className="w-full md:w-1/2 flex flex-col gap-7 justify-center items-center md:order-1 md:mr-4 mb-4 md:mb-0">
          <h1 className="text-3xl text-white font-bold">
            Bienvenue à{" "}
            <span className="text-[#E3651D]">l'école les zombies</span>
          </h1>
          <p className="text-white text-center">
            La meilleure plateforme pour integrer la société humaine. Les
            zombies apprennent et peuvent redevenir humains.
          </p>
          <button 
          onClick={goToCourse}
          className="btn-start mt-8 px-4 py-3 font-bold text-white rounded-xl flex items-center">
            Commencer
            <span className="ml-2">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
        <div className="w-full md:w-1/2 md:order-2 md:ml-4">
          <Canvas camera={{ near: 0.001, far: 1000 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense>
              <ZombieScream
                animated={animated}
                setAnimated={setAnimated}
                position={[1, -4, -1]}
                scale={[4, 4, 4]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <section className="w-3/4 mt-16">
        <h1 className="text-center mb-16 text-4xl text-white font-bold">
          Evolutions
        </h1>
        <div className="flex flex-wrap gap-10 mb-16">
          {levels.map((level) => (
            <div key={level.id}>
              <div className="book">
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[50%] w-full">
                    <img
                      src={level.img}
                      alt={level.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="h-[50%] w-full">
                    <p>{level.description}</p>
                  </div>
                </div>
                <div className="cover">
                  <p>{level.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-3/4 mt-16">
        <h1 className="text-center mb-16 text-4xl text-white font-bold">
          Partenaires
        </h1>
        <div className="flex flex-wrap gap-20 justify-evenly">
          {partenaires.map((partenaire) => (
            <div key={partenaire.id} className="w-[20vw] h-[38vh] gap-8 mb-16">
                <img src={partenaire.img} alt="idk" className="object-cover w-full h-full" />            
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
