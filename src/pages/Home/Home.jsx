import "./Home.scss";
import logo from "../../assets/Corrected.png";

const Home = () => {
  return (
    <>
      <div className="logo-ctner">
        <img className="logo-img" src={logo} alt="logo" />
        <h1 className="logo-name">HAO LE</h1>
      </div>
      <div className="information">
        <a href="*">Bio</a>
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
