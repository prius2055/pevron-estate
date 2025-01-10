import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: '7ubZcfGhvTp8kTj-0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="modal_form_container">
      <div className="contact_container">
        <h3>
          Kindly fill the form to get in touch or use the contact information
          provided
        </h3>

        <div className="contact_details">
          <form ref={form} onSubmit={sendEmail} className="form-element">
            <input
              type="text"
              placeholder="First Name"
              name="first name"
              maxlength="30"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="last name"
              maxlength="30"
            />

            <input
              type="email"
              placeholder="Email address"
              required
              name="email"
              title="Your email address should be lower case"
            />

            <textarea
              name="message"
              required
              placeholder="Enter text here"
              maxlength="500"
              cols="30"
              rows="5"
            ></textarea>
            <div class="btn-form-container">
              <button type="submit">Submit</button>
              <span class="error" aria-live="polite"></span>
            </div>
          </form>
          <div className="form_details">
            <ul className="footer-nav-links">
              <li className="footer-nav-item">
                <FontAwesomeIcon icon={faLocationDot} className="footer-icon" />
                <div className="footer-details">
                  <p> 44 Obafemi Awolowo Way Ikeja Lagos State, Nigeria</p>
                  <p>20-22 Wenlock Road Hoxton London N1 7TA, United Kingdom</p>
                </div>
              </li>
              <li className="footer-nav-item">
                <FontAwesomeIcon icon={faPhoneVolume} className="footer-icon" />
                <div className="footer-details">
                  <div>
                    <span>Nigeria</span>
                    <span>+234-816-639-3760</span>
                  </div>
                  <div>
                    <span>Dubai</span>
                    <span>+971-527-790-821</span>
                  </div>
                  <div>
                    <span>UK</span>
                    <span>+44-207-863-7820</span>
                  </div>
                  <div>
                    <span>Ireland</span>
                    <span>+353879017005</span>
                  </div>
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
    </div>
  );
};

export default Contacts;
