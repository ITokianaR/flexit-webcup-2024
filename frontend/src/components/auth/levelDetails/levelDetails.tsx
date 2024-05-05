/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import course from "../../../provider/CourseProvider";

export default function LevelDetails() {
  const [courses, setCourses] = useState([]);
  const [c, setC] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const coursesData = await course.getCourses();
      setCourses(coursesData);
      console.log(coursesData);
    };
    fetchCourses();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-4 ">
      <h1 className="text-3xl text-white text-center mb-10">
        Liste des cours de niveaux 1
      </h1>
      {courses.map((course) => (
        <div className="w-full md:w-2/3 flex flex-row items-center justify-between bg-gray-900 p-6 rounded-lg shadow-md mb-4">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl text-white mr-4"></h1>
          </div>
          <div className="flex flex-row items-center">
            <Link
              to={`/auth/cours/`}
              className="mt-4 px-4 py-2 bg-[#E3651D] hover:bg-[#BED754] text-white rounded flex items-center"
            >
              Rejoindre
              <span className="ml-2">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
