import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';
import React, { useEffect } from 'react';



function PricingCard() {
  
  return (
    
    <Row className="my-3">
    <Col lg={4} className='my-3 pt-3'>
    <Card className="text-center card shadow p-3 mb-5 rounded" style={{backgroundColor:'#f0f1ee'}}>
      <Card.Header><strong>Just an Hour</strong></Card.Header>
      <Card.Body>
        <Card.Title>1JD\Per Hour!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className='my-3'>
    <Card className="text-center card shadow p-3 mb-5 rounded" style={{backgroundColor:'#e2b714'}}>
      <Card.Header><strong>I want it ALL DAY</strong></Card.Header>
      <Card.Body>
        <Card.Title>5 JD for the whole day!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
      </Card.Body>
      <Card.Footer>Full Day means from 07:00 - 17:00</Card.Footer>
    </Card>
    
    </Col>
    <Col lg={4} className='my-3 pt-3'>
    <Card className="text-center card shadow p-3 mb-5 rounded" style={{backgroundColor:'#f0f1ee'}}>
      <Card.Header ><strong>I'll stay a little more</strong></Card.Header>
      <Card.Body>
        <Card.Title>2JD\Per 3 Hours!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  );
}

export default PricingCard;