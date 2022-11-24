import "./Logo.scss";
import logo from "../../assets/Corrected.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="logo-ctner">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h1 className="logo-name">HAO LE</h1>
        </Link>
      </div>
      <div className="information">
        <NavLink className="links" to={"/"}>
          Home
        </NavLink>
        <NavLink className="links" to={"/about"}>
          About
        </NavLink>
        <NavLink className="links" to={"/projects"}>
          Projects
        </NavLink>
        <NavLink className="links" to={"/skills"}>
          Skills
        </NavLink>
        <NavLink className="links" to={"/experience"}>
          Experience
        </NavLink>
        <NavLink className="links" to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Logo;
