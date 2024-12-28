import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <img src={Logo} alt="Logo of Pevron site" className="logo" />

        <ul className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/properties" className="nav-item">
            Properties
          </Link>

          <Link to="/mortgage" className="nav-item">
            Mortgage
          </Link>

          <Link to="/about-us" className="nav-item">
            About Us
          </Link>

          <Link to="/contact-us" className="nav-item">
            Contact Us
          </Link>

          <button className="cta">Make An Enquiry</button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
