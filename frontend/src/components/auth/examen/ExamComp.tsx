import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import audioFile from "../../../mp3/exam.mp3"
const elementData = [
  {
    text: "Marre de manger des cerveaux humains ?",
    image:
      "https://ih1.redbubble.net/image.1499863727.0540/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    text: "Tu veux essayer autre chose ?",
    image:
      "https://img.freepik.com/vecteurs-libre/silhouette-zombie-halloween-dessine-main_23-2149621407.jpg?size=626&ext=jpg",
  },
  {
    text: "Trouve une alternative !",
    image:
      "https://img.freepik.com/vecteurs-libre/concept-maison-festival-halloween_52683-46389.jpg?t=st=1714856170~exp=1714859770~hmac=681bce5684ec88ada4182409432a62639e1e66dafb59bd3fa5e63a6636926a4f&w=740",
  },
];

export default function ExamComp() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => {
      if (current === elementData.length - 1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    },
  };

  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <audio ref={audioRef} src={audioFile} loop />
      <div className="w-1/5">
        <Slider {...settings} className="slider">
          {elementData.map((element, index) => (
            <div
              key={index}
              className="h-96 flex items-center justify-center bg-gray-900 rounded-lg p-4"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {element.text}
                </h2>
                <img src={element.image} alt={`Element ${index}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {showButton && (
        <div className="flex justify-center">
          <Link to="/auth/examDetails">
            <button className="mt-10 bg-red-500 text-white px-4 py-2 rounded">
              S'aventurer
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
