import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import './Navigation.css';

const PropertyDetailNav = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <img src={Logo} alt="Logo of Pevron site" className="logo" />

        <Link to="/" className="cta" target="_blank" rel="noopener noreferrer">
          Back To Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetailNav;
