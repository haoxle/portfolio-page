import "./Logo.scss";
import logo from "../../assets/Corrected.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="logo-ctner">
        <Link to="/portfolio-page">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <Link to="/portfolio-page">
          <h1 className="logo-name">HAO LE</h1>
        </Link>
      </div>
      <div className="information">
        <NavLink className="links" to={"/portfolio-page"}>
          Home
        </NavLink>
        <NavLink className="links" to={"/portfolio-page/about"}>
          About
        </NavLink>
        <NavLink className="links" to={"/portfolio-page/projects"}>
          Projects
        </NavLink>
        <NavLink className="links" to={"/portfolio-page/skills"}>
          Skills
        </NavLink>
        <NavLink className="links" to={"/portfolio-page/experience"}>
          Experience
        </NavLink>
        <NavLink className="links" to={"/portfolio-page/contact"}>
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Logo;
