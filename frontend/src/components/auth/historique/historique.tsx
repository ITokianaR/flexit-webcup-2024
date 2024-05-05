import "../historique/historique.css";
import course from "../../../provider/CourseProvider";
import { useState, useEffect } from "react";

// Assuming Course type here, adjust it based on your actual data structure
interface Course {
  id: number;
  title: string;
  description: string;
}

const Historique = () => {
  const [finish, setFinish] = useState<Course[]>([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const courses = await course.getCourses();
      setFinish(courses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mt-16 mb-8">Historique</h1>
      <div className="flex flex-wrap justify-evenly gap-10 w-[80vw] mb-8">
        {finish?.map((course) => (
          <div key={course.id}>
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <p>{course.title}</p>
                </div>
                <div className="card-back">
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Historique;
