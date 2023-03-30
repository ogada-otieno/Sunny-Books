import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Social Media Accounts</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: info@company.com</li>
              <li>Phone: 0701-234-567</li>
              <li>Address:P.o Box 123-10100-Nairobi</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>About Us</h3>
            <p>We are the best book selling website having won 6 trophies world wide.</p>
          </div>
          <div className="col-md-3">
            <h3>Frequently Asked Questions</h3>
            <ul>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2023 Sunny Books. All rights reserved.</p>
            <p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
