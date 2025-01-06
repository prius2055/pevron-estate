import React, { useEffect, useState, useRef } from 'react';
import properties from '../properties';
import Navigation from './Navigation';
import PropertyCard from './PropertyCard';
import CurrencyButtons from './CurrencyButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import HeroImage from '../img/hero.png';
import AboutImage from '../img/about-us.png';
import IconHome from '../img/icon/house.png';
import IconBuy from '../img/icon/buy-home.png';
import IconSale from '../img/icon/sale.png';
import Mortgage from '../img/mortgage.jpg';
import Logo from '../img/logo.png';

import './Dashboard.css';

const Dashboard = () => {
  const [currencySymbol, setCurrencySymbol] = useState('NGN');
  const [propertyData, setPropertyData] = useState(properties);

  const handleCurrencySymbol = (data) => {
    setCurrencySymbol(data);
  };

  const handleCurrencyRates = (currencyRates, refKey) => {
    const conversionRates = {
      naira: 1, // Assume NGN is the base currency
      dollar: 1 / currencyRates.NGN,
      pound: (1 / currencyRates.NGN) * currencyRates.GBP,
      euro: (1 / currencyRates.NGN) * currencyRates.EUR,
    };
    const selectedRate = conversionRates[refKey] || 1;
    const updatedPropertyData = properties.map((property) => ({
      ...property,
      price: parseFloat(property.price * selectedRate).toFixed(2),
    }));
    setPropertyData(updatedPropertyData);
  };

  return (
    <div className="dashboard-container">
      <Navigation />

      <div className="dashboard">
        <div id="hero">
          <div className="d-hero-text">
            <h1>Discover A Place You'll Love To Live</h1>
            <p>
              Find your perfect home with ease and confidence. Whether you're
              buying or renting, we combine vast expertise in real estate and
              mortgages with a commitment to trust and reliability. Let us guide
              you to the right choice, where trust meets your dream home.
            </p>

            <p className="d-hero-text-last">Discover homes, discover trust.</p>
            <a
              href="https://wa.me/2348039735678"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Make An Enquiry
            </a>
          </div>
          <img
            src={HeroImage}
            alt="A beautiful magnificient building"
            className="d-hero-image"
          />
        </div>

        <div id="properties">
          <h2>Latest Properties</h2>

          {propertyData.length !== 0 && (
            <div className="property-container">
              <CurrencyButtons
                currencySymbolHandler={handleCurrencySymbol}
                currencyRatesHandler={handleCurrencyRates}
              />

              <div className="properties-grid">
                {propertyData?.map((property) => (
                  <PropertyCard
                    property={property}
                    currencySymbol={currencySymbol}
                  />
                ))}
              </div>
            </div>
          )}
          {propertyData.length === 0 && (
            <p>No properties at the moment, please check back later</p>
          )}
        </div>
      </div>

      <div id="about-us">
        <div className="about-img">
          <img src={AboutImage} alt="Hero for About section" />
        </div>

        <div className="about-notes">
          <h2>About Us</h2>
          <h3>
            Pevron Estate: Bridging Real Estate and Finance with Expertise and
            Trust
          </h3>
          <p>
            At Pevron Estate, we specialize in connecting the worlds of real
            estate and finance, delivering comprehensive solutions for the sale,
            purchase, and rental of properties. With years of proven experience,
            we are proud to be a trusted partner for individuals and businesses
            navigating the complexities of the real estate market.
          </p>
          <p>
            Our strength lies in our well-established relationships with leading
            banks and financial institutions. This allows us to provide an
            all-inclusive service, ensuring seamless transactions and tailored
            financial solutions all under one roof.
          </p>
          <p>
            Above all, trust is the cornerstone of our success. We are committed
            to building lasting relationships with our clients, providing
            reliable guidance, and fostering confidence at every step of the
            real estate journey. At Pevron Estate, expertise, innovation, and
            trust come together to turn your property aspirations into reality.
          </p>
        </div>
      </div>

      <div className="services">
        <div className="service-card">
          <img src={IconBuy} alt="Buy a home icon" />
          <h4>Buy a Home</h4>
          <p>
            Affordable homes for sale available on the website, we can match you
            with a house you will want to call home.
          </p>
        </div>
        <div className="service-card">
          <img src={IconHome} alt="Rent a home icon" />
          <h4>Rent a Home</h4>
          <p>
            Luxury Apartments for rent, we can match you with a house you will
            want to call home.
          </p>
        </div>
        <div className="service-card">
          <img src={IconSale} alt="Sell a home icon" />
          <h4>Buy a Plot</h4>
          <p>
            Residential, Commercial and Industrial Plots in major city locations
            available for sale. We have plots that match your lifestyle and
            business.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/2348166393760"
        target="_blank"
        rel="noopener noreferrer"
        className="about-cta-btn"
      >
        Speak to an Agent
      </a>
      <div className="agent">
        <FontAwesomeIcon icon={faUsers} className="icon-users" />
        <div className="agent-notes">
          <h2>Join Our Team of Dynamic and Ambitious Agents </h2>
          <p>
            Are you ready to take your career to the next level? <br />
            Become part of a fast-growing team of professionals committed to
            excellence, innovation, and success.
          </p>
        </div>

        <a
          href="https://wa.me/2348039735678"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-agent"
        >
          Join Now
        </a>
      </div>

      <div id="mortgage">
        <div className="m-text">
          <h2>Mortage In Nigeria</h2>
          <p>
            At Pevron Estate we have close relationships with several reputable
            mortgage brokers and financial institutions. These include
            independent mortgage brokers in the UK as well partnerships with
            various mortgage banks in Nigeria. If you do not have a mortgage
            broker or solicitor, we can recommend you to our partners who can
            assist so you could have a seamless purchase.
          </p>
          <p>
            For those living abroad looking at purchasing property in Nigeria,
            we have mortgage products available through top Nigerian banks and
            financial institutions. banks, offering varying interest rates,
            mortgage criteria, deposit (equity contribution) requirements with
            repayments over a maximum period of 15 years.
          </p>

          <a
            href="https://wa.me/2348039735678"
            target="_blank"
            rel="noopener noreferrer"
          >
            Speak to a mortgage Adviser
          </a>
        </div>

        <div className="m-image">
          <img src={Mortgage} alt="A mortgage agent" />
        </div>
      </div>

      <footer>
        <div id="contact">
          <div className="footer-grp">
            <img
              src={Logo}
              alt="Logo at footer level"
              className="footer-logo"
            />
            <p className="footer-grp-left">
              Your Dream Home is no longer a dream. <br />
              Discover homes, discover trust.
            </p>
          </div>

          <div className="footer-grp-right">
            <div className="footer-grp">
              <h3>Quick Links</h3>
              <ul className="footer-nav-links">
                <a href="#hero" className="footer-nav-item">
                  Home
                </a>
                <a href="#property-container" className="footer-nav-item">
                  Properties
                </a>

                <a href="#mortgage" className="footer-nav-item">
                  Mortgage
                </a>

                <a href="#about-us" className="footer-nav-item">
                  About Us
                </a>

                <a href="#contact" className="footer-nav-item">
                  Contact Us
                </a>
              </ul>
            </div>
            <div className="footer-grp">
              <h3>Services</h3>
              <ul className="footer-nav-links">
                <li className="footer-nav-item">Buy A Home</li>
                <li className="footer-nav-item">Sell A Home</li>
                <li className="footer-nav-item">Rent A Home</li>
                <li className="footer-nav-item">Mortgage</li>
                <li className="footer-nav-item">Real Estate Financing</li>
              </ul>
            </div>

            <div className="footer-grp">
              <h3>Contacts</h3>
              <ul className="footer-nav-links">
                <li className="footer-nav-item">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="footer-icon"
                  />
                  <div className="footer-details">
                    <p> 44 Obafemi Awolowo Way Ikeja Lagos State, Nigeria</p>
                    <p>
                      20-22 Wenlock Road Hoxton London N1 7TA, United Kingdom
                    </p>
                  </div>
                </li>
                <li className="footer-nav-item">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="footer-icon"
                  />
                  <div className="footer-details">
                    <p>+234-816-639-3760</p>
                    <p>+971-527-790-821</p>
                    <p>+44-207-863-7820</p>
                  </div>
                </li>
                <li className="footer-nav-item">
                  <FontAwesomeIcon icon={faAt} className="footer-icon" />
                  <div className="footer-details">
                    <p>info@pevronestate.com</p>
                    <p>sales@pevronestate.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">
          &copy; Copyright Pevron Estate 2024. All right reserved
        </p>
      </footer>

      <a href="#properties" className="nav-arrow">
        <h5>to top</h5>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
};

export default Dashboard;
