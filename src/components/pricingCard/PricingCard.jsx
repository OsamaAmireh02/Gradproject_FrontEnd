import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';
import React, { useEffect } from 'react';



function PricingCard() {

  return (

    <Row className="my-3" style={{ display: 'flex', justifyContent: 'center' }}>
      <Col lg={4} className='my-3 pt-3'>
        <div className="PricingCard">
          <div className="PricingCard-inner">
            <div className="PricingCard-front">
              <p style={{ fontSize: '40px' }}>Our Prices</p>
            </div>
            <div className="PricingCard-back">
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4} className='my-3'>
        <div className="PricingCard">
          <div className="PricingCard-inner">
            <div className="PricingCard-front" style={{ backgroundColor: '#E9B824' }}>
              <p style={{ fontSize: '40px' }}>About Us</p>
            </div>
            <div className="PricingCard-back">
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4} className='my-3 pt-3'>
        <div className="PricingCard">
          <div className="PricingCard-inner">
            <div className="PricingCard-front">
              <p style={{ fontSize: '40px' }}>Contact Us</p>
            </div>
            <div className="PricingCard-back">
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PricingCard;