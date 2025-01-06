import React, { useEffect, useState, useRef } from 'react';
import properties from '../properties';
import Navigation from './Navigation';
import PropertyCard from './PropertyCard';
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

const CurrencyButtons = ({ currencySymbolHandler, currencyRatesHandler }) => {
  // const [currencySymbol, setCurrencySymbol] = useState('NGN');
  const [currencyRates, setCurrencyRates] = useState({});
  // const [propertyData, setPropertyData] = useState(properties);

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
    currencySymbolHandler(e.target.value);

    // console.log(currencyRates);
    // console.log(refKey);
    currencyRatesHandler(currencyRates, refKey);

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

    // const conversionRates = {
    //   naira: 1, // Assume NGN is the base currency
    //   dollar: 1 / currencyRates.NGN,
    //   pound: (1 / currencyRates.NGN) * currencyRates.GBP,
    //   euro: (1 / currencyRates.NGN) * currencyRates.EUR,
    // };

    // const selectedRate = conversionRates[refKey] || 1;

    // const updatedPropertyData = properties.map((property) => ({
    //   ...property,
    //   price: parseFloat(property.price * selectedRate).toFixed(2),
    // }));

    // setPropertyData(updatedPropertyData);
  };

  return (
    <div className="currency_buttons">
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
  );
};

export default CurrencyButtons;