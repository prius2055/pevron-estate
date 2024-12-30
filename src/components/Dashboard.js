import React, { useEffect, useState, useRef } from 'react';
import properties from '../properties';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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
  const [currencyRates, setCurrencyRates] = useState({});
  const [propertyData, setPropertyData] = useState(properties);

  const buttonRefs = {
    naira: useRef(null),
    dollar: useRef(null),
    pound: useRef(null),
    euro: useRef(null),
  };

  const date = Date.now();
  const currentDate = new Date(date).toISOString().split('T')[0];

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/ismartcoding/currency-api/${currentDate}/03.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrencyRates({
          EUR: data.quotes.EUR,
          GBP: data.quotes.GBP,
          NGN: data.quotes.NGN,
          USD: data.quotes.USD,
        });
      });
  }, [currentDate]);

  const handleCurrencySymbolChange = (e, refKey) => {
    setCurrencySymbol(e.target.value);

    // Reset all button backgrounds
    Object.values(buttonRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.style.backgroundColor = '#fff';
        ref.current.style.color = '#333';
      }
    });

    // Change the background of the clicked button
    if (buttonRefs[refKey]?.current) {
      buttonRefs[refKey].current.style.backgroundColor = '#c13236';
      buttonRefs[refKey].current.style.color = '#fff';
    }

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

  const formatPrice = (value, currency) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
      value
    );

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
            <button className="cta">Make An Enquiry</button>
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
              <div className="p-currencies">
                <p>Show pricing in:</p>
                <div className="p-currency-grp">
                  <button
                    className="btn-naira"
                    value="NGN"
                    ref={buttonRefs.naira}
                    onClick={(e) => handleCurrencySymbolChange(e, 'naira')}
                  >
                    NGN
                  </button>
                  <button
                    className="btn-dollar"
                    value="USD"
                    ref={buttonRefs.dollar}
                    onClick={(e) => handleCurrencySymbolChange(e, 'dollar')}
                  >
                    USD
                  </button>
                  <button
                    className="btn-pound"
                    value="GBP"
                    ref={buttonRefs.pound}
                    onClick={(e) => handleCurrencySymbolChange(e, 'pound')}
                  >
                    GBP
                  </button>
                  <button
                    className="btn-euro"
                    value="EUR"
                    ref={buttonRefs.euro}
                    onClick={(e) => handleCurrencySymbolChange(e, 'euro')}
                  >
                    EUR
                  </button>
                </div>
              </div>

              <div className="properties-grid">
                {propertyData?.map((property) => (
                  <div className="property-card" key={property.id}>
                    <img
                      src={property.mainImage}
                      alt={property.name}
                      className="property-image"
                    />
                    <div className="p-card-notes">
                      <div className="p-name">
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="p-card-icon"
                        />
                        <h3>{property.name}</h3>
                      </div>

                      <div className="p-details">
                        <div>
                          <div className="p-type">
                            <FontAwesomeIcon
                              icon={faBed}
                              className="p-card-icon"
                            />
                            <p>{property.type}</p>
                          </div>
                          <div className="p-location">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="p-card-icon"
                            />
                            <p>{property.location}</p>
                          </div>
                        </div>

                        {property.mortgageAvailable === 'True' ? (
                          <div className="p-mortgage">
                            <p>Mortgage</p>
                            <p>Available</p>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                    <button className="p-price">
                      <span>{formatPrice(property.price, currencySymbol)}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {properties.length === 0 && (
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
          <h4>Sell a Home</h4>
          <p>
            Have a home, you wish to put up for sale? we can match you with
            clients.
          </p>
        </div>
      </div>

      <button className="about-cta-btn">Speak to an Agent</button>
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

        <button className="btn-agent">Join Now</button>
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

          <button>Speak to a mortgage Adviser</button>
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
