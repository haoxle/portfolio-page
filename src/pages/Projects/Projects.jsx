import "./Projects.scss";
import embroidery from "../../assets/embroidery.jpg";

const Projects = () => {
  return (
    <>
      <div class="container">
        <img src={embroidery} alt="Avatar" class="image" />
        <div class="middle">
          <div class="text">John Doe</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
