/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import auth from "../../provider/AuthProvider";

export default function NavAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Bye");
    window.location.reload();
    navigate("/landing");
  };
  const [person, setPerson] = useState({
    username: "",
    profile: null,
    type: "",
    score: 0,
  });

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const id = storedUser.userLogged ? storedUser.userLogged.id : null;

  useEffect(() => {
    if (id !== null) {
      const fetchCourses = async () => {
        try {
          const userData = await auth.getUserById(id);
          if (userData && userData.user) {
            setPerson(userData.user);
            console.log(userData.user);
          } else {
            console.log("User data is undefined");
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };
      fetchCourses();
    }
  }, [id]);

  return (
    <div className="flex justify-center mt-5 font-semibold">
      <div className="w-3/4">
        <nav className="bg-gray-900 rounded-full shadow-md p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#E3651D]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xl font-bold text-white">Zombie-School</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end space-x-2">
            <Link
              to="/auth/home"
              className="px-2 text-white hover:text-blue-500"
            >
              Accueil
            </Link>
            <Link
              to="/auth/cours"
              className="px-2 text-white hover:text-blue-500"
            >
              Cours
            </Link>
            <Link
              to="/auth/examen"
              className="px-2 text-white hover:text-blue-500"
            >
              Examen
            </Link>
            <Link
              to="/auth/historique"
              className="px-2 text-white hover:text-blue-500"
            >
              Historique
            </Link>
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-800 hover:text-blue-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://source.unsplash.com/random/100x100"
                alt="User"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="text-sm font-bold text-gray-700 flex flex-col space-y-1">
                  <span>Points: {person.score}</span>
                  <span>Type: {person.type}</span>
                </div>
                <hr className="my-2 border-gray-300" />
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link
                    to="/auth/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    Se deconnecter
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
