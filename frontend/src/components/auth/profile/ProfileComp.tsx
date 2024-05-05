import { useEffect, useState } from "react";
import ChronologyComp from "./ChronoComp";
import { FaUser } from "react-icons/fa";
import auth from "../../../provider/AuthProvider";

export default function ProfileComp() {
  const [person, setPerson] = useState({
    username: "",
    profile: null,
    type: "",
    score: 0,
    email: "",
  });

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const id = storedUser.userLogged ? storedUser.userLogged.id : null;

  useEffect(() => {
    const fetchCourses = async () => {
      const userData = await auth.getUserById(id);
      setPerson(userData.user);
      console.log(userData.user);
    };
    fetchCourses();
  }, [id]);
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="w-3/4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-2/3 flex items-center bg-gray-900 p-6 rounded-lg shadow-md h-64">
          <div className="w-60 h-60 rounded-full overflow-hidden mr-4">
            <FaUser className="w-full h-full object-cover text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-lg text-white">{person.username}</h2>
            <p className="text-gray-400">{person.email}</p>
          </div>
        </div>

        <div className="md:w-1/3 bg-gray-900 p-6 rounded-lg shadow-md h-64 flex items-center justify-between">
          <img
            src="https://via.placeholder.com/150"
            alt="Autres informations"
            className="object-cover h-44 rounded-full"
          />
          <div className="ml-4 text-right">
            <div className="mt-4">
              <p className="text-white mb-2">
                <span className="text-gray-400">Points :</span>{" "}
                <span className="font-bold">100</span>
              </p>
              <p className="text-white">
                <span className="text-gray-400">Niveau :</span>{" "}
                <span className="font-bold">5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-center mt-4">
        <ChronologyComp/>
      </div>
    </div>
  );
}
