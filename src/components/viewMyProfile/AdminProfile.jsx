import axios from 'axios';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AdminProfile(props) {

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set the token in the header
          "Content-Type": "application/json", // Set the content type
        },
      };

      const data = { email }; // Create the data object with email

      // Example: Replace with your actual API endpoint
      axios
        .post("http://localhost:8080/user/getByEmail", data, config)
        .then((response) => {
          console.log("Data retrieved:", response.data);
          // Handle the retrieved data as needed
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          // Handle errors
        });
    }
  }, []);

  return (
    <div>
      <Container>
        <Row className='my-3'>
          <Col>
            <strong>First Name: </strong>
            {response.data.firstName} 
          </Col>
          <Col>
            <strong>Last Name: </strong>
            {response.data.lastName} 
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Email: </strong>
            {response.data.email} 
          </Col>
          <Col>
            <strong>Phone Number: </strong>
            {props.phoneNumber}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminProfile
