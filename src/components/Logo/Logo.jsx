import "./Logo.scss";
import logo from "../../assets/Corrected.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-ctner">
      <Link to="/">
        <img className="logo-img" src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <h1 className="logo-name">HAO LE</h1>
      </Link>
    </div>
  );
};

export default Logo;
