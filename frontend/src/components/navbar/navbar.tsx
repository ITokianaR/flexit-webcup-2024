import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f636e756d722f65636f696e6465785f626164676540322e322f6173736574732f7376672f6461726b2f412e737667.svg"
const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <header className="header z-10">
    <img src={logo} alt="logo"/>
      <NavLink to="/">
        <h1>Zombie-School</h1>
      </NavLink>
      <nav className="flex gap-11 items-center">
        <div className="flex gap-8 ">
          <NavLink to="/">
            <p>Accueil</p>
          </NavLink>
          <NavLink to="/about">
            <p>A propos</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </div>
        <div className="flex  gap-4">
          <button
            onClick={goToLogin}
            className=" w-32 text-white h-12 rounded-xl bg-transparent border hover:text-[#DB570D]"
          >
            Se connecter
          </button>
          <button
            onClick={goToRegister}
            className="bg-[#DB570D] rounded-xl w-48 text-white h-12 hover:bg-transparent hover:border hover:text-[#DB570D]"
          >
            Créer un compte
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
