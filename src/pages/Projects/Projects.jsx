import "./Projects.scss";
import css from "../../assets/logos/css.png";
import figma from "../../assets/logos/figma.png";
import github from "../../assets/logos/github.png";
import html from "../../assets/logos/html.png";
import java from "../../assets/logos/java.png";
import javascript from "../../assets/logos/javascript.png";
import react from "../../assets/logos/react.png";
import sass from "../../assets/logos/sass.png";

import springboot from "../../assets/logos/springboot.png";
import punk from "../../assets/punk.png";

const Projects = () => {
  return (
    <>
      <section>
        <div className="project">
          <div className="image-container">
            <a href="https://haoxle.github.io/PunkApi/" target="_blank">
              <img
                className="image-container__image"
                src={punk}
                alt="PunkApi"
              />
            </a>
          </div>
          <div className="project-contents">
            <h1 className="project-name">Punk Api</h1>
            <p className="project-information">
              I've used React to build a beer page that will display an archive
              of stock from the brand using an API call. Users have the option
              to filter on specific type of beers and also ascertain information
              on each item.
            </p>
            <div className="skills-container">
              <img className="skills-image" src={figma} alt="figma" />
              <img className="skills-image" src={github} alt="github" />
              <img className="skills-image" src={javascript} alt="javascript" />
              <img className="skills-image" src={react} alt="react" />
              <img className="skills-image" src={sass} alt="springboot" />
            </div>
          </div>
        </div>
      </section>

      <img className="skills-image" src={css} alt="css" />
      <img className="skills-image" src={figma} alt="figma" />
      <img className="skills-image" src={github} alt="github" />
      <img className="skills-image" src={html} alt="html" />
      <img className="skills-image" src={java} alt="java" />
      <img className="skills-image" src={javascript} alt="javascript" />
      <img className="skills-image" src={react} alt="react" />
      <img className="skills-image" src={springboot} alt="springboot" />
    </>
  );
};

export default Projects;
