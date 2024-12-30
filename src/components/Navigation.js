import Logo from '../img/logo.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <img src={Logo} alt="Logo of Pevron site" className="logo" />

        <ul className="nav-links">
          <a href="#hero" className="nav-item">
            Home
          </a>
          <a href="#property-container" className="nav-item">
            Properties
          </a>

          <a href="#about-us" className="nav-item">
            About Us
          </a>

          <a href="#mortgage" className="nav-item">
            Mortgage
          </a>

          <a href="#contact" className="nav-item">
            Contact Us
          </a>

          <button className="cta">Make An Enquiry</button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
