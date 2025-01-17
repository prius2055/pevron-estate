import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

const ErrorMessage = () => {
  return (
    <div className="modal_form_container">
      <div className="success_container">
        <h3>Error Sending Message</h3>

        <p>
          Please check your network and try again later. If error persist kindly
          reach out to us using the contacts provided
        </p>
        <Link to="/">Close</Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
