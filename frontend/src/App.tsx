import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/auth/HomePage";
import LevelDetailsPage from "./pages/LevelDetails";
import CoursePage from "./pages/auth/CourseDetailsPage";
import ProfilePage from "./pages/auth/ProfilePage";
import ExamPage from "./pages/auth/ExamPage";
import ExamDetailsPage from "./pages/auth/ExamenDetailsPage";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import About from "./pages/about";
import Contact from "./pages/contact/contact";
import HistoriquePage from "./pages/auth/HistoriquePage";
import Landing from "./pages/landing";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {!isLoggedIn && <Navbar />} 
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/auth/home" /> : <Navigate to="/landing" />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {isLoggedIn && (
          <>
            <Route path="/auth/home" element={<HomePage />} />
            <Route path="/auth/cours" element={<LevelDetailsPage />} />
            <Route path="/auth/cours/:id" element={<CoursePage />} />
            <Route path="/auth/profile" element={<ProfilePage />} />
            <Route path="/auth/examen" element={<ExamPage />} />
            <Route path="/auth/examDetails" element={<ExamDetailsPage />} />
            <Route path="/auth/historique" element={<HistoriquePage/>}/>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
