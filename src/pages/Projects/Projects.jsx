import "./Projects.scss";
import css from "../../assets/logos/css.png";
import figma from "../../assets/logos/figma.png";
import github from "../../assets/logos/github.png";
import html from "../../assets/logos/html.png";
import java from "../../assets/logos/java.png";
import firebase from "../../assets/logos/firebase.png";
import javascript from "../../assets/logos/javascript.png";
import react from "../../assets/logos/react.png";
import sass from "../../assets/logos/sass.png";
import jest from "../../assets/logos/jest.png";
import springboot from "../../assets/logos/springboot.png";
import punk from "../../assets/punk.png";
import synergy from "../../assets/synergy.png";
import maple from "../../assets/maple.png";
import calculator from "../../assets/calculator.png";
import hangman from "../../assets/hangman.png";
import mySQL from "../../assets/logos/mysql.png";
import byHaowl from "../../assets/byHaowl.png";
import library from "../../assets/library.png";
import weather from "../../assets/weather.png";

const Projects = () => {
  return (
    <>
      <section>
        <div className="right">
          <div className="right-contents">
            <h1 className="right-name"> Library Manager</h1>
            <p className="right-info">
              Java project creating a library management system. CSV file is
              used and converted to JSON and updated. User can create an
              account, see books available, loan and return books. This Java
              project reconsolidated learnt knowledge during my course and I was
              able to develop a stronger understanding on using object
              orientated language.
            </p>
            <div className="right-skills">
              <img className="skills-image" src={java} alt="java" />
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
          <div className="right-project">
            <a
              href="https://github.com/haoxle/library"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="right-project__image"
                src={library}
                alt="byHaowl"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="left">
          <div className="left-project">
            <a
              href="https://haoxle.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="left-project__image"
                src={weather}
                alt="weather-app"
                rel="noreferrer"
              />
            </a>
          </div>
          <div className="left-contents">
            <h1 className="left-name">Widget App</h1>
            <p className="left-info">
              Front end project creating a weather app and a todo list. This
              allowed me to further improve on my knowledge of syncronous and
              asyncronous functions.
            </p>
            <div className="left-skills">
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
            <h1 className="right-name"> ByHaowl</h1>
            <p className="right-info">
              Full stack project using mySQL, springboot, java and react. I
              created an e-commerce website selling my candles and ceramics.
              Within this project, I got to implement my knowledge on creating
              databases and implemented useContext to create functionality to
              the shopping basket. You can check my repo by clicking on the
              image!
            </p>
            <div className="right-skills">
              <img className="skills-image" src={java} alt="java" />
              <img className="skills-image" src={github} alt="github" />
              <img className="skills-image" src={react} alt="react" />
              <img className="skills-image" src={springboot} alt="springboot" />
              <img className="skills-image" src={mySQL} alt="mysql" />
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
          <div className="right-project">
            <a
              href="https://github.com/haoxle/byhaowl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="right-project__image"
                src={byHaowl}
                alt="byHaowl"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="left">
          <div className="left-project">
            <a
              href="https://quadra-client-project.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="left-project__image"
                src={synergy}
                alt="Synergy"
                rel="noreferrer"
              />
            </a>
          </div>
          <div className="left-contents">
            <h1 className="left-name">Currency Converter</h1>
            <p className="left-info">
              Participated in a client project with a team of trainee software
              engineers. During this project we focused on agile working where I
              was a PM during a sprint. I focused on firebase, working with the
              API and designed web pages as per designs received via figma.
            </p>
            <div className="left-skills">
              <img className="skills-image" src={figma} alt="figma" />
              <img className="skills-image" src={github} alt="github" />
              <img className="skills-image" src={javascript} alt="javascript" />
              <img className="skills-image" src={react} alt="react" />
              <img className="skills-image" src={sass} alt="sass" />
              <img className="skills-image" src={firebase} alt="firebase" />
            </div>
          </div>
        </div>
      </section>
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
              <img className="skills-image" src={github} alt="github" />
            </div>
          </div>
          <div className="right-project">
            <a
              href="https://github.com/haoxle/Hangman"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="https://haoxle.github.io/PunkApi/"
              target="_blank"
              rel="noreferrer"
            >
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
              <img className="skills-image" src={jest} alt="jest" />
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
            <a
              href="https://haoxle.github.io/MapleMaze/"
              target="_blank"
              rel="noreferrer"
            >
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
              rel="noreferrer"
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
