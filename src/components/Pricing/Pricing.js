import React from 'react';
import './Pricing.css';

import Button from '../Button/Button';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';

function Pricing() {
  return (
    <>
      <div className="pricing-background-color">
        <div className="pricing-container">
          <div className="cards-wrapper">
            <div className="card-background">
              <div className="pricing-card-info">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Gold</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing-list">
                  <li>1000 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonClass="btn primary pricing-btn">
                  Choose Plan
                </Button>
              </div>
            </div>

            <div className="card-background">
              <div className="pricing-card-info">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Platinum</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing-list">
                  <li>10,000 Transactions</li>
                  <li>10% Cash Back</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonClass="btn blue pricing-btn">Choose Plan</Button>
              </div>
            </div>

            <div className="card-background">
              <div className="pricing-card-info">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing-list">
                  <li>5000 Transactions</li>
                  <li>5% Cash Back</li>
                  <li>$50,000 Limit</li>
                </ul>
                <Button buttonClass="btn primary pricing-btn">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
