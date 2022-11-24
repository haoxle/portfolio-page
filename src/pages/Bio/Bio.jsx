import "./Bio.scss";
import profile from "../../assets/profile.jpg";
import pottery from "../../assets/pottery.jpg";
import candle from "../../assets/candle.jpg";
import embroidery from "../../assets/embroidery.jpg";
import kayak from "../../assets/kayak.jpg";
import baking from "../../assets/baking.JPG";
import museum from "../../assets/museum.jpg";

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
          _nology's robust training program, I was able to produce various
          projects which can be seen on my projects page.
        </p>
      </div>
      <div className="extracuricular">
        <h1 className="extracuricular__title">Hobbies</h1>
      </div>
      <div className="hobbies">
        <div className="container">
          <img className="container__image" src={candle} alt="candle" />
          <div className="container__text--info">
            <div className="container__text">
              <div className="container__text--info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                eveniet. Harum repudiandae et quaerat eligendi iure vero quam
                unde natus animi, ea accusamus, laboriosam suscipit molestias
                eum id consequatur sit?
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img className="container__image" src={pottery} alt="pottery" />
          <div className="container__text">
            <div className="container__text--info">
              I got into pottery shortly after the lockdown. I've always wanted
              to try my hand on throwing on the wheel but was too afraid in
              going alone. One day I built enough courage and never regretted
              it. I was able to learn so many skills, especially patience and
              have build such a good friendship in the pottery community.
            </div>
          </div>
        </div>
        <div className="container">
          <img className="container__image" src={embroidery} alt="embroidery" />
          <div className="container__text">
            <div className="container__text--info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              eveniet. Harum repudiandae et quaerat eligendi iure vero quam unde
              natus animi, ea accusamus, laboriosam suscipit molestias eum id
              consequatur sit?
            </div>
          </div>
        </div>
        <div className="container">
          <img className="container__image" src={kayak} alt="embroidery" />
          <div className="container__text">
            <div className="container__text--info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              eveniet. Harum repudiandae et quaerat eligendi iure vero quam unde
              natus animi, ea accusamus, laboriosam suscipit molestias eum id
              consequatur sit?
            </div>
          </div>
        </div>
        <div className="container">
          <img className="container__image" src={museum} alt="embroidery" />
          <div className="container__text">
            <div className="container__text--info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              eveniet. Harum repudiandae et quaerat eligendi iure vero quam unde
              natus animi, ea accusamus, laboriosam suscipit molestias eum id
              consequatur sit?
            </div>
          </div>
        </div>
        <div className="container">
          <img className="container__image" src={baking} alt="embroidery" />
          <div className="container__text">
            <div className="container__text--info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              eveniet. Harum repudiandae et quaerat eligendi iure vero quam unde
              natus animi, ea accusamus, laboriosam suscipit molestias eum id
              consequatur sit?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
