import { work } from "../../data/work";
import "./Experience.scss";
const Experience = () => {
  const workExperience = work.map((job, i) => {
    return (
      <>
        <div className="work">
          <h1 className="work__title">{job.title}</h1>
          <h2 className="work__place">{job.work}</h2>
          <p className="work__date">{job.date} </p>
        </div>
      </>
    );
  });

  const workExperience2 = work.map((job, i) => {
    const descriptionLine = job.description.map((line) => {
      return (
        <ul className="work__desc__list">
          <li className="work__desc"> {line}</li>
        </ul>
      );
    });
    return (
      <>
        <div className="description">
          <p className="work__desc">{descriptionLine}</p>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="experience">{workExperience}</div>
      <div className="experience2">{workExperience2}</div>
    </>
  );
};

export default Experience;
