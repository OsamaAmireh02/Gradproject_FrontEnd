import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useState for managing state
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PostMethod from '../PostMethod';

function UserProfile() {

  const [userData, setUserData] = useState({
    firstName: '',
    carColor: '',
    carModel: '',
    carPlateNumber: '',
  });

  const id = localStorage.getItem('id');
  const blk = { color: 'white' };

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
      window.location.href = '/?success=true';


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

      axios
        .post('http://localhost:8080/user/getByEmail', data, config)
        .then((response) => {
          console.log(response.data)
          const { carColor, carModel, carPlateNumber, email, faculty, firstName, id, lastName, phoneNumber, userStatus } = response.data;
          // Update state with retrieved data
          setUserData
            ({
              carColor, carModel, carPlateNumber, email, faculty, firstName, id, lastName, phoneNumber, userStatus
            });
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
          // Handle errors
        });

      // Replace with your actual API endpoint
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <>
        <Container className='my-3' style={{
          width: '80%',
          'position': 'sticky',
          'minHeight': '74vh'

        }}>
          <Form onSubmit={handleButtonClick}>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData.firstName}
                    value={userData.firstName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData.lastName}
                    value={userData.lastName}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData.email}
                    value={userData.email}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData.phoneNumber}
                    value={userData.phoneNumber}
                    onChange={(e) => setCarPlateNumber(e.target.value)}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Faculty</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData.faculty}
                    value={userData.faculty}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Plate Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData
                      .carPlateNumber || "Car Plate Number"}
                    value={carPlateNumber}
                    onChange={(e) => setCarPlateNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Model</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData
                      .carModel || "Car Model"}
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={blk}>Car Color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={userData
                      .carColor || "Car Color"}
                    value={carColor}
                    onChange={(e) => setCarColor(e.target.value)}
                  />
                </Form.Group>
              </Col>
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
