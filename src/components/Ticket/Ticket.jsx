import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QRCode from "react-qr-code";
import axios from 'axios';

function Ticket(props) {

    const [data, setData] = useState({})
    const [ticketID, setTicketID] = useState('')

    const api = axios.create({
        baseURL: 'http://localhost:8080', // Replace with your API base URL
      });

    const fetchData = async () => {

    const endpoint = `/ticket/getById/${props.ticketId}`; // Replace with your actual endpoint

        try {
            const token = localStorage.getItem('token');
            if (!token) {
              console.error('Token not found. Please authenticate first.');
              return null;
            }
        
            // Set the Authorization header
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Make the request using POST method
            const response = await api.post(endpoint);
            console.log(response.data);
            setData(response.data);
            setTicketID((response.data.ticketId).toString())
            console.log(ticketID);
            return response;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error
          }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Container className='mx-4 my-4' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'white', borderRadius: '4px', maxWidth: '600px' }}>
                <div className='mx-4 my-4'>
                    <h3><strong>Ticket details</strong></h3>
                    <Row className='my-3'>
                        <Col><h3>Date: <br/>{data.date}</h3></Col>
                        <Col><h3>Starting Time: <br/>{data.fromTime}</h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Parking Name: <br/>{data.parkingName}</h3></Col>
                        <Col><h3>Slot Number: <br/>{data.slotNumber}</h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Car Model: <br/>{data.carModel}</h3></Col>
                        <Col><h3>Car Color: <br/>{data.carColor}</h3></Col>
                    </Row>
                    <Row className='my-3'>
                        <Col><h3>Car Plate Number: <br/>{data.carPlateNumber}</h3></Col>
                        <Col><h3>Ticket Status: <br/>{data.ticketStatus}</h3></Col>
                    </Row>
                    <Row>
                        <QRCode value={ticketID} />
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Ticket
