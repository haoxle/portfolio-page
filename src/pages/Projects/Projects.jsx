import "./Projects.scss";
import css from "../../assets/logos/css.png";
import figma from "../../assets/logos/figma.png";
import github from "../../assets/logos/github.png";
import html from "../../assets/logos/html.png";
import java from "../../assets/logos/java.png";
import javascript from "../../assets/logos/javascript.png";
import react from "../../assets/logos/react.png";
import sass from "../../assets/logos/sass.png";
import jest from "../../assets/logos/jest.png";

// import springboot from "../../assets/logos/springboot.png";
import punk from "../../assets/punk.png";
import maple from "../../assets/maple.png";
import calculator from "../../assets/calculator.png";
import hangman from "../../assets/hangman.png";

const Projects = () => {
  return (
    <>
      <section>
        <div className="right">
          <div className="right-contents">
            <h1 className="right-name"> Hangman</h1>
            <p className="right-info">
              Hangman game generated on Java. This project allowed me to
              consolidate my learning on object orientated programming and
              utilised new concepts learnt in Java.
            </p>
            <div className="right-skills">
              <img className="skills-image" src={java} alt="java" />
              <img className="skills-image" src={jest} alt="jest" />
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
          <div className="right-project">
            <a href="https://github.com/haoxle/Hangman" target="_blank">
              <img
                className="right-project__image"
                src={hangman}
                alt="hangman"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="left">
          <div className="left-project">
            <a href="https://haoxle.github.io/PunkApi/" target="_blank">
              <img className="left-project__image" src={punk} alt="PunkApi" />
            </a>
          </div>
          <div className="left-contents">
            <h1 className="left-name">Punk Api</h1>
            <p className="left-info">
              I've used React to build a beer page that will display an archive
              of stock from the brand using an API call. Users have the option
              to filter on specific type of beers and also ascertain information
              on each item.
            </p>
            <div className="left-skills">
              <img className="skills-image" src={figma} alt="figma" />
              <img className="skills-image" src={github} alt="github" />
              <img className="skills-image" src={javascript} alt="javascript" />
              <img className="skills-image" src={react} alt="react" />
              <img className="skills-image" src={sass} alt="sass" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="right">
          <div className="right-contents">
            <h1 className="right-name"> Maple Maze</h1>
            <p className="right-info">
              This maze game was made with Javascript, html and css/sass. using
              canvas as the main logic around character movement, I create a fun
              but annoying game based on an old MMORPG I used to play as a
              teenage.
            </p>
            <div className="right-skills">
              <img className="skills-image" src={html} alt="html" />
              <img className="skills-image" src={css} alt="css" />
              <img className="skills-image" src={javascript} alt="javascript" />
              <img className="skills-image" src={sass} alt="sass" />
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
          <div className="right-project">
            <a href="https://haoxle.github.io/MapleMaze/" target="_blank">
              <img
                className="right-project__image"
                src={maple}
                alt="maplemaze"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="left">
          <div className="left-project">
            <a
              href="https://haoxle.github.io/CalculatorProject/"
              target="_blank"
            >
              <img
                className="left-project__image"
                src={calculator}
                alt="calculator"
              />
            </a>
          </div>
          <div className="left-contents">
            <h1 className="left-name">Calculator</h1>
            <p className="left-info">
              A JavaScript Calculator that can perform all basic calculations.
            </p>
            <div className="left-skills">
              <img className="skills-image" src={html} alt="html" />
              <img className="skills-image" src={css} alt="css" />
              <img className="skills-image" src={javascript} alt="javascript" />
              <img className="skills-image" src={sass} alt="sass" />
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
