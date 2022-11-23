import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="information">
        <NavLink to={"/about"}>Bio</NavLink>
        <a href="*">Projects</a>
        <a href="*">Hobbies</a>
        <a href="*">Skils</a>
        <a href="*">Experience</a>
        <a href="*">Contact</a>
      </div>
    </>
  );
};

export default Home;
