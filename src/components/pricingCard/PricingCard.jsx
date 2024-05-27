import { Col, Row } from 'react-bootstrap';
import './styles.css';
import React from 'react';



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
              <p className='mx-3' style={{ textAlign: 'center' }}>"Discover affordable and flexible parking plans tailored to your needs."</p>
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
              <p className='mx-3' style={{ textAlign: 'center' }}>"Learn more about our mission to provide convenient and secure parking for university students."</p>
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
              <p className='mx-3' style={{ textAlign: 'center' }}>"Get in touch with us for any inquiries or support—we're here to help!"<br />
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PricingCard;