/* eslint-disable jsx-a11y/img-redundant-alt */
import image1 from "../../../assets/images/imgLevels/buckethead.png";
import image2 from "../../../assets/images/imgLevels/sarah-1.png";
import image3 from "../../../assets/images/imgLevels/toxic_zombie_1_idle_animated.png";
import image4 from "../../../assets/images/imgLevels/zombie_detective.png";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function ChronologyComp() {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-14">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={image3}
            alt="Image 1"
            className="object-cover h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-white font-bold">Super Zombie</h2>
          <p className="text-gray-400">Zombie a 100 %</p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={image1}
            alt="Image 2"
            className="object-cover h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-white font-bold">Mi - Zombie</h2>
          <p className="text-gray-400">Zombie 50 % - Humain 50 %</p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={image2}
            alt="Image 3"
            className="object-cover h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-white font-bold">Trizombifié</h2>
          <p className="text-gray-400">Presque Humain</p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={image4}
            alt="Image 4"
            className="object-cover h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-white font-bold">Humain</h2>
          <p className="text-gray-400">Humain a 100%</p>
        </div>
        
      </div>
    </div>
  );
}
