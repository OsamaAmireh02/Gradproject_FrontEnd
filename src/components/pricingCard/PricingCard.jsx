import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';

function PricingCard() {
  return (
    <Row className="my-3">
    <Col lg={4} className='my-3'>
    <Card className="text-center card" >
      <Card.Header>Prices</Card.Header>
      <Card.Body>
        <Card.Title>1JD\Per Hour!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
        <Button className='bottonn' variant="light" href="/login">YALLA!</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className='my-3'>
    <Card className="text-center">
      <Card.Header>Prices</Card.Header>
      <Card.Body>
        <Card.Title>5 JD\Per Full day!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
        <Button className='bottonn' variant="light" href="/login">YALLA!</Button>
      </Card.Body>
      <Card.Footer>Full Day means from 07:00 - 17:00</Card.Footer>
    </Card>
    
    </Col>
    <Col lg={4} className='my-3'>
    <Card className="text-center">
      <Card.Header>Prices</Card.Header>
      <Card.Body>
        <Card.Title>2JD\Per 3 Hours!</Card.Title>
        <Card.Text>
          Enjoy Comfort and secure Parking for your car only for this price.
        </Card.Text>
        <Button className='bottonn' variant="light" href="/login">YALLA!</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  );
}

export default PricingCard;