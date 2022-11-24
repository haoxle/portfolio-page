import "./Home.scss";
import homecandle from "../../assets/homecandle.jpg";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <img className="home-candle" src={homecandle} alt="candle" />
      </div>{" "}
    </>
  );
};

export default Home;
