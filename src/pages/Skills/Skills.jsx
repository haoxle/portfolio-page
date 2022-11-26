import "./Skills.scss";
import { images } from "../../data/images.js";

const Skills = () => {
  const photoDisplay = images.map((photo, i) => {
    return (
      <div className="skills-section">
        <img
          className="skills-section__image"
          key={i}
          src={photo.src}
          alt={photo.name}
        />
        <h1 className="skills-section__name">{photo.name}</h1>
      </div>
    );
  });
  return <div className="skills-container">{photoDisplay}</div>;
};

export default Skills;
