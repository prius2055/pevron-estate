import React, { useState } from 'react';
import { useParams } from 'react-router';
import properties from '../properties';
import PropertyDetailNav from './PropertyDetailNav';
import CurrencyButtons from './CurrencyButtons';

import './PropertyDetail.css';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const params = useParams();
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

  const filteredProperty = propertyData.find(
    (property) => property.id === Number(params.id)
  );

  const formatPrice = (value, currency) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
      value
    );

  return (
    <div>
      <PropertyDetailNav />
      <CurrencyButtons
        currencySymbolHandler={handleCurrencySymbol}
        currencyRatesHandler={handleCurrencyRates}
      />
      {filteredProperty && (
        <div className="property_details">
          <img src={`${filteredProperty.mainImage}`} alt="A fine apartment" />

          <div className="p_detail_right">
            <h2 className="name_property">{filteredProperty.name}</h2>
            <p className="description_property">
              {filteredProperty.description}
            </p>
            <p className="price_property">
              <span>Price:</span>

              {filteredProperty.price === 0 ? (
                <span>SOLD OUT</span>
              ) : (
                <span>
                  {formatPrice(filteredProperty.price, currencySymbol)}
                </span>
              )}
            </p>
            <p className="type_property">
              <span>Property Type:</span>
              <span>{filteredProperty.type}</span>
            </p>
            <p className="location_property">
              <span>Location:</span>
              <span>{filteredProperty.location}</span>
            </p>

            {filteredProperty.mortgageAvailable === 'True' ? (
              <div className="p-mortgage mortgage_property">
                <p>Mortgage</p>
                <p>Available</p>
              </div>
            ) : (
              ''
            )}
            <Link
              className="detail_cta_btn"
              to="/contacts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquiry
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
