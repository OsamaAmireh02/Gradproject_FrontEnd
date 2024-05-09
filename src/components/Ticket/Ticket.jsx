import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QRCode from "react-qr-code";

function Ticket(props) {
    console.log(props.ticketId)
    return (
        <div>
            <Container className='mx-4 my-4' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'white', borderRadius: '4px', maxWidth: '500px' }}>
                <div className='mx-4 my-4'>
                    <h3><strong>Ticket details</strong></h3>
                    <Row className='my-3'>
                        <Col><h3>Date: </h3></Col>
                        <Col><h3>Starting Time: </h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Parking Name: </h3></Col>
                        <Col><h3>Slot Number: </h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Car Model: </h3></Col>
                        <Col><h3>Car Color: </h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Car Plate Number: </h3></Col>
                        <Col><h3>Ticket Status: </h3></Col>
                    </Row>
                    <Row>
                        <QRCode value={props.ticketId} />
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Ticket
