import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function ViewProfile(props) {

  return (
    <div>
      <Container>
        <Row className='my-3'>
          <Col>
            <strong>First Name: </strong>
            {props.firstName} 
          </Col>
          <Col>
            <strong>Last Name: </strong>
            {props.lastName} 
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Email: </strong>
            {props.email} 
          </Col>
          <Col>
            <strong>Phone Number: </strong>
            {props.phoneNumber}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Gender: </strong>
            {props.gender}
          </Col>
          <Col>
            <strong>Date Of Birth: </strong>
            {props.DOB}
          </Col>
        </Row>
        <Row className='my-3'>
          <Col>
            <strong>Car Model: </strong>
            {props.carModel}
          </Col>
          <Col>
            <strong>Car Color: </strong>
            {props.carColor}
          </Col>
        </Row>
        <Row >
          <Button variant="light" style={{ backgroundColor: '#EEEEEE' }}>Edit My Profile</Button>
        </Row>
      </Container>
    </div>
  )
}

export default ViewProfile
