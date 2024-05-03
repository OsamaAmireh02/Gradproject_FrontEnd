import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useState for managing state
import { Col, Container, Row } from 'react-bootstrap';

function UserProfile() {
  // Initialize state variables
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    carModel: '',
    carColor: '',
    carPlateNumber: '',
  });

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
      axios
        .post('http://localhost:8080/user/getByEmail', data, config)
        .then((response) => {
          const { firstName, lastName, email, phoneNumber, carModel, carColor, carPlateNumber } = response.data;
          // Update state with retrieved data
          setUserData({
            firstName,
            lastName,
            email,
            phoneNumber,
            carModel,
            carColor, 
            carPlateNumber
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
          // Handle errors
        });
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <Container style={{
            'position': 'sticky',
            'top': '50px',
            'height': '78.5vh'}}>
        <Row className='my-3'>
          <Col>
            <strong>First Name: </strong>
            {userData.firstName}
          </Col>
          <Col>
            <strong>Last Name: </strong>
            {userData.lastName}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Email: </strong>
            {userData.email}
          </Col>
          <Col>
            <strong>Phone Number: </strong>
            {userData.phoneNumber}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Car Model: </strong>
            {userData.carModel}
          </Col>
          <Col>
            <strong>Car Color: </strong>
            {userData.carColor}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Car Plate Number: </strong>
            {userData.carPlateNumber}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
