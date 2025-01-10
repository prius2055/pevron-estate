import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';

const SuccessFlashMessage = () => {
  return (
    <div className="modal_form_container">
      <div className="success_container">
        <h3>Message Sent Successfully</h3>
        <FontAwesomeIcon icon={faCheck} className="success_icon" />
        <p>One of our representatives will get in touch with you shortly</p>
        <Link to="/">Close</Link>
      </div>
    </div>
  );
};

export default SuccessFlashMessage;
