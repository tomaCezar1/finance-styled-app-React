import React from 'react';
import './Footer.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footerBackground">
        <div className="footer-container">
          <section className="footer-heading">
            <p>Choose the membership that suits you the best.</p>
            <p>Refund guaranteed.</p>
            <div className="form-div">
              <form action="">
                <div className="input-div">
                  <input
                    className="input"
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
              </form>
              <Button buttonClass="btn primary border">Subscribe</Button>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-wrapper">
              <div className="footer-boxes">
                <h2>About Us</h2>
                <Link to="/">Clients</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
              <div className="footer-boxes">
                <h2>Contact Us</h2>
                <Link to="/">Support</Link>
                <Link to="/">Working Hours</Link>
                <Link to="/">Sponsorships</Link>
              </div>
              <div className="footer-boxes">
                <h2>Follow Us</h2>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </footer>
          <h1 className="copyright"> &copy;LOCKEDIN 2020</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
