import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="information">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/skills"}>Skills</NavLink>
        <NavLink to={"/experience"}>Experience</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </>
  );
};

export default Home;
