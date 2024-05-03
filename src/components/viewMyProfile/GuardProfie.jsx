import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useState for managing state
import { Col, Container, Row } from 'react-bootstrap';

function GuardProfile() {
  // Initialize state variables
  const [adminData, setAdminData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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
          const { firstName, lastName, email, phoneNumber } = response.data;
          // Update state with retrieved data
          setAdminData({
            firstName,
            lastName,
            email,
            phoneNumber,
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
            'height': '77vh'}}>
        <Row className='my-3'>
          <Col>
            <strong>First Name: </strong>
            {adminData.firstName}
          </Col>
          <Col>
            <strong>Last Name: </strong>
            {adminData.lastName}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Email: </strong>
            {adminData.email}
          </Col>
          <Col>
            <strong>Phone Number: </strong>
            {adminData.phoneNumber}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GuardProfile;
