import "./Logo.scss";
import logo from "../../assets/Corrected.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-ctner">
        <img className="logo-img" src={logo} alt="logo" />
        <h1 className="logo-name">HAO LE</h1>
      </div>
    </Link>
  );
};

export default Logo;
