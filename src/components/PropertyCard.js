import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({ property, currencySymbol }) => {
  const currencySymbolData = currencySymbol;
  const formatPrice = (value, currency) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
      value
    );

  //   console.log(Card);
  //   console.log(currencySymbol);

  return (
    <Link
      to={`/properties/${property.id}`}
      className="property-card"
      key={property.id}
      state={currencySymbolData}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={property.mainImage}
        alt={property.name}
        className="property-image"
      />
      <div className="p-card-notes">
        <div className="p-name">
          <FontAwesomeIcon icon={faHouse} className="p-card-icon" />
          <h4>{property.name}</h4>
        </div>

        <div className="p-details">
          <div>
            <div className="p-type">
              <FontAwesomeIcon icon={faBed} className="p-card-icon" />
              <p>{property.type}</p>
            </div>
            <div className="p-location">
              <FontAwesomeIcon icon={faLocationDot} className="p-card-icon" />
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
      <div className="p-price">
        {property.price === 0 ? (
          'SOLD OUT'
        ) : (
          <span>{formatPrice(property.price, currencySymbol)}</span>
        )}
      </div>
    </Link>
  );
};

export default PropertyCard;
