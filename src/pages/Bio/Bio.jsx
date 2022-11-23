import "./Bio.scss";
import profile from "../../assets/profile.jpg";
const Bio = () => {
  return (
    <>
      <div className="profile">
        <img className="profile_picture" src={profile} alt="me" />
        <p className="profile_description">
          I was previously working as a Clinical Pharmacist where I was able to
          develop many transferable skills. I discovered tech by chance through
          a business venture where I had to support a software engineer on
          creating my website. The process was so intriguing and it encouraged
          me to look into coding via codeAcademy and freecodecamp. What excited
          me most was continuously facing new challenges and finding smart ways
          to solve problems. I pursued further by joining _nology to improve on
          my knowledge and understanding and move industries.
        </p>
      </div>
    </>
  );
};

export default Bio;
