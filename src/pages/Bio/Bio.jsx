import "./Bio.scss";
import profile from "../../assets/profile.jpg";
import { aboutMe, hobbies } from "../../data/hobbies";

const Bio = () => {
  const hobby = hobbies.map((activity, i) => {
    return (
      <div className="container" key={i + activity.name}>
        <img className="container__image" src={activity.src} alt="candle" />
        <div className="container__text--info">
          <div className="container__text">
            <div className="container__text--info">{activity.info}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="profile">
        <img className="profile_picture" src={profile} alt="me" />
        <p className="profile_description">{aboutMe[0]}</p>
      </div>
      <div className="extracuricular">
        <h1 className="extracuricular__title">Hobbies</h1>
      </div>
      <div className="hobbies">{hobby}</div>
    </>
  );
};

export default Bio;
