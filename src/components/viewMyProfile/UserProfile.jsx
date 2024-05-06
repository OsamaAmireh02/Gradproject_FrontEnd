import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useState for managing state
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PostMethod from '../PostMethod';

function UserProfile() {

  const id = localStorage.getItem('id');
  const blk = { color: 'white' };

  const [firstName, setFirstName] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carPlateNumber, setCarPlateNumber] = useState('');
  const [carModel, setCarModel] = useState();

  const handleButtonClick = async (e) => {


    const endpoint = '/user/update'; // Replace with your actual endpoint
    const requestData = {
      id,
      carModel,
      carColor,
      carPlateNumber
    }; // Your data object

    try {
      e.preventDefault();
      const apiResponse = await PostMethod(endpoint, requestData);
      console.log('API Response:', apiResponse);
    } catch (error) {
      console.error('Error making authenticated request:', error);
      // Handle the error
    }
  };
  // Initialize state variables


  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const data = { email };

      // Replace with your actual API endpoint
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <>
        <Container className='my-3' style={{
          width: '80%',
          'position': 'sticky',
          'height': '74vh'

        }}>
          <Form onSubmit={handleButtonClick}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={localStorage.getItem('email')}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Plate Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Car Plate Number"
                    value={carPlateNumber}
                    onChange={(e) => setCarPlateNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Model</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Car Model"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Car Color"
                    value={carColor}
                    onChange={(e) => setCarColor(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>

            </Row>

            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    </div>
  );
}

export default UserProfile;
