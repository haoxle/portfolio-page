import "./Bio.scss";
import profile from "../../assets/profile.jpg";
const Bio = () => {
  return (
    <>
      <div className="profile">
        <img className="profile_picture" src={profile} alt="me" />
        <p className="profile_description">
          I was previously working as a Clinical Pharmacist in General Practice.
          My duties involved supporting patients with medicines management and
          focused on long-term prescribing in specialised areas such as:
          Diabetes, Hypertension, and many more. In addition to my expanding
          knowledge in treating co-morbidities, I was able to develop
          fundamental transferable soft skills, such as communication,
          leadership, and most importantly accountability. I discovered tech by
          chance, through a business venture where I had to support a software
          engineer in creating my website. The process was intriguing and it
          encouraged me to look into coding via Codecademy and freecodecamp.
          What excited me most, was continuously facing new challenges and
          finding smart ways to solve problems. At the time I was looking to
          change careers, and the decision to pursue developing was
          straightforward. Shortly after, I was recruited by _nology. Through
          _nology robust training program, I was able to produce various
          projects which can be seen on my projects page.
        </p>
      </div>
    </>
  );
};

export default Bio;
