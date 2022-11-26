import "./Home.scss";
import me from "../../assets/me.jpg";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-contents">
          <h1 className="home-contents__title">Hi,</h1>
          <h1 className="home-contents__title">I am Hao,</h1>
          <h1 className="home-contents__title">a software engineer.</h1>
          <h2 className="home-contents__jobs">
            Potter, Candle Maker, Pharmacist and Mentor
          </h2>
          <p className="home-contents__slogan">
            I design, melt wax and throw clay
          </p>
        </div>
        <img className="home-pic" src={me} alt="candle" />
      </div>
    </>
  );
};

export default Home;
