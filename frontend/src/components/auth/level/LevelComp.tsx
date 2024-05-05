import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LevelComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Link to ="/auth/levelDetails" className="w-1/5">
        <Slider {...settings} className="slider">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-full h-80 flex items-center justify-center bg-gray-900 rounded-lg p-4"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Level {level}
                </h2>
                <p className="text-white">Description of level {level}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Link>
    </div>
  );
}
